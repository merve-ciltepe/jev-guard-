import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  ListResourcesRequestSchema,
  ReadResourceRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';
import { DEFAULT_KVKK_RULES, DEFAULT_USER_RULES } from '../core/kvkk-rules';
import { DeterministicValidator } from '../core/validator';
import { SecurityGuard } from '../core/security';

const server = new Server(
  {
    name: 'jev-alibaba-tos-mcp',
    version: '1.0.0',
  },
  {
    capabilities: {
      tools: {},
      resources: {},
    },
  }
);

// List MCP Resources
server.setRequestHandler(ListResourcesRequestSchema, async () => {
  return {
    resources: [
      {
        uri: 'tos://kvkk-matrix',
        name: 'KVKK Compliance Matrix (6698 Sayılı Kanun)',
        mimeType: 'application/json',
        description: 'Maddeler: 4 (Ölçülülük), 5 (Açık Rıza), 6 (Biyometrik Veri), 8-9 (3. Taraf Aktarımı), 11 (Haklar)',
      },
      {
        uri: 'tos://user-rules',
        name: 'Kullanıcı Savunma Kuralları (Jev Kuralları)',
        mimeType: 'application/json',
        description: 'Otomatik yenileme, gizli ücretler, tahkim dayatması ve veri satışına karşı kullanıcı tercihleri',
      },
    ],
  };
});

// Read MCP Resource
server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
  const { uri } = request.params;
  if (uri === 'tos://kvkk-matrix') {
    return {
      contents: [
        {
          uri,
          mimeType: 'application/json',
          text: JSON.stringify(DEFAULT_KVKK_RULES, null, 2),
        },
      ],
    };
  }

  if (uri === 'tos://user-rules') {
    return {
      contents: [
        {
          uri,
          mimeType: 'application/json',
          text: JSON.stringify(DEFAULT_USER_RULES, null, 2),
        },
      ],
    };
  }

  throw new Error(`Bilinmeyen MCP Resource URI: ${uri}`);
});

// List MCP Tools
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: 'get_kvkk_matrix',
        description: 'KVKK ve GDPR yasal dayanak maddelerini ve tetikleyici anahtar kelimeleri getirir.',
        inputSchema: {
          type: 'object',
          properties: {},
        },
      },
      {
        name: 'get_user_rules',
        description: 'Kullanıcının belirlediği özel risk eşiklerini ve savunma kurallarını getirir.',
        inputSchema: {
          type: 'object',
          properties: {},
        },
      },
      {
        name: 'verify_quote',
        description: 'İddia edilen bir riskli cümlenin orijinal sözleşme metninde birebir bulunup bulunmadığını deterministik olarak doğrular.',
        inputSchema: {
          type: 'object',
          properties: {
            quote: { type: 'string', description: 'Doğrulanacak alıntı cümle' },
            documentText: { type: 'string', description: 'Orijinal sözleşme DOM metni' },
          },
          required: ['quote', 'documentText'],
        },
      },
      {
        name: 'check_prompt_injection',
        description: 'Sözleşme veya sayfa metninde yapay zekayı aldatmaya yönelik gizli prompt injection ve zararlı talimat taraması yapar.',
        inputSchema: {
          type: 'object',
          properties: {
            text: { type: 'string', description: 'İncelenecek sayfa metni' },
          },
          required: ['text'],
        },
      },
    ],
  };
});

// Call MCP Tool
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  if (name === 'get_kvkk_matrix') {
    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify(DEFAULT_KVKK_RULES, null, 2),
        },
      ],
    };
  }

  if (name === 'get_user_rules') {
    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify(DEFAULT_USER_RULES, null, 2),
        },
      ],
    };
  }

  if (name === 'verify_quote') {
    const { quote, documentText } = (args || {}) as { quote: string; documentText: string };
    const res = DeterministicValidator.verifyQuoteInDocument(quote, documentText);
    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify(res, null, 2),
        },
      ],
    };
  }

  if (name === 'check_prompt_injection') {
    const { text } = (args || {}) as { text: string };
    const inspection = SecurityGuard.inspectUntrustedContent(text);
    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify(inspection, null, 2),
        },
      ],
    };
  }

  throw new Error(`Bilinmeyen araç: ${name}`);
});

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error('JEV x Alibaba ToS MCP Server standard I/O üzerinden başarıyla başlatıldı.');
}

if (process.env.NODE_ENV !== 'test') {
  main().catch((err) => {
    console.error('MCP Server hatası:', err);
    process.exit(1);
  });
}
