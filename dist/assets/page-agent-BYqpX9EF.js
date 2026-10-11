const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SimulatorMask-Dq2GJqJc-B_GvoJqN.js","assets/llm-client-DMest4S-.js"])))=>i.map(i=>d[i]);
import{s as __esmMin}from"./llm-client-DMest4S-.js";import{a as int,c as string,d as toJSONSchema,f as init_errors,h as init_preload_helper,i as init_schemas,l as union,m as __vitePreload,n as ZodObject,o as number,p as prettifyError,r as boolean,s as object,t as init_external,u as init_json_schema_processors}from"../content.js";var init_classic=__esmMin((()=>{init_external()})),init_v4=__esmMin((()=>{init_classic()}));function stringReplaceAll(e,t,n){let r=e.indexOf(t);if(r===-1)return e;let i=t.length,a=0,o=``;do o+=e.slice(a,r)+t+n,a=r+i,r=e.indexOf(t,a);while(r!==-1);return o+=e.slice(a),o}function stringEncaseCRLFWithFirstIndex(e,t,n,r){let i=0,a=``;do{let o=e[r-1]===`\r`;a+=e.slice(i,o?r-1:r)+t+(o?`\r
`:`
`)+n,i=r+1,r=e.indexOf(`
`,i)}while(r!==-1);return a+=e.slice(i),a}var init_utilities=__esmMin((()=>{}));function assembleStyles(){let e=new Map;for(let[t,n]of Object.entries(styles$1)){for(let[t,r]of Object.entries(n))styles$1[t]={open:`\u{1B}[${r[0]}m`,close:`\u{1B}[${r[1]}m`},n[t]=styles$1[t],e.set(Number.parseInt(r[0],10),r[1]);Object.defineProperty(styles$1,t,{value:n,enumerable:!1})}return Object.defineProperty(styles$1,"codes",{value:e,enumerable:!1}),styles$1.color.close=`\x1B[39m`,styles$1.bgColor.close=`\x1B[49m`,styles$1.underlineColor.close=`\x1B[59m`,styles$1.color.ansi=wrapAnsi16(),styles$1.color.ansi256=wrapAnsi256(),styles$1.color.ansi16m=wrapAnsi16m(),styles$1.bgColor.ansi=wrapAnsi16(ANSI_BACKGROUND_OFFSET),styles$1.bgColor.ansi256=wrapAnsi256(ANSI_BACKGROUND_OFFSET),styles$1.bgColor.ansi16m=wrapAnsi16m(ANSI_BACKGROUND_OFFSET),styles$1.underlineColor.ansi=wrapUnderlineAnsi,styles$1.underlineColor.ansi256=wrapAnsi256(ANSI_UNDERLINE_OFFSET),styles$1.underlineColor.ansi16m=wrapAnsi16m(ANSI_UNDERLINE_OFFSET),Object.defineProperties(styles$1,{rgbToAnsi256:{value(e,t,n){return e===t&&t===n?e<8?16:e>248?231:Math.round((e-8)/247*24)+232:16+36*Math.round(e/255*5)+6*Math.round(t/255*5)+Math.round(n/255*5)},enumerable:!1},hexToRgb:{value(e){let t=/[\da-f]{6}|[\da-f]{3}/i.exec(e.toString(16));if(!t)return[0,0,0];let[n]=t;n.length===3&&(n=[...n].map(e=>e+e).join(``));let r=Number.parseInt(n,16);return[r>>16&255,r>>8&255,r&255]},enumerable:!1},hexToAnsi256:{value:e=>styles$1.rgbToAnsi256(...styles$1.hexToRgb(e)),enumerable:!1},ansi256ToAnsi:{value(e){if(e<8)return 30+e;if(e<16)return 90+(e-8);let t,n,r;if(e>=232)t=((e-232)*10+8)/255,n=t,r=t;else{e-=16;let i=e%36;t=Math.floor(e/36)/5,n=Math.floor(i/6)/5,r=i%6/5}let i=Math.max(t,n,r)*2;if(i===0)return 30;let a=30+(Math.round(r)<<2|Math.round(n)<<1|Math.round(t));return i===2&&(a+=60),a},enumerable:!1},rgbToAnsi:{value:(e,t,n)=>styles$1.ansi256ToAnsi(styles$1.rgbToAnsi256(e,t,n)),enumerable:!1},hexToAnsi:{value:e=>styles$1.ansi256ToAnsi(styles$1.hexToAnsi256(e)),enumerable:!1}}),styles$1}var ANSI_BACKGROUND_OFFSET,ANSI_UNDERLINE_OFFSET,wrapAnsi16,wrapAnsi256,wrapAnsi16m,wrapUnderlineAnsi,styles$1,modifierNames,foregroundColorNames,backgroundColorNames,underlineColorNames,colorNames,ansiStyles,init_ansi_styles=__esmMin((()=>{ANSI_BACKGROUND_OFFSET=10,ANSI_UNDERLINE_OFFSET=20,wrapAnsi16=(e=0)=>t=>`\u{1B}[${t+e}m`,wrapAnsi256=(e=0)=>t=>`\u{1B}[${38+e};5;${t}m`,wrapAnsi16m=(e=0)=>(t,n,r)=>`\u{1B}[${38+e};2;${t};${n};${r}m`,wrapUnderlineAnsi=e=>`\u{1B}[58;5;${e<90?e-30:e-90+8}m`,styles$1={modifier:{reset:[0,0],bold:[1,22],dim:[2,22],italic:[3,23],underline:[4,24],underlineDouble:[`4:2`,24],underlineCurly:[`4:3`,24],underlineDotted:[`4:4`,24],underlineDashed:[`4:5`,24],overline:[53,55],inverse:[7,27],hidden:[8,28],strikethrough:[9,29]},color:{black:[30,39],red:[31,39],green:[32,39],yellow:[33,39],blue:[34,39],magenta:[35,39],cyan:[36,39],white:[37,39],blackBright:[90,39],gray:[90,39],grey:[90,39],redBright:[91,39],greenBright:[92,39],yellowBright:[93,39],blueBright:[94,39],magentaBright:[95,39],cyanBright:[96,39],whiteBright:[97,39]},bgColor:{bgBlack:[40,49],bgRed:[41,49],bgGreen:[42,49],bgYellow:[43,49],bgBlue:[44,49],bgMagenta:[45,49],bgCyan:[46,49],bgWhite:[47,49],bgBlackBright:[100,49],bgGray:[100,49],bgGrey:[100,49],bgRedBright:[101,49],bgGreenBright:[102,49],bgYellowBright:[103,49],bgBlueBright:[104,49],bgMagentaBright:[105,49],bgCyanBright:[106,49],bgWhiteBright:[107,49]},underlineColor:{underlineBlack:[`58;5;0`,59],underlineRed:[`58;5;1`,59],underlineGreen:[`58;5;2`,59],underlineYellow:[`58;5;3`,59],underlineBlue:[`58;5;4`,59],underlineMagenta:[`58;5;5`,59],underlineCyan:[`58;5;6`,59],underlineWhite:[`58;5;7`,59],underlineBlackBright:[`58;5;8`,59],underlineGray:[`58;5;8`,59],underlineGrey:[`58;5;8`,59],underlineRedBright:[`58;5;9`,59],underlineGreenBright:[`58;5;10`,59],underlineYellowBright:[`58;5;11`,59],underlineBlueBright:[`58;5;12`,59],underlineMagentaBright:[`58;5;13`,59],underlineCyanBright:[`58;5;14`,59],underlineWhiteBright:[`58;5;15`,59]}},Object.keys(styles$1.modifier),foregroundColorNames=Object.keys(styles$1.color),backgroundColorNames=Object.keys(styles$1.bgColor),Object.keys(styles$1.underlineColor),[...foregroundColorNames,...backgroundColorNames],ansiStyles=assembleStyles()})),level,colorSupport,supportsColor,init_browser=__esmMin((()=>{level=`navigator`in globalThis?globalThis.navigator.userAgentData&&globalThis.navigator.userAgentData.brands.find(({brand:e})=>e===`Chromium`)?.version>93?3:+!!/\b(?:Chrome|Chromium)\//.test(globalThis.navigator.userAgent):0,colorSupport=level!==0&&{level,hasBasic:!0,has256:level>=2,has16m:level>=3},supportsColor={stdout:colorSupport,stderr:colorSupport}}));function createChalk(e){return chalkFactory(e)}var stdoutColor,stderrColor,GENERATOR,STYLER,IS_EMPTY,LEVEL,styles,assertValidLevel,levelDescriptor,applyOptions,chalkFactory,createModelConverters,proto,createStyler,createBuilder,applyStyle,chalk,chalkStderr,init_source=__esmMin((()=>{init_utilities(),init_ansi_styles(),init_browser(),{stdout:stdoutColor,stderr:stderrColor}=supportsColor,GENERATOR=Symbol(`GENERATOR`),STYLER=Symbol(`STYLER`),IS_EMPTY=Symbol(`IS_EMPTY`),LEVEL=Symbol(`LEVEL`),styles=Object.create(null),assertValidLevel=e=>{if(!Number.isSafeInteger(e)||e<0||e>3)throw Error("The `level` should be an integer from 0 to 3")},levelDescriptor={enumerable:!0,get(){return this[LEVEL]},set(e){assertValidLevel(e),this[LEVEL]=e}},applyOptions=(e,t={})=>{t.level!==void 0&&assertValidLevel(t.level);let n=stdoutColor?stdoutColor.level:0;e[LEVEL]=t.level===void 0?n:t.level},chalkFactory=e=>{let t=(...e)=>e.join(` `);return applyOptions(t,e),Object.setPrototypeOf(t,createChalk.prototype),t},Object.setPrototypeOf(createChalk.prototype,Function.prototype);for(let[e,t]of Object.entries(ansiStyles))styles[e]={get(){let n=createBuilder(this,createStyler(t.open,t.close,this[STYLER]),this[IS_EMPTY]);return Object.defineProperty(this,e,{value:n}),n}};styles.visible={get(){let e=createBuilder(this,this[STYLER],!0);return Object.defineProperty(this,"visible",{value:e}),e}},createModelConverters=(e,t)=>{let n=ansiStyles[t];if(e===`rgb`){let e=(e,t,r)=>n.ansi(ansiStyles.rgbToAnsi(e,t,r));return[e,e,(e,t,r)=>n.ansi256(ansiStyles.rgbToAnsi256(e,t,r)),n.ansi16m]}if(e===`hex`){let e=e=>n.ansi(ansiStyles.hexToAnsi(e));return[e,e,e=>n.ansi256(ansiStyles.hexToAnsi256(e)),e=>n.ansi16m(...ansiStyles.hexToRgb(e))]}let r=e=>n.ansi(ansiStyles.ansi256ToAnsi(e));return[r,r,n.ansi256,n.ansi256]};for(let e of[`rgb`,`hex`,`ansi256`]){let t=e[0].toUpperCase()+e.slice(1);for(let[n,r]of[[e,`color`],[`bg`+t,`bgColor`],[`underline`+t,`underlineColor`]]){let{close:t}=ansiStyles[r],i=createModelConverters(e,r);styles[n]={get(){let e=function(e,n,r){let a=i[this.level](e,n,r);return createBuilder(this,createStyler(a,t,this[STYLER]),this[IS_EMPTY])};return Object.defineProperty(this,n,{value:e}),e}}}}proto=Object.defineProperties(()=>{},{...styles,level:{enumerable:!0,get(){return this[GENERATOR].level},set(e){this[GENERATOR].level=e}}}),createStyler=(e,t,n)=>{let r,i;return n===void 0?(r=e,i=t):(r=n.openAll+e,i=t+n.closeAll),{open:e,close:t,openAll:r,closeAll:i,parent:n}},createBuilder=(e,t,n)=>{let r=(...e)=>e.length===1?applyStyle(r,``+e[0]):e.length===2?applyStyle(r,`${e[0]??``} ${e[1]??``}`):applyStyle(r,e.join(` `));return Object.setPrototypeOf(r,proto),r[GENERATOR]=e[GENERATOR]??e,r[STYLER]=t,r[IS_EMPTY]=n,r},applyStyle=(e,t)=>{if(e[GENERATOR][LEVEL]<=0||!t)return e[IS_EMPTY]?``:t;let n=e[STYLER];if(n===void 0)return t;let{openAll:r,closeAll:i}=n;if(t.includes(`\x1B`))for(;n!==void 0;)t=stringReplaceAll(t,n.close,n.open),n=n.parent;let a=t.indexOf(`
`);return a!==-1&&(t=stringEncaseCRLFWithFirstIndex(t,i,r,a)),r+t+i},Object.defineProperties(createChalk.prototype,{...styles,level:levelDescriptor}),chalk=createChalk(),createChalk({level:stderrColor?stderrColor.level:0})}));function debug(...e){console.debug(chalk.gray(`[LLM]`),...e)}function zodToOpenAITool(e,t){return{type:`function`,function:{name:e,description:t.description,parameters:toJSONSchema(t.inputSchema,{target:`openapi-3.0`})}}}function modelPatch(e,t){let n=e.model||``;if(!n)return e;let r=getProvider(t),i=normalizeModelName(n);if(i.startsWith(`qwen`)&&(r===`openrouter`&&i.startsWith(`qwen38-max`)?(debug(`Patch Qwen3.8-max on OpenRouter: reasoning_effort=low, remove tool_choice`),e.reasoning_effort=`low`,delete e.tool_choice):(debug(`Patch Qwen: disable thinking`),e.enable_thinking=!1),e.temperature===void 0&&!/max|plus/.test(i)&&(debug(`Patch Qwen: raise temperature to 1.0`),e.temperature=1)),i.startsWith(`deepseek`)&&(debug(`Patch DeepSeek: disable thinking, remove tool_choice`),e.thinking={type:`disabled`},delete e.tool_choice),i.startsWith(`gpt`)&&(i.startsWith(`gpt-5`)&&(e.verbosity=`low`),i.includes(`chat-latest`)?(debug(`Patch chat-latest: omit reasoning_effort and temperature`),delete e.reasoning_effort,delete e.temperature):/^gpt-5[12](-|$)/.test(i)?(debug(`Patch GPT-5.1/5.2: reasoning_effort=none`),e.reasoning_effort=`none`):/^gpt-5(-|$)/.test(i)?(debug(`Patch GPT-5: reasoning_effort=minimal`),e.reasoning_effort=`minimal`):(debug(`Patch GPT: omit reasoning_effort`),delete e.reasoning_effort)),i.startsWith(`claude`)&&(/opus|sonnet|haiku/.test(i)?(debug(`Patch Claude: disable thinking`),e.thinking={type:`disabled`},r!==`openrouter`&&(e.tool_choice===`required`?(debug(`Applying Claude patch: convert tool_choice "required" to { type: "any" }`),e.tool_choice={type:`any`}):e.tool_choice?.function?.name&&(debug(`Applying Claude patch: convert tool_choice format`),e.tool_choice={type:`tool`,name:e.tool_choice.function.name}))):(debug(`Patch Claude: reasoning_effort=low`),e.reasoning_effort=`low`,delete e.tool_choice)),i.startsWith(`gemini`)&&(debug(`Patch Gemini: reasoning_effort=low`),e.reasoning_effort=`low`,/^gemini-25(?!.*pro)/.test(i)?(debug(`Patch Gemini 2.5 non-Pro: reasoning_effort=none`),e.reasoning_effort=`none`):(i.startsWith(`gemini-35-flash`)||i.startsWith(`gemini-31-flash-lite`)||i.startsWith(`gemini-3-flash`))&&(debug(`Patch Gemini 3.x Flash/Lite: reasoning_effort=minimal`),e.reasoning_effort=`minimal`)),i.startsWith(`glm`)&&(/^glm-5[3-9]/.test(i)?(debug(`Patch GLM 5.3+: reasoning_effort=low`),e.reasoning_effort=`low`):(debug(`Patch GLM: disable thinking`),e.thinking={type:`disabled`})),i.startsWith(`hy`)&&(debug(`Patch Hunyuan: disable thinking, reasoning_effort=low`),e.thinking={type:`disabled`},e.reasoning_effort=`low`),i.startsWith(`grok`)&&(/^grok-4-?3/.test(i)?(debug(`Patch Grok 4.3: reasoning_effort=none`),e.reasoning_effort=`none`):(i.startsWith(`grok-3-mini`)||i.startsWith(`grok-code-fast`))&&(debug(`Patch Grok mini/code: reasoning_effort=low`),e.reasoning_effort=`low`)),i.startsWith(`kimi`)&&(i.startsWith(`kimi-k3`)?(debug(`Patch Kimi K3: use required tool choice, remove parallel tool calls`),delete e.parallel_tool_calls,e.tool_choice?.function?.name&&(e.tool_choice=`required`)):i.includes(`code`)||(debug(`Patch Kimi: disable thinking`),e.thinking={type:`disabled`})),i.startsWith(`minimax`)&&(debug(`Patch MiniMax: remove parallel_tool_calls`),delete e.parallel_tool_calls,i.includes(`m3`)&&(debug(`Patch MiniMax: disable thinking`),e.thinking={type:`disabled`})),r===`openrouter`){let t=e.reasoning_effort;e.thinking?.type===`disabled`||e.enable_thinking===!1||t===`none`?e.reasoning={enabled:!1}:t&&(e.reasoning={enabled:!0,effort:t})}return e}function normalizeModelName(e){let t=e.toLowerCase();return t.includes(`/`)&&(t=t.split(`/`)[1]),t=t.replace(/_/g,``),t=t.replace(/\./g,``),t}function getProvider(e){if(e)try{return new URL(e).hostname===`openrouter.ai`?`openrouter`:void 0}catch{return}}async function withRetry(e,t){let n=0;for(;;)try{return await e()}catch(e){if(e?.name===`AbortError`||e instanceof InvokeError&&!e.retryable||(n++,n>t.maxRetries))throw e;console.debug(`[LLM] retryable failure, will retry:`,e),t.onRetry(n,e),await new Promise(e=>setTimeout(e,100))}}function parseLLMConfig(e){if(!e.baseURL||!e.model)throw Error(`[PageAgent] LLM configuration required. Please provide: baseURL, model. See: https://alibaba.github.io/page-agent/docs/features/models`);return e.temperature!==void 0&&console.warn(`[PageAgent] LLMConfig.temperature is deprecated and will be removed in a future version. Use transformRequestBody to set it only for models you have verified accept it.`),{baseURL:e.baseURL,model:e.model,apiKey:e.apiKey||``,temperature:e.temperature,maxRetries:e.maxRetries??2,transformRequestBody:e.transformRequestBody??(e=>e),disableNamedToolChoice:e.disableNamedToolChoice??!1,customFetch:(e.customFetch??fetch).bind(globalThis)}}var InvokeErrorTypes,RETRYABLE_TYPES,InvokeError,OpenAIClient,LLM,init_page_agent_llms=__esmMin((()=>{init_v4(),init_source(),InvokeErrorTypes={NETWORK_ERROR:`network_error`,RATE_LIMIT:`rate_limit`,SERVER_ERROR:`server_error`,NO_TOOL_CALL:`no_tool_call`,INVALID_TOOL_ARGS:`invalid_tool_args`,TOOL_EXECUTION_ERROR:`tool_execution_error`,INVALID_RESPONSE:`invalid_response`,INVALID_SCHEMA:`invalid_schema`,UNKNOWN:`unknown`,CONFIG_ERROR:`config_error`,AUTH_ERROR:`auth_error`,CONTEXT_LENGTH:`context_length`,CONTENT_FILTER:`content_filter`},RETRYABLE_TYPES=[InvokeErrorTypes.NETWORK_ERROR,InvokeErrorTypes.RATE_LIMIT,InvokeErrorTypes.SERVER_ERROR,InvokeErrorTypes.NO_TOOL_CALL,InvokeErrorTypes.INVALID_TOOL_ARGS,InvokeErrorTypes.TOOL_EXECUTION_ERROR,InvokeErrorTypes.INVALID_RESPONSE,InvokeErrorTypes.INVALID_SCHEMA,InvokeErrorTypes.UNKNOWN],InvokeError=class extends Error{type;retryable;statusCode;rawError;rawResponse;constructor(e,t,n,r){super(t),this.name=`InvokeError`,this.type=e,this.retryable=RETRYABLE_TYPES.includes(e),this.rawError=n,this.rawResponse=r}},OpenAIClient=class{config;fetch;constructor(e){this.config=e,this.fetch=e.customFetch}async invoke(e,t,n,r){n?.throwIfAborted();let i=Object.entries(t).map(([e,t])=>zodToOpenAITool(e,t)),a=`required`;r?.toolChoiceName&&!this.config.disableNamedToolChoice&&(a={type:`function`,function:{name:r.toolChoiceName}});let o={model:this.config.model,messages:e,tools:i,parallel_tool_calls:!1,tool_choice:a};this.config.temperature!==void 0&&(o.temperature=this.config.temperature),modelPatch(o,this.config.baseURL);let s;try{s=this.config.transformRequestBody(o)}catch(e){throw new InvokeError(InvokeErrorTypes.CONFIG_ERROR,`transformRequestBody failed: ${e.message}`,e)}let c=s??o,l;try{l=await this.fetch(`${this.config.baseURL}/chat/completions`,{method:`POST`,headers:{"Content-Type":`application/json`,...this.config.apiKey&&{Authorization:`Bearer ${this.config.apiKey}`}},body:JSON.stringify(c),signal:n})}catch(e){throw e?.name===`AbortError`?e:(console.error(e),new InvokeError(InvokeErrorTypes.NETWORK_ERROR,`Network request failed`,e))}if(!l.ok){let e;try{e=await l.json()}catch(e){if(e?.name===`AbortError`)throw e}let t=e?.error?.message||l.statusText;throw l.status===401||l.status===403?new InvokeError(InvokeErrorTypes.AUTH_ERROR,`Authentication failed: ${t}`,e):l.status===429?new InvokeError(InvokeErrorTypes.RATE_LIMIT,`Rate limit exceeded: ${t}`,e):l.status>=500?new InvokeError(InvokeErrorTypes.SERVER_ERROR,`Server error: ${t}`,e):new InvokeError(InvokeErrorTypes.UNKNOWN,`HTTP ${l.status}: ${t}`,e)}let u;try{u=await l.json()}catch(e){throw e?.name===`AbortError`?e:new InvokeError(InvokeErrorTypes.INVALID_RESPONSE,`Response body is not valid JSON`,e)}let d=u.choices?.[0];if(!d)throw new InvokeError(InvokeErrorTypes.INVALID_SCHEMA,`No choices in response`,u);switch(d.finish_reason){case`tool_calls`:case`function_call`:case`stop`:break;case`length`:throw new InvokeError(InvokeErrorTypes.CONTEXT_LENGTH,`Response truncated: max tokens reached`,void 0,u);case`content_filter`:throw new InvokeError(InvokeErrorTypes.CONTENT_FILTER,`Content filtered by safety system`,void 0,u);default:throw new InvokeError(InvokeErrorTypes.INVALID_SCHEMA,`Unexpected finish_reason: ${d.finish_reason}`,void 0,u)}let f=(r?.normalizeResponse?r.normalizeResponse(u):u).choices?.[0],p=f?.message?.tool_calls?.[0]?.function?.name;if(!p)throw new InvokeError(InvokeErrorTypes.NO_TOOL_CALL,`No tool call found in response`,void 0,u);let m=t[p];if(!m)throw new InvokeError(InvokeErrorTypes.UNKNOWN,`Tool "${p}" not found in tools`,void 0,u);let h=f.message?.tool_calls?.[0]?.function?.arguments;if(!h)throw new InvokeError(InvokeErrorTypes.INVALID_TOOL_ARGS,`No tool call arguments found`,void 0,u);let g;try{g=JSON.parse(h)}catch(e){throw new InvokeError(InvokeErrorTypes.INVALID_TOOL_ARGS,`Failed to parse tool arguments as JSON`,e,u)}let _=m.inputSchema.safeParse(g);if(!_.success)throw console.error(prettifyError(_.error)),new InvokeError(InvokeErrorTypes.INVALID_TOOL_ARGS,`Tool arguments validation failed`,_.error,u);let v=_.data,y;try{y=await m.execute(v)}catch(e){throw e?.name===`AbortError`?e:new InvokeError(InvokeErrorTypes.TOOL_EXECUTION_ERROR,`Tool execution failed: ${e?.message}`,e,u)}return{toolCall:{name:p,args:v},toolResult:y,usage:{promptTokens:u.usage?.prompt_tokens??0,completionTokens:u.usage?.completion_tokens??0,totalTokens:u.usage?.total_tokens??0,cachedTokens:u.usage?.prompt_tokens_details?.cached_tokens,reasoningTokens:u.usage?.completion_tokens_details?.reasoning_tokens},rawResponse:u,rawRequest:c}}},LLM=class extends EventTarget{config;client;constructor(e){super(),this.config=parseLLMConfig(e),this.client=new OpenAIClient(this.config)}async invoke(e,t,n,r){return await withRetry(async()=>this.client.invoke(e,t,n,r),{maxRetries:this.config.maxRetries,onRetry:(e,t)=>{this.dispatchEvent(new CustomEvent(`retry`,{detail:{attempt:e,maxAttempts:this.config.maxRetries,lastError:t}}))}})}}}));function normalizeResponse(e,t){let n,r=e.choices?.[0];if(!r)throw Error(`No choices in response`);let i=r.message;if(!i)throw Error(`No message in choice`);let a=i.tool_calls?.[0];if(a?.function?.arguments)n=safeJsonParse(a.function.arguments),a.function.name&&a.function.name!==`AgentOutput`&&(log(`#1: fixing tool_call`),n={action:safeJsonParse(n)});else if(i.content){let e=retrieveJsonFromString(i.content.trim());if(e)n=safeJsonParse(e),n?.name===`AgentOutput`&&(log(`#2: fixing tool_call`),n=safeJsonParse(n.arguments)),n?.type===`function`&&(log(`#3: fixing tool_call`),n=safeJsonParse(n.function.arguments)),!n?.action&&!n?.evaluation_previous_goal&&!n?.memory&&!n?.next_goal&&!n?.thinking&&(log(`#4: fixing tool_call`),n={action:safeJsonParse(n)});else throw Error(`No tool_call and the message content does not contain valid JSON`)}else throw Error(`No tool_call nor message content is present`);return n=safeJsonParse(n),n.action&&(n.action=safeJsonParse(n.action)),n.action&&t&&(n.action=validateAction(n.action,t)),n.action||(log(`#5: fixing tool_call`),n.action={wait:{seconds:1}}),{...e,choices:[{...r,message:{...i,tool_calls:[{...a||{},function:{...a?.function||{},name:`AgentOutput`,arguments:JSON.stringify(n)}}]}}]}}function validateAction(e,t){if(typeof e!=`object`||!e)return e;let n=Object.keys(e)[0];if(!n)return e;let r=t.get(n);if(!r){let e=Array.from(t.keys()).join(`, `);throw new InvokeError(InvokeErrorTypes.INVALID_TOOL_ARGS,`Unknown action "${n}". Available: ${e}`)}let i=e[n],a=r.inputSchema;if(a instanceof ZodObject&&i!==null&&typeof i!=`object`){let e=Object.keys(a.shape).find(e=>!a.shape[e].safeParse(void 0).success);e&&(log(`coercing primitive action input for "${n}"`),i={[e]:i})}let o=a.safeParse(i);if(!o.success)throw new InvokeError(InvokeErrorTypes.INVALID_TOOL_ARGS,`Invalid input for action "${n}": ${prettifyError(o.error)}`);return{[n]:o.data}}function safeJsonParse(e){if(typeof e==`string`)try{return JSON.parse(e.trim())}catch{return e}return e}function retrieveJsonFromString(e){try{let t=/({[\s\S]*})/.exec(e)??[];return t.length===0?null:JSON.parse(t[0])}catch{return null}}async function waitFor$1(e,t){t?(t.throwIfAborted(),await new Promise((n,r)=>{let i=setTimeout(()=>{t.removeEventListener(`abort`,a),n()},e*1e3),a=()=>{clearTimeout(i),r(t.reason)};t.addEventListener(`abort`,a,{once:!0})})):await new Promise(t=>setTimeout(t,e*1e3))}function truncate$1(e,t){return e.length>t?e.substring(0,t)+`...`:e}function randomID(e){let t=Math.random().toString(36).substring(2,11);if(!e)return t;let n=1e3,r=0;for(;e.includes(t);)if(t=Math.random().toString(36).substring(2,11),r++,r>1e3)throw Error(`randomID: too many tries`);return t}function uid(){let e=randomID(ids);return ids.push(e),e}async function fetchLlmsTxt(e){let t;try{t=new URL(e).origin}catch{return null}if(t===`null`)return null;if(llmsTxtCache.has(t))return llmsTxtCache.get(t);let n=`${t}/llms.txt`,r=null;try{console.log(chalk.gray(`[llms.txt] Fetching ${n}`));let e=await fetch(n,{signal:AbortSignal.timeout(3e3)});e.ok?(r=await e.text(),console.log(chalk.green(`[llms.txt] Found (${r.length} chars)`)),r.length>1e3&&(console.log(chalk.yellow(`[llms.txt] Truncating to 1000 chars`)),r=truncate$1(r,1e3))):console.debug(chalk.gray(`[llms.txt] ${e.status} for ${n}`))}catch(e){console.debug(chalk.gray(`[llms.txt] not found for ${n}`),e)}return llmsTxtCache.set(t,r),r}function assert(e,t,n){if(!e){let e=t??`Assertion failed`;throw n||console.error(chalk.red(`❌ assert: ${e}`)),Error(e)}}async function suppress(e){try{return await e()}catch(e){console.error(e);return}}function tool(e){return e}var system_prompt_default,log,_global,ids,llmsTxtCache,tools,PageAgentCore,init_page_agent_core=__esmMin((()=>{init_page_agent_llms(),init_source(),init_v4(),system_prompt_default=`You are an AI agent designed to operate in an iterative loop to automate browser tasks. Your ultimate goal is accomplishing the task provided in <user_request>.

<intro>
You excel at following tasks:
1. Navigating complex websites and extracting precise information
2. Automating form submissions and interactive web actions
3. Gathering and saving information 
4. Operate effectively in an agent loop
5. Efficiently performing diverse web tasks
</intro>

<language_settings>
- Default working language: **English**
- Use the language that user is using. Return in user's language.
</language_settings>

<input>
At every step, your input will consist of: 
1. <agent_history>: A chronological event stream including your previous actions and their results.
2. <agent_state>: Current <user_request> and <step_info>.
3. <browser_state>: Current URL, interactive elements indexed for actions, and visible page content.
</input>

<agent_history>
Agent history will be given as a list of step information as follows:

<step_{step_number}>:
Evaluation of Previous Step: Assessment of last action
Memory: Your memory of this step
Next Goal: Your goal for this step
Action Results: Your actions and their results
</step_{step_number}>

and system messages wrapped in <sys> tag.
</agent_history>

<user_request>
USER REQUEST: This is your ultimate objective and always remains visible.
- This has the highest priority. Make the user happy.
- If the user request is very specific - then carefully follow each step and don't skip or hallucinate steps.
- If the task is open ended you can plan yourself how to get it done.
</user_request>

<browser_state>
1. Browser State will be given as:

Current URL: URL of the page you are currently viewing.
Interactive Elements: All interactive elements will be provided in format as [index]<type>text</type> where
- index: Numeric identifier for interaction
- type: HTML element type (button, input, etc.)
- text: Element description

Examples:
[33]<div>User form</div>
\\t*[35]<button aria-label='Submit form'>Submit</button>

Note that:
- Only elements with numeric indexes in [] are interactive
- (stacked) indentation (with \\t) is important and means that the element is a (html) child of the element above (with a lower index)
- Elements tagged with \`*[\` are the new clickable elements that appeared on the website since the last step - if url has not changed.
- Pure text elements without [] are not interactive.
</browser_state>

<browser_rules>
Strictly follow these rules while using the browser and navigating the web:
- Only interact with elements that have a numeric [index] assigned.
- Only use indexes that are explicitly provided.
- If the page changes after, for example, an input text action, analyze if you need to interact with new elements, e.g. selecting the right option from the list.
- By default, only elements in the visible viewport are listed. Use scrolling actions if you suspect relevant content is offscreen which you need to interact with. Scroll ONLY if there are more pixels below or above the page.
- You can scroll by a specific number of pages using the num_pages parameter (e.g., 0.5 for half page, 2.0 for two pages).
- All the elements that are scrollable are marked with \`data-scrollable\` attribute. Including the scrollable distance in every directions. You can scroll *the element* in case some area are overflowed.
- If a captcha appears, tell user you can not solve captcha. Finish the task and ask user to solve it.
- If the page is not fully loaded, use the \`wait\` action.
- Do not repeat one action for more than 3 times unless some conditions changed.
- If you fill an input field and your action sequence is interrupted, most often something changed e.g. suggestions popped up under the field.
- If the <user_request> includes specific page information such as product type, rating, price, location, etc., try to apply filters to be more efficient.
- The <user_request> is the ultimate goal. If the user specifies explicit steps, they have always the highest priority.
- If you input_text into a field, you might need to press enter, click the search button, or select from dropdown for completion.
- Don't login into a page if you don't have to. Don't login if you don't have the credentials. 
- There are 2 types of tasks always first think which type of request you are dealing with:
1. Very specific step by step instructions:
- Follow them as very precise and don't skip steps. Try to complete everything as requested.
2. Open ended tasks. Plan yourself, be creative in achieving them.
- If you get stuck e.g. with logins or captcha in open-ended tasks you can re-evaluate the task and try alternative ways, e.g. sometimes accidentally login pops up, even though there some part of the page is accessible or you get some information via web search.
</browser_rules>

<capability>
- You can only handle single page app. Do not jump out of current page.
- Do not click on link if it will open in a new page (e.g., <a target="_blank">)
- It is ok to fail the task.
	- User can be wrong. If the request of user is not achievable, inappropriate or you do not have enough information or tools to achieve it. Tell user to make a better request.
	- Webpage can be broken. All webpages or apps have bugs. Some bug will make it hard for your job. It's encouraged to tell user the problem of current page. Your feedbacks (including failing) are valuable for user.
	- Trying too hard can be harmful. Repeating some action back and forth or pushing for a complex procedure with little knowledge can cause unwanted results and harmful side-effects. User would rather you complete the task with a fail.
- If you do not have knowledge for the current webpage or task. You must require user to give specific instructions and detailed steps.
</capability>

<task_completion_rules>
You must call the \`done\` action in one of three cases:
- When you have fully completed the USER REQUEST.
- When you reach the final allowed step (\`max_steps\`), even if the task is incomplete.
- When you feel stuck or unable to solve user request. Or user request is not clear or contains inappropriate content.
- If it is ABSOLUTELY IMPOSSIBLE to continue.

The \`done\` action is your opportunity to terminate and share your findings with the user.
- Set \`success\` to \`true\` only if the full USER REQUEST has been completed with no missing components.
- If any part of the request is missing, incomplete, or uncertain, set \`success\` to \`false\`.
- You can use the \`text\` field of the \`done\` action to communicate your findings and to provide a coherent reply to the user and fulfill the USER REQUEST.
- You are ONLY ALLOWED to call \`done\` as a single action. Don't call it together with other actions.
- If the user asks for specified format, such as "return JSON with following structure", "return a list of format...", MAKE sure to use the right format in your answer.
- If the user asks for a structured output, your \`done\` action's schema may be modified. Take this schema into account when solving the task!
</task_completion_rules>

<reasoning_rules>
Exhibit the following reasoning patterns to successfully achieve the <user_request>:

- Reason about <agent_history> to track progress and context toward <user_request>.
- Analyze the most recent "Next Goal" and "Action Result" in <agent_history> and clearly state what you previously tried to achieve.
- Analyze all relevant items in <agent_history> and <browser_state> to understand your state.
- Explicitly judge success/failure/uncertainty of the last action. Never assume an action succeeded just because it appears to be executed in your last step in <agent_history>. If the expected change is missing, mark the last action as failed (or uncertain) and plan a recovery.
- Analyze whether you are stuck, e.g. when you repeat the same actions multiple times without any progress. Then consider alternative approaches e.g. scrolling for more context or ask user for help.
- Ask user for help if you have any difficulty. Keep user in the loop.
- If you see information relevant to <user_request>, plan saving the information to memory.
- Always reason about the <user_request>. Make sure to carefully analyze the specific steps and information required. E.g. specific filters, specific form fields, specific information to search. Make sure to always compare the current trajectory with the user request and think carefully if thats how the user requested it.
</reasoning_rules>

<examples>
Here are examples of good output patterns. Use them as reference but never copy them directly.

<evaluation_examples>
"evaluation_previous_goal": "Successfully navigated to the product page and found the target information. Verdict: Success"
"evaluation_previous_goal": "Clicked the login button and user authentication form appeared. Verdict: Success"
</evaluation_examples>

<memory_examples>
"memory": "Found many pending reports that need to be analyzed in the main page. Successfully processed the first 2 reports on quarterly sales data and moving on to inventory analysis and customer feedback reports."
</memory_examples>

<next_goal_examples>
"next_goal": "Click on the 'Add to Cart' button to proceed with the purchase flow."
</next_goal_examples>
</examples>

<output>
{
  "evaluation_previous_goal": "Concise one-sentence analysis of your last action. Clearly state success, failure, or uncertain.",
  "memory": "1-3 concise sentences of specific memory of this step and overall progress. You should put here everything that will help you track progress in future steps. Like counting pages visited, items found, etc.",
  "next_goal": "State the next immediate goal and action to achieve it, in one clear sentence.",
  "action":{
    "Action name": {// Action parameters}
  }
}
</output>
`,log=console.log.bind(console,chalk.yellow(`[autoFixer]`)),_global=globalThis,_global.__PAGE_AGENT_IDS__||(_global.__PAGE_AGENT_IDS__=[]),ids=_global.__PAGE_AGENT_IDS__,llmsTxtCache=new Map,tools=new Map,tools.set(`done`,tool({description:`Complete task. Text is your final response to the user — keep it concise unless the user explicitly asks for detail.`,inputSchema:object({text:string(),success:boolean().default(!0)}),execute:async function(e){return Promise.resolve(`Task completed`)}})),tools.set(`wait`,tool({description:`Wait for x seconds. Can be used to wait until the page or data is fully loaded.`,inputSchema:object({seconds:number().min(1).max(10).default(1)}),execute:async function(e,{signal:t}){let n=await this.pageController.getLastUpdateTime(),r=(Date.now()-n)/1e3,i=Math.max(0,e.seconds-r);return console.log(`actualWaitTime: ${i} seconds`),await waitFor$1(i,t),`✅ Waited for ${(r+i).toFixed(2)} seconds.`}})),tools.set(`ask_user`,tool({description:`Ask the user a question and wait for their answer. Use this if you need more information or clarification.`,inputSchema:object({question:string()}),execute:async function(e,{signal:t}){if(!this.onAskUser)throw Error(`ask_user tool requires onAskUser callback to be set`);return`User answered: ${await this.onAskUser(e.question,{signal:t})}`}})),tools.set(`click_element_by_index`,tool({description:`Click element by index`,inputSchema:object({index:int().min(0)}),execute:async function(e){return(await this.pageController.clickElement(e.index)).message}})),tools.set(`input_text`,tool({description:`Click and type text into an interactive input element`,inputSchema:object({index:int().min(0),text:string()}),execute:async function(e){return(await this.pageController.inputText(e.index,e.text)).message}})),tools.set(`select_dropdown_option`,tool({description:`Select dropdown option for interactive element index by the text of the option you want to select`,inputSchema:object({index:int().min(0),text:string()}),execute:async function(e){return(await this.pageController.selectOption(e.index,e.text)).message}})),tools.set(`scroll`,tool({description:`Scroll vertically. Without index: scrolls the document. With index: scrolls the container at that index (or its nearest scrollable ancestor). Use index of a data-scrollable element to scroll a specific area.`,inputSchema:object({down:boolean().default(!0),num_pages:number().min(0).max(10).optional().default(.1),pixels:number().int().min(0).optional(),index:number().int().min(0).optional()}),execute:async function(e){return(await this.pageController.scroll({...e,numPages:e.num_pages})).message}})),tools.set(`scroll_horizontally`,tool({description:`Scroll horizontally. Without index: scrolls the document. With index: scrolls the container at that index (or its nearest scrollable ancestor). Use index of a data-scrollable element to scroll a specific area.`,inputSchema:object({right:boolean().default(!0),pixels:number().int().min(0),index:number().int().min(0).optional()}),execute:async function(e){return(await this.pageController.scrollHorizontally(e)).message}})),tools.set(`execute_javascript`,tool({description:"Execute JavaScript code on the current page. Supports async/await syntax. Use with caution! An `AbortSignal` named `signal` is available in scope: long-running async code MUST honor it (e.g. `await fetch(url, { signal })`, or `signal.throwIfAborted()` in loops)",inputSchema:object({script:string()}),execute:async function(e,{signal:t}){let n=await this.pageController.executeJavascript(e.script,t);return t.throwIfAborted(),n.message}})),PageAgentCore=class extends EventTarget{id=uid();config;tools;pageController;task=``;taskId=``;history=[];disposed=!1;onAskUser;#e=`idle`;#t;#n=new AbortController;#r=[];#i=Promise.resolve();#a=null;#o={totalWaitTime:0,lastURL:``,browserState:null};constructor(e){if(super(),this.config={...e,maxSteps:e.maxSteps??40},this.#t=new LLM(this.config),this.tools=new Map(tools),this.pageController=e.pageController,this.#t.addEventListener(`retry`,e=>{let{attempt:t,maxAttempts:n,lastError:r}=e.detail;this.#l({type:`retrying`,attempt:t,maxAttempts:n}),this.history.push({type:`error`,message:String(r),rawResponse:r.rawResponse}),this.history.push({type:`retry`,message:`LLM retry attempt ${t} of ${n}`,attempt:t,maxAttempts:n}),this.#c()}),this.config.customTools)for(let[e,t]of Object.entries(this.config.customTools))t===null?this.tools.delete(e):this.tools.set(e,t);this.config.experimentalScriptExecutionTool||this.tools.delete(`execute_javascript`)}get status(){return this.#e}get lastResult(){return this.#a}#s(){this.dispatchEvent(new Event(`statuschange`))}#c(e){e&&this.history.push(e),this.dispatchEvent(new Event(`historychange`))}#l(e){this.dispatchEvent(new CustomEvent(`activity`,{detail:e}))}#u(e){this.#e!==e&&(this.#e=e,this.#s())}pushObservation(e){this.#r.push(e)}async stop(){this.#e===`running`&&(this.#n.abort(),await this.#i)}async execute(e){if(this.disposed)throw Error(`PageAgent has been disposed. Create a new instance.`);if(this.#e===`running`)throw Error(`A task is already running.`);if(!e)throw Error(`Task is required`);this.task=e,this.taskId=uid(),this.history=[],this.#r=[],this.#o={totalWaitTime:0,lastURL:``,browserState:null},this.#n=new AbortController;let t=this.#n.signal,n;this.#i=new Promise(e=>n=e),this.#u(`running`),this.#c(),this.onAskUser||this.tools.delete(`ask_user`);let r=this.config.onBeforeStep,i=this.config.onAfterStep,a=this.config.onBeforeTask,o=this.config.onAfterTask,s=this.config.stepDelay??.4,c=this.config.maxSteps,l=0,u,d=`error`;await suppress(()=>this.pageController.showMask());try{for(await a?.(this);;){await r?.(this,l);try{console.group(`step: ${l}`),l>0&&await waitFor$1(s,t),t.throwIfAborted(),console.log(chalk.blue.bold(`👀 Observing...`)),this.#o.browserState=await this.pageController.getBrowserState(),await this.#m(l);let e=[{role:`system`,content:this.#f()},{role:`user`,content:await this.#h()}],n={AgentOutput:this.#d()};console.log(chalk.blue.bold(`🧠 Thinking...`)),this.#l({type:`thinking`});let r=await this.#t.invoke(e,n,t,{toolChoiceName:`AgentOutput`,normalizeResponse:e=>normalizeResponse(e,this.tools)}),i=r.toolResult,a=i.input,o=i.output,c={evaluation_previous_goal:a.evaluation_previous_goal,memory:a.memory,next_goal:a.next_goal},f=Object.keys(a.action)[0],p={name:f,input:a.action[f],output:o};if(this.#c({type:`step`,stepIndex:l,reflection:c,action:p,usage:r.usage,rawResponse:r.rawResponse,rawRequest:r.rawRequest}),f===`done`){let e=p.input?.success??!1,t=p.input?.text||`no text provided`;console.log(chalk.green.bold(`Task completed`),e,t),u={success:e,data:t,history:this.history},this.#a=u,d=`completed`;break}}catch(e){let t=e?.name===`AbortError`;t||console.error(`Task failed`,e);let n=t?`Task aborted`:String(e);this.#l({type:`error`,message:n}),this.#c({type:`error`,message:n,rawResponse:e}),u={success:!1,data:n,history:this.history},this.#a=u,d=t?`stopped`:`error`;break}finally{console.groupEnd(),await i?.(this,this.history)}if(l++,l>c){let e=`Step count exceeded maximum limit`;console.error(e),this.#l({type:`error`,message:e}),this.#c({type:`error`,message:e}),u={success:!1,data:e,history:this.history},this.#a=u,d=`error`;break}}return await o?.(this,u),u}catch(e){throw this.#l({type:`error`,message:String(e)}),d=`error`,e}finally{await suppress(()=>this.pageController.cleanUpHighlights()),await suppress(()=>this.pageController.hideMask()),this.#n.abort(),n(),this.#u(d)}}#d(){let e=this.tools,t=Array.from(e.entries()).map(([e,t])=>object({[e]:t.inputSchema}).describe(t.description)),n=union(t);return{description:`You MUST call this tool every step!`,inputSchema:object({evaluation_previous_goal:string().optional(),memory:string().optional(),next_goal:string().optional(),action:n}),execute:async t=>{let n=this.#n.signal;n.throwIfAborted(),console.log(chalk.blue.bold(`MacroTool input`),t);let r=t.action,i=Object.keys(r)[0],a=r[i],o=[];t.evaluation_previous_goal&&o.push(`✅: ${t.evaluation_previous_goal}`),t.memory&&o.push(`💾: ${t.memory}`),t.next_goal&&o.push(`🎯: ${t.next_goal}`);let s=o.length>0?o.join(`
`):``;s&&console.log(s);let c=e.get(i);assert(c,`Tool ${i} not found`),console.log(chalk.blue.bold(`Executing tool: ${i}`),a),this.#l({type:`executing`,tool:i,input:a});let l=Date.now(),u=await c.execute.bind(this)(a,{signal:n});n.throwIfAborted();let d=Date.now()-l;return console.log(chalk.green.bold(`Tool (${i}) executed for ${d}ms`),u),this.#l({type:`executed`,tool:i,input:a,output:u,duration:d}),i===`wait`?this.#o.totalWaitTime+=a?.seconds||0:this.#o.totalWaitTime=0,{input:t,output:u}}}}#f(){if(this.config.customSystemPrompt)return this.config.customSystemPrompt;let e=this.config.language===`zh-CN`?`中文`:`English`;return system_prompt_default.replace(/Default working language: \*\*.*?\*\*/,`Default working language: **${e}**`)}async#p(){let{instructions:e,experimentalLlmsTxt:t}=this.config,n=e?.system?.trim(),r,i=this.#o.browserState?.url||``;if(e?.getPageInstructions&&i)try{r=e.getPageInstructions(i)?.trim()}catch(e){console.error(chalk.red(`[PageAgent] Failed to execute getPageInstructions callback:`),e)}let a=t&&i?await fetchLlmsTxt(i):void 0;if(!n&&!r&&!a)return``;let o=`<instructions>
`;return n&&(o+=`<system_instructions>\n${n}\n</system_instructions>\n`),r&&(o+=`<page_instructions>\n${r}\n</page_instructions>\n`),a&&(o+=`<llms_txt>\n${a}\n</llms_txt>\n`),o+=`</instructions>

`,o}async#m(e){this.#o.totalWaitTime>=3&&this.pushObservation(`You have waited ${this.#o.totalWaitTime} seconds accumulatively. DO NOT wait any longer unless you have a good reason.`);let t=this.#o.browserState?.url||``;t!==this.#o.lastURL&&(this.pushObservation(`Page navigated to → ${t}`),this.#o.lastURL=t,await waitFor$1(.5));let n=this.config.maxSteps-e;if(n===5?this.pushObservation(`⚠️ Only ${n} steps remaining. Consider wrapping up or calling done with partial results.`):n===2&&this.pushObservation(`⚠️ Critical: Only ${n} steps left! You must finish the task or call done immediately.`),this.#r.length>0){for(let e of this.#r)this.history.push({type:`observation`,content:e}),console.log(chalk.cyan(`Observation:`),e);this.#r=[],this.#c()}}async#h(){let e=this.#o.browserState,t=``;t+=await this.#p();let n=this.history.filter(e=>e.type===`step`).length;t+=`<agent_state>
`,t+=`<user_request>
`,t+=`${this.task}\n`,t+=`</user_request>
`,t+=`<step_info>
`,t+=`Step ${n+1} of ${this.config.maxSteps} max possible steps\n`,t+=`Current time: ${new Date().toLocaleString()}\n`,t+=`</step_info>
`,t+=`</agent_state>

`,t+=`<agent_history>
`;let r=0;for(let e of this.history)e.type===`step`?(r++,t+=`<step_${r}>\n`,t+=`Evaluation of Previous Step: ${e.reflection.evaluation_previous_goal}\n`,t+=`Memory: ${e.reflection.memory}\n`,t+=`Next Goal: ${e.reflection.next_goal}\n`,t+=`Action Results: ${e.action.output}\n`,t+=`</step_${r}>\n`):e.type===`observation`?t+=`<sys>${e.content}</sys>\n`:e.type===`user_takeover`?t+=`<sys>User took over control and made changes to the page</sys>
`:e.type;t+=`</agent_history>

`;let i=e.content;return this.config.transformPageContent&&(i=await this.config.transformPageContent(i)),t+=`<browser_state>
`,t+=e.header+`
`,t+=i+`
`,t+=e.footer+`

`,t+=`</browser_state>

`,t}dispose(){console.log(`Disposing PageAgent...`),this.disposed=!0,this.pageController.dispose(),this.#n.abort(),this.dispatchEvent(new Event(`dispose`)),this.config.onDispose?.(this)}}}));function isHTMLElement(e){return!!e&&e.nodeType===1}function isInputElement(e){return e?.nodeType===1&&e.tagName===`INPUT`}function isTextAreaElement(e){return e?.nodeType===1&&e.tagName===`TEXTAREA`}function isSelectElement(e){return e?.nodeType===1&&e.tagName===`SELECT`}function isAnchorElement(e){return e?.nodeType===1&&e.tagName===`A`}function getIframeOffset(e){let t=e.ownerDocument.defaultView?.frameElement;if(!t)return{x:0,y:0};let n=t.getBoundingClientRect();return{x:n.left,y:n.top}}function getNativeValueSetter(e){return Object.getOwnPropertyDescriptor(Object.getPrototypeOf(e),`value`).set}async function waitFor(e){await new Promise(t=>setTimeout(t,e*1e3))}async function movePointerToElement(e,t,n){let r=getIframeOffset(e);window.dispatchEvent(new CustomEvent(`PageAgent::MovePointerTo`,{detail:{x:t+r.x,y:n+r.y}})),await waitFor(.3)}async function clickPointer(){window.dispatchEvent(new CustomEvent(`PageAgent::ClickPointer`))}async function enablePassThrough(){window.dispatchEvent(new CustomEvent(`PageAgent::EnablePassThrough`))}async function disablePassThrough(){window.dispatchEvent(new CustomEvent(`PageAgent::DisablePassThrough`))}function getElementByIndex(e,t){let n=e.get(t);if(!n)throw Error(`No interactive element found at index ${t}`);let r=n.ref;if(!r)throw Error(`Element at index ${t} does not have a reference`);if(!isHTMLElement(r))throw Error(`Element at index ${t} is not an HTMLElement`);return r}function blurLastClickedElement(){lastClickedElement&&=(lastClickedElement.dispatchEvent(new PointerEvent(`pointerout`,{bubbles:!0})),lastClickedElement.dispatchEvent(new PointerEvent(`pointerleave`,{bubbles:!1})),lastClickedElement.dispatchEvent(new MouseEvent(`mouseout`,{bubbles:!0})),lastClickedElement.dispatchEvent(new MouseEvent(`mouseleave`,{bubbles:!1})),lastClickedElement.blur(),null)}async function clickElement(e){blurLastClickedElement(),lastClickedElement=e,await scrollIntoViewIfNeeded(e);let t=e.ownerDocument.defaultView?.frameElement;t&&await scrollIntoViewIfNeeded(t);let n=e.getBoundingClientRect(),r=n.left+n.width/2,i=n.top+n.height/2;await movePointerToElement(e,r,i),await clickPointer(),await waitFor(.1);let a=e.ownerDocument;await enablePassThrough();let o=a.elementFromPoint(r,i);await disablePassThrough();let s=o instanceof HTMLElement&&e.contains(o)?o:e,c={bubbles:!0,cancelable:!0,clientX:r,clientY:i,pointerType:`mouse`},l={bubbles:!0,cancelable:!0,clientX:r,clientY:i,button:0};s.dispatchEvent(new PointerEvent(`pointerover`,c)),s.dispatchEvent(new PointerEvent(`pointerenter`,{...c,bubbles:!1})),s.dispatchEvent(new MouseEvent(`mouseover`,l)),s.dispatchEvent(new MouseEvent(`mouseenter`,{...l,bubbles:!1})),s.dispatchEvent(new PointerEvent(`pointerdown`,c)),s.dispatchEvent(new MouseEvent(`mousedown`,l)),e.focus({preventScroll:!0}),s.dispatchEvent(new PointerEvent(`pointerup`,c)),s.dispatchEvent(new MouseEvent(`mouseup`,l)),s.click(),await waitFor(.2)}async function inputTextElement(e,t){let n=e.isContentEditable;if(!isInputElement(e)&&!isTextAreaElement(e)&&!n)throw Error(`Element is not an input, textarea, or contenteditable`);if(await clickElement(e),n){if(e.dispatchEvent(new InputEvent(`beforeinput`,{bubbles:!0,cancelable:!0,inputType:`deleteContent`}))&&(e.innerText=``,e.dispatchEvent(new InputEvent(`input`,{bubbles:!0,inputType:`deleteContent`}))),e.dispatchEvent(new InputEvent(`beforeinput`,{bubbles:!0,cancelable:!0,inputType:`insertText`,data:t}))&&(e.innerText=t,e.dispatchEvent(new InputEvent(`input`,{bubbles:!0,inputType:`insertText`,data:t}))),e.innerText.trim()!==t.trim()){e.focus();let n=e.ownerDocument,r=(n.defaultView||window).getSelection(),i=n.createRange();i.selectNodeContents(e),r?.removeAllRanges(),r?.addRange(i),n.execCommand(`delete`,!1),n.execCommand(`insertText`,!1,t)}e.dispatchEvent(new Event(`change`,{bubbles:!0})),e.blur()}else getNativeValueSetter(e).call(e,t);n||e.dispatchEvent(new Event(`input`,{bubbles:!0})),await waitFor(.1)}async function selectOptionElement(e,t){if(!isSelectElement(e))throw Error(`Element is not a select element`);let n=Array.from(e.options).find(e=>e.textContent?.trim()===t.trim());if(!n)throw Error(`Option with text "${t}" not found in select element`);e.value=n.value,e.dispatchEvent(new Event(`change`,{bubbles:!0})),await waitFor(.1)}async function scrollIntoViewIfNeeded(e){let t=e;typeof t.scrollIntoViewIfNeeded==`function`?t.scrollIntoViewIfNeeded():e.scrollIntoView({behavior:`auto`,block:`center`,inline:`nearest`})}async function scrollVertically(e,t){if(t){let n=t,r=n,i=!1,a=null,o=0,s=0,c=e;for(;r&&s<10;){let e=window.getComputedStyle(r),t=/(auto|scroll|overlay)/.test(e.overflowY)||e.scrollbarWidth&&e.scrollbarWidth!==`auto`||e.scrollbarGutter&&e.scrollbarGutter!==`auto`,n=r.scrollHeight>r.clientHeight;if(t&&n){let e=r.scrollTop,t=r.scrollHeight-r.clientHeight,n=c/3;n=n>0?Math.min(n,t-e):Math.max(n,-e),r.scrollTop=e+n;let s=r.scrollTop-e;if(Math.abs(s)>.5){i=!0,a=r,o=s;break}}if(r===document.body||r===document.documentElement)break;r=r.parentElement,s++}return i?`Scrolled container (${a?.tagName}) by ${o}px`:`No scrollable container found for element (${n.tagName})`}let n=e,r=e=>e.clientHeight>=window.innerHeight*.5,i=e=>!!(e&&/(auto|scroll|overlay)/.test(getComputedStyle(e).overflowY)&&e.scrollHeight>e.clientHeight&&r(e)),a=document.activeElement;for(;a&&!i(a)&&a!==document.body;)a=a.parentElement;if(a=i(a)?a:Array.from(document.querySelectorAll(`*`)).find(i)||document.scrollingElement||document.documentElement,a===document.scrollingElement||a===document.documentElement||a===document.body){let e=window.scrollY,t=document.documentElement.scrollHeight-window.innerHeight;window.scrollBy(0,n);let r=window.scrollY,i=r-e;return Math.abs(i)<1?n>0?`⚠️ Already at the bottom of the page, cannot scroll down further.`:`⚠️ Already at the top of the page, cannot scroll up further.`:n>0&&r>=t-1?`✅ Scrolled page by ${i}px. Reached the bottom of the page.`:n<0&&r<=1?`✅ Scrolled page by ${i}px. Reached the top of the page.`:`✅ Scrolled page by ${i}px.`}{let e=`The document is not scrollable. Falling back to container scroll.`;console.log(`[PageController] ${e}`);let t=a.scrollTop,r=a.scrollHeight-a.clientHeight;a.scrollBy({top:n,behavior:`smooth`}),await waitFor(.1);let i=a.scrollTop,o=i-t;return Math.abs(o)<1?n>0?`⚠️ ${e} Already at the bottom of container (${a.tagName}), cannot scroll down further.`:`⚠️ ${e} Already at the top of container (${a.tagName}), cannot scroll up further.`:n>0&&i>=r-1?`✅ ${e} Scrolled container (${a.tagName}) by ${o}px. Reached the bottom.`:n<0&&i<=1?`✅ ${e} Scrolled container (${a.tagName}) by ${o}px. Reached the top.`:`✅ ${e} Scrolled container (${a.tagName}) by ${o}px.`}}async function scrollHorizontally(e,t){if(t){let n=t,r=n,i=!1,a=null,o=0,s=0,c=e;for(;r&&s<10;){let e=window.getComputedStyle(r),t=/(auto|scroll|overlay)/.test(e.overflowX)||e.scrollbarWidth&&e.scrollbarWidth!==`auto`||e.scrollbarGutter&&e.scrollbarGutter!==`auto`,n=r.scrollWidth>r.clientWidth;if(t&&n){let e=r.scrollLeft,t=r.scrollWidth-r.clientWidth,n=c/3;n=n>0?Math.min(n,t-e):Math.max(n,-e),r.scrollLeft=e+n;let s=r.scrollLeft-e;if(Math.abs(s)>.5){i=!0,a=r,o=s;break}}if(r===document.body||r===document.documentElement)break;r=r.parentElement,s++}return i?`Scrolled container (${a?.tagName}) horizontally by ${o}px`:`No horizontally scrollable container found for element (${n.tagName})`}let n=e,r=e=>e.clientWidth>=window.innerWidth*.5,i=e=>!!(e&&/(auto|scroll|overlay)/.test(getComputedStyle(e).overflowX)&&e.scrollWidth>e.clientWidth&&r(e)),a=document.activeElement;for(;a&&!i(a)&&a!==document.body;)a=a.parentElement;if(a=i(a)?a:Array.from(document.querySelectorAll(`*`)).find(i)||document.scrollingElement||document.documentElement,a===document.scrollingElement||a===document.documentElement||a===document.body){let e=window.scrollX,t=document.documentElement.scrollWidth-window.innerWidth;window.scrollBy(n,0);let r=window.scrollX,i=r-e;return Math.abs(i)<1?n>0?`⚠️ Already at the right edge of the page, cannot scroll right further.`:`⚠️ Already at the left edge of the page, cannot scroll left further.`:n>0&&r>=t-1?`✅ Scrolled page by ${i}px. Reached the right edge of the page.`:n<0&&r<=1?`✅ Scrolled page by ${i}px. Reached the left edge of the page.`:`✅ Scrolled page horizontally by ${i}px.`}{let e=`The document is not scrollable. Falling back to container scroll.`;console.log(`[PageController] ${e}`);let t=a.scrollLeft,r=a.scrollWidth-a.clientWidth;a.scrollBy({left:n,behavior:`smooth`}),await waitFor(.1);let i=a.scrollLeft,o=i-t;return Math.abs(o)<1?n>0?`⚠️ ${e} Already at the right edge of container (${a.tagName}), cannot scroll right further.`:`⚠️ ${e} Already at the left edge of container (${a.tagName}), cannot scroll left further.`:n>0&&i>=r-1?`✅ ${e} Scrolled container (${a.tagName}) by ${o}px. Reached the right edge.`:n<0&&i<=1?`✅ ${e} Scrolled container (${a.tagName}) by ${o}px. Reached the left edge.`:`✅ ${e} Scrolled container (${a.tagName}) horizontally by ${o}px.`}}function resolveViewportExpansion(e){return e??DEFAULT_VIEWPORT_EXPANSION}function getFlatTree(e){let t=resolveViewportExpansion(e.viewportExpansion),n=[];for(let t of e.interactiveBlacklist||[])typeof t==`function`?n.push(t()):n.push(t);let r=[];for(let t of e.interactiveWhitelist||[])typeof t==`function`?r.push(t()):r.push(t);let i=dom_tree_default({doHighlightElements:!0,debugMode:!0,focusHighlightIndex:-1,viewportExpansion:t,interactiveBlacklist:n,interactiveWhitelist:r,highlightOpacity:e.highlightOpacity??0,highlightLabelOpacity:e.highlightLabelOpacity??.1}),a=window.location.href;for(let e in i.map){let t=i.map[e];if(t.isInteractive&&t.ref){let e=t.ref;newElementsCache.has(e)||(newElementsCache.set(e,a),t.isNew=!0)}}return i}function globToRegex(e){let t=globRegexCache.get(e);if(!t){let n=e.replace(/[.+^${}()|[\]\\]/g,`\\$&`);t=RegExp(`^${n.replace(/\*/g,`.*`)}$`),globRegexCache.set(e,t)}return t}function matchAttributes(e,t){let n={};for(let r of t)if(r.includes(`*`)){let t=globToRegex(r);for(let r of Object.keys(e))t.test(r)&&e[r].trim()&&(n[r]=e[r].trim())}else{let t=e[r];t&&t.trim()&&(n[r]=t.trim())}return n}function flatTreeToString(e,t=[],n=!1){let r=[`title`,`type`,`checked`,`name`,`role`,`value`,`placeholder`,`data-date-format`,`alt`,`aria-label`,`aria-expanded`,`data-state`,`aria-checked`,`id`,`for`,`target`,`aria-haspopup`,`aria-controls`,`aria-owns`,`contenteditable`],i=[...t,...r],a=(e,t)=>e.length>t?e.substring(0,t)+`...`:e,o=t=>{let n=e.map[t];if(!n)return null;if(n.type===`TEXT_NODE`){let e=n;return{type:`text`,text:e.text,isVisible:e.isVisible,parent:null,children:[]}}{let e=n,t=[];if(e.children)for(let n of e.children){let e=o(n);e&&(e.parent=null,t.push(e))}return{type:`element`,tagName:e.tagName,attributes:e.attributes??{},isVisible:e.isVisible??!1,isInteractive:e.isInteractive??!1,isTopElement:e.isTopElement??!1,isNew:e.isNew??!1,highlightIndex:e.highlightIndex,parent:null,children:t,extra:e.extra??{}}}},s=(e,t=null)=>{e.parent=t;for(let t of e.children)s(t,e)},c=o(e.rootId);if(!c)return``;s(c);let l=e=>{let t=e.parent;for(;t;){if(t.type===`element`&&t.highlightIndex!==void 0)return!0;t=t.parent}return!1},u=(e,t,r)=>{let o=t,s=`	`.repeat(t);if(e.type===`element`){let t=n&&e.tagName&&SEMANTIC_TAGS.has(e.tagName);if(e.highlightIndex!==void 0){o+=1;let t=getAllTextTillNextClickableElement(e),n=``;if(i.length>0&&e.attributes){let r=matchAttributes(e.attributes,i),o=Object.keys(r);if(o.length>1){let e=new Set,t={};for(let n of o){let i=r[n];i.length>5&&(i in t?e.add(n):t[i]=n)}for(let t of e)delete r[t]}r.role===e.tagName&&delete r.role;for(let e of[`aria-label`,`placeholder`,`title`])r[e]&&r[e].toLowerCase().trim()===t.toLowerCase().trim()&&delete r[e];Object.keys(r).length>0&&(n=Object.entries(r).map(([e,t])=>`${e}=${a(t,20)}`).join(` `))}let c=`${s}${e.isNew?`*[${e.highlightIndex}]`:`[${e.highlightIndex}]`}<${e.tagName??``}`;if(n&&(c+=` ${n}`),e.extra&&e.extra.scrollable){let t=``;e.extra.scrollData?.left&&(t+=`left=${e.extra.scrollData.left}, `),e.extra.scrollData?.top&&(t+=`top=${e.extra.scrollData.top}, `),e.extra.scrollData?.right&&(t+=`right=${e.extra.scrollData.right}, `),e.extra.scrollData?.bottom&&(t+=`bottom=${e.extra.scrollData.bottom}`),c+=` data-scrollable="${t}"`}if(t){let e=t.trim();n||(c+=` `),c+=`>${e}`}else n||(c+=` `);c+=` />`,r.push(c)}let c=t&&e.highlightIndex===void 0,l=c?r.length:-1;c&&(r.push(`${s}<${e.tagName}>`),o+=1);for(let t of e.children)u(t,o,r);c&&(r.length===l+1?r.pop():r.push(`${s}</${e.tagName}>`))}else if(e.type===`text`){if(l(e))return;e.parent&&e.parent.type===`element`&&e.parent.isVisible&&e.parent.isTopElement&&r.push(`${s}${e.text??``}`)}},d=[];return u(c,0,d),d.join(`
`)}function getSelectorMap(e){let t=new Map,n=Object.keys(e.map);for(let r of n){let n=e.map[r];n.isInteractive&&typeof n.highlightIndex==`number`&&t.set(n.highlightIndex,n)}return t}function getElementTextMap(e){let t=e.split(`
`).map(e=>e.trim()).filter(e=>e.length>0),n=new Map;for(let e of t){let t=/^\[(\d+)\]<[^>]+>([^<]*)/.exec(e);if(t){let r=parseInt(t[1],10);n.set(r,e)}}return n}function cleanUpHighlights(){let e=window._highlightCleanupFunctions||[];for(let t of e)typeof t==`function`&&t();window._highlightCleanupFunctions=[]}function getPageInfo(){let e=window.innerWidth,t=window.innerHeight,n=Math.max(document.documentElement.scrollWidth,document.body.scrollWidth||0),r=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight||0),i=window.scrollX||window.pageXOffset||document.documentElement.scrollLeft||0,a=window.scrollY||window.pageYOffset||document.documentElement.scrollTop||0,o=Math.max(0,r-(window.innerHeight+a)),s=Math.max(0,n-(window.innerWidth+i));return{viewport_width:e,viewport_height:t,page_width:n,page_height:r,scroll_x:i,scroll_y:a,pixels_above:a,pixels_below:o,pages_above:t>0?a/t:0,pages_below:t>0?o/t:0,total_pages:t>0?r/t:0,current_page_position:a/Math.max(1,r-t),pixels_left:i,pixels_right:s}}function patchReact(e){let t=document.querySelectorAll(`[data-reactroot], [data-reactid], [data-react-checksum], #root, #app, [id^="root-"], [id^="app-"], #adex-wrapper, #adex-root`);for(let e of t)e.setAttribute(`data-page-agent-not-interactive`,`true`)}var __defProp,__exportAll,lastClickedElement,dom_tree_default,dom_exports,DEFAULT_VIEWPORT_EXPANSION,SEMANTIC_TAGS,newElementsCache,globRegexCache,getAllTextTillNextClickableElement,navigation,PageController,init_page_controller=__esmMin((()=>{if(init_preload_helper(),__defProp=Object.defineProperty,__exportAll=(e,t)=>{let n={};for(var r in e)__defProp(n,r,{get:e[r],enumerable:!0});return t||__defProp(n,Symbol.toStringTag,{value:`Module`}),n},lastClickedElement=null,dom_tree_default=(e={doHighlightElements:!0,focusHighlightIndex:-1,viewportExpansion:0,debugMode:!1,interactiveBlacklist:[],interactiveWhitelist:[],highlightOpacity:.1,highlightLabelOpacity:.5})=>{let{interactiveBlacklist:t,interactiveWhitelist:n,highlightOpacity:r,highlightLabelOpacity:i}=e,{doHighlightElements:a,focusHighlightIndex:o,viewportExpansion:s,debugMode:c}=e,l=0,u=new WeakMap;function d(e,t){e&&e.nodeType===Node.ELEMENT_NODE&&u.set(e,{...u.get(e),...t})}let f={boundingRects:new WeakMap,clientRects:new WeakMap,computedStyles:new WeakMap,clearCache:()=>{f.boundingRects=new WeakMap,f.clientRects=new WeakMap,f.computedStyles=new WeakMap}};function p(e){if(!e)return null;if(f.boundingRects.has(e))return f.boundingRects.get(e);let t=e.getBoundingClientRect();return t&&f.boundingRects.set(e,t),t}function m(e){if(!e)return null;if(f.computedStyles.has(e))return f.computedStyles.get(e);let t=window.getComputedStyle(e);return t&&f.computedStyles.set(e,t),t}function h(e){if(!e)return null;if(f.clientRects.has(e))return f.clientRects.get(e);let t=e.getClientRects();return t&&f.clientRects.set(e,t),t}let g={},_={current:0},v=`playwright-highlight-container`;function y(e,t,n=null){if(!e)return t;let a=[],o=null,s=20,c=16,l=null;try{let u=document.getElementById(v);u||(u=document.createElement(`div`),u.id=v,u.style.position=`fixed`,u.style.pointerEvents=`none`,u.style.top=`0`,u.style.left=`0`,u.style.width=`100%`,u.style.height=`100%`,u.style.zIndex=`2147483640`,u.style.backgroundColor=`transparent`,document.body.appendChild(u));let d=e.getClientRects();if(!d||d.length===0)return t;let f=[`#FF0000`,`#00FF00`,`#0000FF`,`#FFA500`,`#800080`,`#008080`,`#FF69B4`,`#4B0082`,`#FF4500`,`#2E8B57`,`#DC143C`,`#4682B4`],p=f[t%f.length],m=p+Math.floor(r*255).toString(16).padStart(2,`0`);p+=Math.floor(i*255).toString(16).padStart(2,`0`);let h={x:0,y:0};if(n){let e=n.getBoundingClientRect();h.x=e.left,h.y=e.top}let g=document.createDocumentFragment();for(let e of d){if(e.width===0||e.height===0)continue;let t=document.createElement(`div`);t.style.position=`fixed`,t.style.border=`2px solid ${p}`,t.style.backgroundColor=m,t.style.pointerEvents=`none`,t.style.boxSizing=`border-box`;let n=e.top+h.y,r=e.left+h.x;t.style.top=`${n}px`,t.style.left=`${r}px`,t.style.width=`${e.width}px`,t.style.height=`${e.height}px`,g.appendChild(t),a.push({element:t,initialRect:e})}let _=d[0];o=document.createElement(`div`),o.className=`playwright-highlight-label`,o.style.position=`fixed`,o.style.background=p,o.style.color=`white`,o.style.padding=`1px 4px`,o.style.borderRadius=`4px`,o.style.fontSize=`${Math.min(12,Math.max(8,_.height/2))}px`,o.textContent=t.toString(),s=o.offsetWidth>0?o.offsetWidth:s,c=o.offsetHeight>0?o.offsetHeight:c;let y=_.top+h.y,b=_.left+h.x,x=y+2,S=b+_.width-s-2;(_.width<s+4||_.height<c+4)&&(x=y-c-2,S=b+_.width-s,S<h.x&&(S=b)),x=Math.max(0,Math.min(x,window.innerHeight-c)),S=Math.max(0,Math.min(S,window.innerWidth-s)),o.style.top=`${x}px`,o.style.left=`${S}px`,g.appendChild(o);let C=((e,t)=>{let n=0;return(...r)=>{let i=performance.now();if(!(i-n<t))return n=i,e(...r)}})(()=>{let t=e.getClientRects(),r={x:0,y:0};if(n){let e=n.getBoundingClientRect();r.x=e.left,r.y=e.top}if(a.forEach((e,n)=>{if(n<t.length){let i=t[n],a=i.top+r.y,o=i.left+r.x;e.element.style.top=`${a}px`,e.element.style.left=`${o}px`,e.element.style.width=`${i.width}px`,e.element.style.height=`${i.height}px`,e.element.style.display=i.width===0||i.height===0?`none`:`block`}else e.element.style.display=`none`}),t.length<a.length)for(let e=t.length;e<a.length;e++)a[e].element.style.display=`none`;if(o&&t.length>0){let e=t[0],n=e.top+r.y,i=e.left+r.x,a=n+2,l=i+e.width-s-2;(e.width<s+4||e.height<c+4)&&(a=n-c-2,l=i+e.width-s,l<r.x&&(l=i)),a=Math.max(0,Math.min(a,window.innerHeight-c)),l=Math.max(0,Math.min(l,window.innerWidth-s)),o.style.top=`${a}px`,o.style.left=`${l}px`,o.style.display=`block`}else o&&(o.style.display=`none`)},16);return window.addEventListener(`scroll`,C,!0),window.addEventListener(`resize`,C),l=()=>{window.removeEventListener(`scroll`,C,!0),window.removeEventListener(`resize`,C),a.forEach(e=>e.element.remove()),o&&o.remove()},u.appendChild(g),t+1}finally{l&&(window._highlightCleanupFunctions=window._highlightCleanupFunctions||[]).push(l)}}function b(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return null;let t=m(e);if(!t)return null;let n=t.display;if(n===`inline`||n===`inline-block`)return null;let r=t.overflowX,i=t.overflowY,a=t.scrollbarWidth&&t.scrollbarWidth!==`auto`||t.scrollbarGutter&&t.scrollbarGutter!==`auto`,o=r===`auto`||r===`scroll`,s=i===`auto`||i===`scroll`;if(!o&&!s&&!a)return null;let c=e.scrollWidth-e.clientWidth,l=e.scrollHeight-e.clientHeight,u=4;if(c<4&&l<4||!s&&!a&&c<4||!o&&!a&&l<4)return null;let f=e.scrollTop,p=e.scrollLeft,h={top:f,right:e.scrollWidth-e.clientWidth-e.scrollLeft,bottom:e.scrollHeight-e.clientHeight-e.scrollTop,left:p};return d(e,{scrollable:!0,scrollData:h}),h}function x(e){try{if(s===-1){let t=e.parentElement;if(!t)return!1;try{return t.checkVisibility({checkOpacity:!0,checkVisibilityCSS:!0})}catch{let e=window.getComputedStyle(t);return e.display!==`none`&&e.visibility!==`hidden`&&e.opacity!==`0`}}let t=document.createRange();t.selectNodeContents(e);let n=t.getClientRects();if(!n||n.length===0)return!1;let r=!1,i=!1;for(let e of n)if(e.width>0&&e.height>0&&(r=!0,!(e.bottom<-s||e.top>window.innerHeight+s||e.right<-s||e.left>window.innerWidth+s))){i=!0;break}if(!r||!i)return!1;let a=e.parentElement;if(!a)return!1;try{return a.checkVisibility({checkOpacity:!0,checkVisibilityCSS:!0})}catch{let e=window.getComputedStyle(a);return e.display!==`none`&&e.visibility!==`hidden`&&e.opacity!==`0`}}catch(e){return console.warn(`Error checking text node visibility:`,e),!1}}function S(e){if(!e||!e.tagName)return!1;let t=new Set([`body`,`div`,`main`,`article`,`section`,`nav`,`header`,`footer`]),n=e.tagName.toLowerCase();return t.has(n)?!0:!new Set([`svg`,`script`,`style`,`link`,`meta`,`noscript`,`template`]).has(n)}function C(e){let t=m(e);return e.offsetWidth>0&&e.offsetHeight>0&&t?.visibility!==`hidden`&&t?.display!==`none`}function w(e){if(!e||e.nodeType!==Node.ELEMENT_NODE||t.includes(e))return!1;if(n.includes(e))return!0;let r=e.tagName.toLowerCase(),i=m(e),a=new Set(`pointer.move.text.grab.grabbing.cell.copy.alias.all-scroll.col-resize.context-menu.crosshair.e-resize.ew-resize.help.n-resize.ne-resize.nesw-resize.ns-resize.nw-resize.nwse-resize.row-resize.s-resize.se-resize.sw-resize.vertical-text.w-resize.zoom-in.zoom-out`.split(`.`)),o=new Set([`not-allowed`,`no-drop`,`wait`,`progress`,`initial`,`inherit`]);function s(e){return e.tagName.toLowerCase()!==`html`&&!!(i?.cursor&&a.has(i.cursor))}if(s(e))return!0;let c=new Set([`a`,`button`,`input`,`select`,`textarea`,`details`,`summary`,`label`,`option`,`optgroup`,`fieldset`,`legend`]),l=new Set([`disabled`,`readonly`]);if(c.has(r)){if(i?.cursor&&o.has(i.cursor))return!1;for(let t of l)if(e.hasAttribute(t)||e.getAttribute(t)===`true`||e.getAttribute(t)===``)return!1;return!(e.disabled||e.readOnly||e.inert)}let u=e.getAttribute(`role`),d=e.getAttribute(`aria-role`);if(e.getAttribute(`contenteditable`)===`true`||e.isContentEditable||e.classList&&(e.classList.contains(`button`)||e.classList.contains(`dropdown-toggle`)||e.getAttribute(`data-index`)||e.getAttribute(`data-toggle`)===`dropdown`||e.getAttribute(`aria-haspopup`)===`true`))return!0;let f=new Set([`button`,`menu`,`menubar`,`menuitem`,`menuitemradio`,`menuitemcheckbox`,`radio`,`checkbox`,`tab`,`switch`,`slider`,`spinbutton`,`combobox`,`searchbox`,`textbox`,`listbox`,`option`,`scrollbar`]);if(c.has(r)||u&&f.has(u)||d&&f.has(d))return!0;try{if(typeof getEventListeners==`function`){let t=getEventListeners(e);for(let e of[`click`,`mousedown`,`mouseup`,`dblclick`])if(t[e]&&t[e].length>0)return!0}let t=e?.ownerDocument?.defaultView?.getEventListenersForNode||window.getEventListenersForNode;if(typeof t==`function`){let n=t(e);for(let e of[`click`,`mousedown`,`mouseup`,`keydown`,`keyup`,`submit`,`change`,`input`,`focus`,`blur`])for(let t of n)if(t.type===e)return!0}for(let t of[`onclick`,`onmousedown`,`onmouseup`,`ondblclick`])if(e.hasAttribute(t)||typeof e[t]==`function`)return!0}catch{}return!!b(e)}function T(e){if(s===-1)return!0;let t=h(e);if(!t||t.length===0)return!1;let n=!1;for(let e of t)if(e.width>0&&e.height>0&&!(e.bottom<-s||e.top>window.innerHeight+s||e.right<-s||e.left>window.innerWidth+s)){n=!0;break}if(!n)return!1;if(e.ownerDocument!==window.document)return!0;let r=Array.from(t).find(e=>e.width>0&&e.height>0);if(!r)return!1;let i=e.getRootNode();if(i instanceof ShadowRoot){let t=r.left+r.width/2,n=r.top+r.height/2;try{let r=i.elementFromPoint(t,n);if(!r)return!1;let a=r;for(;a&&a!==i;){if(a===e)return!0;a=a.parentElement}return!1}catch{return!0}}let a=5;return[{x:r.left+r.width/2,y:r.top+r.height/2},{x:r.left+5,y:r.top+5},{x:r.right-5,y:r.bottom-5}].some(({x:t,y:n})=>{try{let r=document.elementFromPoint(t,n);if(!r)return!1;let i=r;for(;i&&i!==document.documentElement;){if(i===e)return!0;i=i.parentElement}return!1}catch{return!0}})}function E(e,t){if(t===-1)return!0;let n=e.getClientRects();if(!n||n.length===0){let n=p(e);return!n||n.width===0||n.height===0?!1:!(n.bottom<-t||n.top>window.innerHeight+t||n.right<-t||n.left>window.innerWidth+t)}for(let e of n)if(e.width!==0&&e.height!==0&&!(e.bottom<-t||e.top>window.innerHeight+t||e.right<-t||e.left>window.innerWidth+t))return!0;return!1}let D=[`aria-expanded`,`aria-checked`,`aria-selected`,`aria-pressed`,`aria-haspopup`,`aria-controls`,`aria-owns`,`aria-activedescendant`,`aria-valuenow`,`aria-valuetext`,`aria-valuemax`,`aria-valuemin`,`aria-autocomplete`];function O(e){for(let t=0;t<D.length;t++)if(e.hasAttribute(D[t]))return!0;return!1}function k(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;let t=e.tagName.toLowerCase();return new Set([`a`,`button`,`input`,`select`,`textarea`,`details`,`summary`,`label`]).has(t)?!0:e.hasAttribute(`onclick`)||e.hasAttribute(`role`)||e.hasAttribute(`tabindex`)||O(e)||e.hasAttribute(`data-action`)||e.getAttribute(`contenteditable`)===`true`}let A=new Set([`a`,`button`,`input`,`select`,`textarea`,`summary`,`details`,`label`,`option`,`li`]),j=new Set([`button`,`link`,`menuitem`,`menuitemradio`,`menuitemcheckbox`,`radio`,`checkbox`,`tab`,`switch`,`slider`,`spinbutton`,`combobox`,`searchbox`,`textbox`,`listbox`,`listitem`,`treeitem`,`row`,`option`,`scrollbar`]);function M(e){if(!e||e.nodeType!==Node.ELEMENT_NODE||!C(e))return!1;let t=e.hasAttribute(`role`)||e.hasAttribute(`tabindex`)||e.hasAttribute(`onclick`)||typeof e.onclick==`function`,n=/\b(btn|clickable|menu|item|entry|link)\b/i.test(e.className||``),r=!!e.closest(`button,a,[role="button"],.menu,.dropdown,.list,.toolbar`),i=[...e.children].some(C),a=e.parentElement&&e.parentElement.isSameNode(document.body);return(w(e)||t||n)&&i&&r&&!a}function N(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;let t=e.tagName.toLowerCase(),n=e.getAttribute(`role`);if(t===`iframe`||A.has(t)||n&&j.has(n)||e.isContentEditable||e.getAttribute(`contenteditable`)===`true`||e.hasAttribute(`data-testid`)||e.hasAttribute(`data-cy`)||e.hasAttribute(`data-test`)||e.hasAttribute(`onclick`)||typeof e.onclick==`function`||O(e))return!0;try{let t=e?.ownerDocument?.defaultView?.getEventListenersForNode||window.getEventListenersForNode;if(typeof t==`function`){let n=t(e);for(let e of[`click`,`mousedown`,`mouseup`,`keydown`,`keyup`,`submit`,`change`,`input`,`focus`,`blur`])for(let t of n)if(t.type===e)return!0}if([`onmousedown`,`onmouseup`,`onkeydown`,`onkeyup`,`onsubmit`,`onchange`,`oninput`,`onfocus`,`onblur`].some(t=>e.hasAttribute(t)))return!0}catch{}return!!(M(e)||u.get(e)?.scrollable)}function P(e,t,n,r){if(!e.isInteractive)return!1;let i=!1;return i=!r||!!N(t),i&&(e.isInViewport=E(t,s),(e.isInViewport||s===-1)&&(e.highlightIndex=l++,a))?(o>=0?o===e.highlightIndex&&y(t,e.highlightIndex,n):y(t,e.highlightIndex,n),!0):!1}function F(e,t=null,n=!1){if(!e||e.id===v||e.nodeType!==Node.ELEMENT_NODE&&e.nodeType!==Node.TEXT_NODE||!e||e.id===v||e.dataset?.browserUseIgnore===`true`||e.dataset?.pageAgentIgnore===`true`||e.getAttribute&&e.getAttribute(`aria-hidden`)===`true`)return null;if(e===document.body){let n={tagName:`body`,attributes:{},xpath:`/body`,children:[]};for(let r of e.childNodes){let e=F(r,t,!1);e&&n.children.push(e)}let r=`${_.current++}`;return g[r]=n,r}if(e.nodeType!==Node.ELEMENT_NODE&&e.nodeType!==Node.TEXT_NODE)return null;if(e.nodeType===Node.TEXT_NODE){let t=e.textContent?.trim();if(!t)return null;let n=e.parentElement;if(!n||n.tagName.toLowerCase()===`script`)return null;let r=`${_.current++}`;return g[r]={type:`TEXT_NODE`,text:t,isVisible:x(e)},r}if(e.nodeType===Node.ELEMENT_NODE&&!S(e))return null;if(s!==-1&&!e.shadowRoot){let t=p(e),n=m(e),r=n&&(n.position===`fixed`||n.position===`sticky`),i=e.offsetWidth>0||e.offsetHeight>0;if(!t||!r&&!i&&(t.bottom<-s||t.top>window.innerHeight+s||t.right<-s||t.left>window.innerWidth+s))return null}let r={tagName:e.tagName.toLowerCase(),attributes:{},children:[]};if(k(e)||e.tagName.toLowerCase()===`iframe`||e.tagName.toLowerCase()===`body`){let t=e.getAttributeNames?.()||[];for(let n of t){let t=e.getAttribute(n);r.attributes[n]=t}e.tagName.toLowerCase()===`input`&&(e.type===`checkbox`||e.type===`radio`)&&(r.attributes.checked=e.checked?`true`:`false`)}let i=!1;if(e.nodeType===Node.ELEMENT_NODE&&(r.isVisible=C(e),r.isVisible)){r.isTopElement=T(e);let a=e.getAttribute(`role`),o=a===`menu`||a===`menubar`||a===`listbox`;if((r.isTopElement||o)&&(r.isInteractive=w(e),i=P(r,e,t,n),r.ref=e,r.isInteractive&&Object.keys(r.attributes).length===0)){let t=e.getAttributeNames?.()||[];for(let n of t){let t=e.getAttribute(n);r.attributes[n]=t}}}if(e.tagName){let a=e.tagName.toLowerCase();if(a===`iframe`)try{let t=e.contentDocument||e.contentWindow?.document;if(t)for(let n of t.childNodes){let t=F(n,e,!1);t&&r.children.push(t)}}catch(e){console.warn(`Unable to access iframe:`,e)}else if(e.isContentEditable||e.getAttribute(`contenteditable`)===`true`||e.id===`tinymce`||e.classList.contains(`mce-content-body`)||a===`body`&&e.getAttribute(`data-id`)?.startsWith(`mce_`))for(let n of e.childNodes){let e=F(n,t,i);e&&r.children.push(e)}else{if(e.shadowRoot){r.shadowRoot=!0;for(let n of e.shadowRoot.childNodes){let e=F(n,t,i);e&&r.children.push(e)}}for(let a of e.childNodes){let e=F(a,t,i||n);e&&r.children.push(e)}}}if(r.tagName===`a`&&r.children.length===0&&!r.attributes.href){let t=p(e);if(!(t&&t.width>0&&t.height>0||e.offsetWidth>0||e.offsetHeight>0))return null}r.extra=u.get(e)||null;let a=`${_.current++}`;return g[a]=r,a}let I=F(document.body);return f.clearCache(),{rootId:I,map:g}},dom_exports=__exportAll({cleanUpHighlights:()=>cleanUpHighlights,flatTreeToString:()=>flatTreeToString,getAllTextTillNextClickableElement:()=>getAllTextTillNextClickableElement,getElementTextMap:()=>getElementTextMap,getFlatTree:()=>getFlatTree,getSelectorMap:()=>getSelectorMap,resolveViewportExpansion:()=>resolveViewportExpansion}),DEFAULT_VIEWPORT_EXPANSION=-1,SEMANTIC_TAGS=new Set([`nav`,`menu`,`header`,`footer`,`aside`,`dialog`]),newElementsCache=new WeakMap,globRegexCache=new Map,getAllTextTillNextClickableElement=(e,t=-1)=>{let n=[],r=(i,a)=>{if(!(t!==-1&&a>t)&&(i.type!==`element`||i===e||i.highlightIndex===void 0)){if(i.type===`text`&&i.text)n.push(i.text);else if(i.type===`element`)for(let e of i.children)r(e,a+1)}};return r(e,0),n.join(`
`).trim()},window.addEventListener(`popstate`,()=>{cleanUpHighlights()}),window.addEventListener(`hashchange`,()=>{cleanUpHighlights()}),window.addEventListener(`beforeunload`,()=>{cleanUpHighlights()}),navigation=window.navigation,navigation&&typeof navigation.addEventListener==`function`)navigation.addEventListener(`navigate`,()=>{cleanUpHighlights()});else{let e=window.location.href;setInterval(()=>{window.location.href!==e&&(e=window.location.href,cleanUpHighlights())},500)}PageController=class extends EventTarget{config;flatTree=null;selectorMap=new Map;elementTextMap=new Map;simplifiedHTML=`<EMPTY>`;lastTimeUpdate=0;isIndexed=!1;mask=null;maskReady=null;constructor(e={}){super(),this.config=e,patchReact(this),e.enableMask&&this.initMask()}initMask(){this.maskReady===null&&(this.maskReady=(async()=>{let{SimulatorMask:e}=await __vitePreload(async()=>{let{SimulatorMask:e}=await import(`./SimulatorMask-Dq2GJqJc-B_GvoJqN.js`);return{SimulatorMask:e}},__vite__mapDeps([0,1]));this.mask=new e})())}async getCurrentUrl(){return window.location.href}async getLastUpdateTime(){return this.lastTimeUpdate}async getBrowserState(){let e=window.location.href,t=document.title,n=getPageInfo(),r=resolveViewportExpansion(this.config.viewportExpansion);await this.updateTree();let i=this.simplifiedHTML;return{url:e,title:t,header:`${`Current Page: [${t}](${e})`}\n${`Page info: ${n.viewport_width}x${n.viewport_height}px viewport, ${n.page_width}x${n.page_height}px total page size, ${n.pages_above.toFixed(1)} pages above, ${n.pages_below.toFixed(1)} pages below, ${n.total_pages.toFixed(1)} total pages, at ${(n.current_page_position*100).toFixed(0)}% of page`}\n\n${r===-1?`Interactive elements from top layer of the current page (full page):`:`Interactive elements from top layer of the current page inside the viewport:`}\n\n${n.pixels_above>4&&r!==-1?`... ${n.pixels_above} pixels above (${n.pages_above.toFixed(1)} pages) - scroll to see more ...`:`[Start of page]`}`,content:i,footer:n.pixels_below>4&&r!==-1?`... ${n.pixels_below} pixels below (${n.pages_below.toFixed(1)} pages) - scroll to see more ...`:`[End of page]`}}async updateTree(){this.dispatchEvent(new Event(`beforeUpdate`)),this.lastTimeUpdate=Date.now(),this.mask&&(this.mask.wrapper.style.pointerEvents=`none`),cleanUpHighlights();let e=[...this.config.interactiveBlacklist||[],...Array.from(document.querySelectorAll(`[data-page-agent-not-interactive]`))];return this.flatTree=getFlatTree({...this.config,interactiveBlacklist:e}),this.simplifiedHTML=flatTreeToString(this.flatTree,this.config.includeAttributes,this.config.keepSemanticTags),this.selectorMap.clear(),this.selectorMap=getSelectorMap(this.flatTree),this.elementTextMap.clear(),this.elementTextMap=getElementTextMap(this.simplifiedHTML),this.isIndexed=!0,this.mask&&(this.mask.wrapper.style.pointerEvents=`auto`),this.dispatchEvent(new Event(`afterUpdate`)),this.simplifiedHTML}async cleanUpHighlights(){console.log(`[PageController] cleanUpHighlights`),cleanUpHighlights()}assertIndexed(){if(!this.isIndexed)throw Error(`DOM tree not indexed yet. Can not perform actions on elements.`)}async clickElement(e){try{this.assertIndexed();let t=getElementByIndex(this.selectorMap,e),n=this.elementTextMap.get(e);return await clickElement(t),isAnchorElement(t)&&t.target===`_blank`?{success:!0,message:`✅ Clicked element (${n??e}). ⚠️ Link opened in a new tab.`}:{success:!0,message:`✅ Clicked element (${n??e}).`}}catch(e){return{success:!1,message:`❌ Failed to click element: ${e}`}}}async inputText(e,t){try{this.assertIndexed();let n=getElementByIndex(this.selectorMap,e),r=this.elementTextMap.get(e);return await inputTextElement(n,t),{success:!0,message:`✅ Input text (${t}) into element (${r??e}).`}}catch(e){return{success:!1,message:`❌ Failed to input text: ${e}`}}}async selectOption(e,t){try{this.assertIndexed();let n=getElementByIndex(this.selectorMap,e),r=this.elementTextMap.get(e);return await selectOptionElement(n,t),{success:!0,message:`✅ Selected option (${t}) in element (${r??e}).`}}catch(e){return{success:!1,message:`❌ Failed to select option: ${e}`}}}async scroll(e){try{let{down:t,numPages:n,pixels:r,index:i}=e;return this.assertIndexed(),{success:!0,message:await scrollVertically((r??n*window.innerHeight)*(t?1:-1),i===void 0?null:getElementByIndex(this.selectorMap,i))}}catch(e){return{success:!1,message:`❌ Failed to scroll: ${e}`}}}async scrollHorizontally(e){try{let{right:t,pixels:n,index:r}=e;return this.assertIndexed(),{success:!0,message:await scrollHorizontally(n*(t?1:-1),r===void 0?null:getElementByIndex(this.selectorMap,r))}}catch(e){return{success:!1,message:`❌ Failed to scroll horizontally: ${e}`}}}async executeJavascript(script,signal){try{const asyncFunction=eval(`(async (signal) => { ${script} })`),result=await asyncFunction(signal);return{success:!0,message:`✅ Executed JavaScript. Result: ${result}`}}catch(e){return{success:!1,message:`❌ Error executing JavaScript: ${e}`}}}async showMask(){await this.maskReady,this.mask?.show()}async hideMask(){await this.maskReady,this.mask?.hide()}dispose(){cleanUpHighlights(),this.flatTree=null,this.selectorMap.clear(),this.elementTextMap.clear(),this.simplifiedHTML=`<EMPTY>`,this.isIndexed=!1,this.mask?.dispose(),this.mask=null}}}));function truncate(e,t){return e.length>t?e.substring(0,t)+`...`:e}function escapeHtml(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#039;`)}function createCard({icon:e,content:t,meta:n,type:r}){let i=r?Panel_module_default[r]:``,a=Array.isArray(t)?`<div class="${Panel_module_default.reflectionLines}">${t.map(e=>`<span>${escapeHtml(e)}</span>`).join(``)}</div>`:`<span>${escapeHtml(t)}</span>`;return`
		<div class="${Panel_module_default.historyItem} ${i}">
			<div class="${Panel_module_default.historyContent}">
				<span class="${Panel_module_default.statusIcon}">${e}</span>
				${a}
			</div>
			${n?`<div class="${Panel_module_default.historyMeta}">${n}</div>`:``}
		</div>
	`}function createReflectionLines(e){let t=[];return e.evaluation_previous_goal&&t.push(`🔍 ${e.evaluation_previous_goal}`),e.memory&&t.push(`💾 ${e.memory}`),e.next_goal&&t.push(`🎯 ${e.next_goal}`),t}var locales,I18n,Panel_module_default,Panel,init_page_agent_ui=__esmMin((()=>{(function(){try{if(typeof document<`u`){var e=document.createElement(`style`);e.appendChild(document.createTextNode(`._wrapper_1tu05_1 {
	position: fixed;
	bottom: 100px;
	left: 50%;
	transform: translateX(-50%) translateY(20px);
	opacity: 0;
	z-index: 2147483642; /* 比 SimulatorMask 高一层 */
	box-sizing: border-box;

	overflow: visible;

	* {
		box-sizing: border-box;
	}

	--width: 360px;
	--height: 40px;
	--border-radius: 12px;

	--side-space: 12px; /* 控制栏两侧的间距 */
	--history-width: calc(var(--width) - var(--side-space) * 2);

	--color-1: rgb(57, 182, 255);
	--color-2: rgb(189, 69, 251);
	--color-3: rgb(255, 87, 51);
	--color-4: rgb(255, 214, 0);

	width: var(--width);
	height: var(--height);

	transition: all 0.3s ease-in-out;

	/* 响应式设计 */
	@media (max-width: 480px) {
		width: calc(100vw - 40px);
		--width: calc(100vw - 40px);
	}

	._background_1tu05_39 {
		position: absolute;
		inset: -2px -8px;
		border-radius: calc(var(--border-radius) + 4px);
		filter: blur(16px);
		overflow: hidden;
		/* mix-blend-mode: lighten; */
		/* display: none; */

		&::before {
			content: '';
			z-index: -1;
			pointer-events: none;
			position: absolute;
			width: 100%;
			height: 100%;
			/* left: -100%; */
			left: 0;
			top: 0;

			background-image: linear-gradient(
				to bottom left,
				var(--color-1),
				var(--color-2),
				var(--color-1)
			);
			animation: _mask-running_1tu05_1 2s linear infinite;
		}
		&::after {
			content: '';
			z-index: -1;
			pointer-events: none;
			position: absolute;
			width: 100%;
			height: 100%;
			left: 0;
			top: 0;

			background-image: linear-gradient(
				to bottom left,
				var(--color-2),
				var(--color-1),
				var(--color-2)
			);
			animation: _mask-running_1tu05_1 2s linear infinite;
			animation-delay: 1s;
		}
	}
}

@keyframes _mask-running_1tu05_1 {
	from {
		transform: translateX(-100%);
	}
	to {
		transform: translateX(100%);
	}
}

/* 控制栏 */
._header_1tu05_99 {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 8px 12px;
	user-select: none;

	position: absolute;
	inset: 0;

	cursor: pointer;
	flex-shrink: 0; /* 防止 header 被压缩 */

	background: rgba(0, 0, 0, 0.5);
	backdrop-filter: blur(10px);
	border-radius: var(--border-radius);
	background-clip: padding-box;

	box-shadow:
		0 0 0px 2px rgba(255, 255, 255, 0.4),
		0 0 5px 1px rgba(255, 255, 255, 0.3);

	._statusSection_1tu05_121 {
		display: flex;
		align-items: center;
		gap: 8px;
		flex: 1;
		min-height: 24px; /* 确保垂直居中 */

		._indicator_1tu05_128 {
			width: 6px;
			height: 6px;
			border-radius: 50%;
			background: rgba(255, 255, 255, 0.5);
			flex-shrink: 0;
			animation: none; /* 默认无动画 */

			/* 运行状态 - 有动画 */
			&._thinking_1tu05_137 {
				background: rgb(57, 182, 255);
				animation: _pulse_1tu05_1 0.8s ease-in-out infinite;
			}

			&._tool_executing_1tu05_142 {
				background: rgb(189, 69, 251);
				animation: _pulse_1tu05_1 0.6s ease-in-out infinite;
			}

			&._retry_1tu05_147 {
				background: rgb(255, 214, 0);
				animation: _retryPulse_1tu05_1 1s ease-in-out infinite;
			}

			/* 静止状态 - 无动画 */
			&._completed_1tu05_153,
			&._input_1tu05_154,
			&._output_1tu05_155 {
				background: rgb(34, 197, 94);
				animation: none;
			}

			&._error_1tu05_160 {
				background: rgb(239, 68, 68);
				animation: none;
			}
		}

		._statusText_1tu05_166 {
			color: white;
			font-size: 12px;
			line-height: 1;
			font-weight: 500;
			transition: all 0.3s ease-in-out;
			position: relative;
			overflow: hidden;
			display: flex;
			align-items: center;
			min-height: 24px; /* 确保垂直居中 */

			&._fadeOut_1tu05_178 {
				animation: _statusTextFadeOut_1tu05_1 0.3s ease forwards;
			}

			&._fadeIn_1tu05_182 {
				animation: _statusTextFadeIn_1tu05_1 0.3s ease forwards;
			}
		}
	}

	._controls_1tu05_188 {
		display: flex;
		align-items: center;
		gap: 4px;

		._controlButton_1tu05_193 {
			width: 24px;
			height: 24px;
			border: none;
			border-radius: 4px;
			background: rgba(255, 255, 255, 0.1);
			color: white;
			cursor: pointer;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 12px;
			line-height: 1;

			&:hover {
				background: rgba(255, 255, 255, 0.2);
			}
		}

		._stopButton_1tu05_212 {
			background: rgba(239, 68, 68, 0.2);
			color: rgb(255, 41, 41);
			font-weight: 600;

			&:hover {
				background: rgba(239, 68, 68, 0.3);
			}
		}
	}
}

@keyframes _statusTextFadeIn_1tu05_1 {
	0% {
		opacity: 0;
		transform: translateY(5px);
	}
	100% {
		opacity: 1;
		transform: translateY(0);
	}
}

@keyframes _statusTextFadeOut_1tu05_1 {
	0% {
		opacity: 1;
		transform: translateY(0);
	}
	100% {
		opacity: 0;
		transform: translateY(-5px);
	}
}

._historySectionWrapper_1tu05_246 {
	position: absolute;
	width: var(--history-width);
	bottom: var(--height);
	left: var(--side-space);
	z-index: -2;

	padding-top: 0px;
	visibility: collapse;
	overflow: hidden;

	transition: all 0.2s;

	background: rgba(2, 0, 20, 0.5);
	/* background: rgba(186, 186, 186, 0.2); */
	backdrop-filter: blur(10px);

	text-shadow: 0 0 1px rgba(0, 0, 0, 0.2);

	border-top-left-radius: calc(var(--border-radius) + 4px);
	border-top-right-radius: calc(var(--border-radius) + 4px);

	/* border: 2px solid rgba(255, 255, 255, 0.8); */
	border: 2px solid rgba(255, 255, 255, 0.4);
	box-shadow: 0 4px 16px rgba(0, 0, 0, 0.6);

	/* @media (prefers-color-scheme: dark) {
		box-shadow:
			0 8px 32px 0 rgba(0, 0, 0, 0.85),
			0 2px 12px 0 rgba(57, 182, 255, 0.1);
	} */

	._expanded_1tu05_278 & {
		padding-top: 8px;
		visibility: visible;
	}

	._historySection_1tu05_246 {
		position: relative;
		overflow-y: auto;
		overscroll-behavior: contain;
		scrollbar-width: none;
		max-height: 0;
		padding-inline: 8px;

		transition: max-height 0.2s;

		._expanded_1tu05_278 & {
			max-height: min(500px, calc(100vh - 200px - var(--height)));
		}

		._historyItem_1tu05_297 {
			/* backdrop-filter: blur(10px); */
			padding: 8px 10px;
			margin-bottom: 6px;
			background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.03));
			border-radius: 8px;
			border-left: 2px solid rgba(57, 182, 255, 0.5);
			font-size: 12px;
			color: white;
			/* color: black; */
			line-height: 1.3;
			position: relative;
			overflow: hidden;

			/* 微妙的内阴影 */
			box-shadow:
				inset 0 1px 0 rgba(255, 255, 255, 0.1),
				0 1px 3px rgba(0, 0, 0, 0.1);

			&::before {
				content: '';
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				height: 1px;
				background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
			}

			&:hover {
				background: linear-gradient(135deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.06));
				/* transform: translateY(-1px); */
				box-shadow:
					inset 0 1px 0 rgba(255, 255, 255, 0.15),
					0 2px 4px rgba(0, 0, 0, 0.15);
			}

			&:last-child {
				margin-bottom: 10px;
			}

			&._completed_1tu05_153,
			&._input_1tu05_154,
			&._output_1tu05_155 {
				border-left-color: rgb(34, 197, 94);
				background: linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(34, 197, 94, 0.05));
			}

			&._error_1tu05_160 {
				border-left-color: rgb(239, 68, 68);
				background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(239, 68, 68, 0.05));
			}

			&._retry_1tu05_147 {
				border-left-color: rgb(255, 214, 0);
				background: linear-gradient(135deg, rgba(255, 214, 0, 0.1), rgba(255, 214, 0, 0.05));
			}

			&._observation_1tu05_355 {
				border-left-color: rgb(147, 51, 234);
				background: linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(147, 51, 234, 0.05));
			}

			&._question_1tu05_360 {
				border-left-color: rgb(255, 159, 67);
				background: linear-gradient(135deg, rgba(255, 159, 67, 0.15), rgba(255, 159, 67, 0.08));
			}

			/* 突出显示 done 成功结果 */
			&._doneSuccess_1tu05_366 {
				background: linear-gradient(
					135deg,
					rgba(34, 197, 94, 0.25),
					rgba(34, 197, 94, 0.15),
					rgba(34, 197, 94, 0.08)
				);
				border: none;
				border-left: 4px solid rgb(34, 197, 94);
				box-shadow:
					0 4px 12px rgba(34, 197, 94, 0.3),
					inset 0 1px 0 rgba(255, 255, 255, 0.2),
					0 0 20px rgba(34, 197, 94, 0.1);
				font-weight: 600;
				color: rgb(220, 252, 231);
				padding: 10px 12px;
				margin-bottom: 8px;
				border-radius: 8px;
				position: relative;
				overflow: hidden;

				&::before {
					background: linear-gradient(90deg, transparent, rgba(34, 197, 94, 0.4), transparent);
				}

				&::after {
					content: '';
					position: absolute;
					top: 0;
					left: -100%;
					width: 100%;
					height: 100%;
					background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
					animation: _shimmer_1tu05_1 2s ease-in-out infinite;
				}

				._historyContent_1tu05_402 {
					._statusIcon_1tu05_403 {
						font-size: 16px;
						animation: _celebrate_1tu05_1 0.8s ease-in-out;
						filter: drop-shadow(0 2px 4px rgba(34, 197, 94, 0.5));
					}
				}
			}

			/* 突出显示 done 失败结果 */
			&._doneError_1tu05_412 {
				background: linear-gradient(
					135deg,
					rgba(239, 68, 68, 0.25),
					rgba(239, 68, 68, 0.15),
					rgba(239, 68, 68, 0.08)
				);
				border: none;
				border-left: 4px solid rgb(239, 68, 68);
				box-shadow:
					0 4px 12px rgba(239, 68, 68, 0.3),
					inset 0 1px 0 rgba(255, 255, 255, 0.2),
					0 0 20px rgba(239, 68, 68, 0.1);
				font-weight: 600;
				color: rgb(254, 226, 226);
				padding: 10px 12px;
				margin-bottom: 8px;
				border-radius: 8px;
				position: relative;
				overflow: hidden;

				&::before {
					background: linear-gradient(90deg, transparent, rgba(239, 68, 68, 0.4), transparent);
				}

				._historyContent_1tu05_402 {
					._statusIcon_1tu05_403 {
						font-size: 16px;
						filter: drop-shadow(0 2px 4px rgba(239, 68, 68, 0.5));
					}
				}
			}

			._historyContent_1tu05_402 {
				display: flex;
				align-items: flex-start;
				gap: 8px;

				word-break: break-all;
				white-space: pre-wrap;

				/* overflow-x: auto; */

				._statusIcon_1tu05_403 {
					font-size: 12px;
					flex-shrink: 0;
					line-height: 1;
					transition: all 0.3s ease;
				}

				._reflectionLines_1tu05_462 {
					display: flex;
					flex-direction: column;
					gap: 4px;
				}
			}

			._historyMeta_1tu05_469 {
				font-size: 10px;
				color: rgba(255, 255, 255, 0.6);
				/* color: rgb(61, 61, 61); */
				margin-top: 8px;
				line-height: 1;
			}
		}
	}
}

/* 动画关键帧 - 更快的闪烁 */
@keyframes _pulse_1tu05_1 {
	0%,
	100% {
		opacity: 1;
		transform: scale(1);
	}
	50% {
		opacity: 0.4;
		transform: scale(1.3);
	}
}

/* 重试动画 - 旋转脉冲 */
@keyframes _retryPulse_1tu05_1 {
	0%,
	100% {
		opacity: 1;
		transform: scale(1) rotate(0deg);
	}
	25% {
		opacity: 0.6;
		transform: scale(1.2) rotate(90deg);
	}
	50% {
		opacity: 0.8;
		transform: scale(1.1) rotate(180deg);
	}
	75% {
		opacity: 0.6;
		transform: scale(1.2) rotate(270deg);
	}
}

/* 庆祝动画 */
@keyframes _celebrate_1tu05_1 {
	0%,
	100% {
		transform: scale(1);
	}
	25% {
		transform: scale(1.2) rotate(-5deg);
	}
	75% {
		transform: scale(1.2) rotate(5deg);
	}
}

/* done 卡片的光泽效果 */
@keyframes _shimmer_1tu05_1 {
	0% {
		left: -100%;
	}
	100% {
		left: 100%;
	}
}

/* 输入区域样式 */
._inputSectionWrapper_1tu05_539 {
	position: absolute;
	width: var(--history-width);
	top: var(--height);
	left: var(--side-space);
	z-index: -1;

	visibility: visible;
	overflow: hidden;

	height: 48px;

	transition: all 0.2s;

	background: rgba(186, 186, 186, 0.2);
	backdrop-filter: blur(10px);

	border-bottom-left-radius: calc(var(--border-radius) + 4px);
	border-bottom-right-radius: calc(var(--border-radius) + 4px);

	border: 2px solid rgba(255, 255, 255, 0.3);
	box-shadow: 0 1px 16px rgba(0, 0, 0, 0.4);

	&._hidden_1tu05_562 {
		visibility: collapse;
		height: 0;
	}

	._inputSection_1tu05_539 {
		display: flex;
		align-items: center;
		gap: 4px;
		padding: 8px 8px;

		._taskInput_1tu05_573 {
			flex: 1;
			background: rgba(255, 255, 255, 0.4);
			border: 1px solid rgba(255, 255, 255, 0.3);
			border-radius: 10px;
			padding-inline: 10px;
			color: rgb(20, 20, 20);
			font-size: 12px;
			height: 28px;
			line-height: 1;
			outline: none;
			transition: all 0.2s ease;

			/* text-shadow: 0 0 2px rgba(255, 255, 255, 0.8); */

			/* border-color: rgba(57, 182, 255, 0.3); */

			&::placeholder {
				color: rgb(53, 53, 53);
			}

			&:focus {
				background: rgba(255, 255, 255, 0.8);
				border-color: rgba(57, 182, 255, 0.6);
				box-shadow: 0 0 0 2px rgba(57, 182, 255, 0.2);
			}
		}
	}
}`)),document.head.appendChild(e)}}catch(e){console.error(`vite-plugin-css-injected-by-js`,e)}})(),locales={"en-US":{ui:{panel:{ready:`Ready`,thinking:`Thinking...`,taskInput:`Enter new task, describe steps in detail, press Enter to submit`,userAnswerPrompt:`Please answer the question above, press Enter to submit`,taskTerminated:`Task terminated`,taskCompleted:`Task completed`,userAnswer:`User answer: {{input}}`,question:`Question: {{question}}`,waitingPlaceholder:`Waiting for task to start...`,stop:`Stop`,close:`Close`,expand:`Expand history`,collapse:`Collapse history`,step:`Step {{number}}`},tools:{clicking:`Clicking element [{{index}}]...`,inputting:`Inputting text to element [{{index}}]...`,selecting:`Selecting option "{{text}}"...`,scrolling:`Scrolling page...`,waiting:`Waiting {{seconds}} seconds...`,askingUser:`Asking user...`,done:`Task done`,clicked:`🖱️ Clicked element [{{index}}]`,inputted:`⌨️ Inputted text "{{text}}"`,selected:`☑️ Selected option "{{text}}"`,scrolled:`🛞 Page scrolled`,waited:`⌛️ Wait completed`,executing:`Executing {{toolName}}...`,resultSuccess:`success`,resultFailure:`failed`,resultError:`error`},errors:{elementNotFound:`No interactive element found at index {{index}}`,taskRequired:`Task description is required`,executionFailed:`Task execution failed`,notInputElement:`Element is not an input or textarea`,notSelectElement:`Element is not a select element`,optionNotFound:`Option "{{text}}" not found`}}},"zh-CN":{ui:{panel:{ready:`准备就绪`,thinking:`正在思考...`,taskInput:`输入新任务，详细描述步骤，回车提交`,userAnswerPrompt:`请回答上面问题，回车提交`,taskTerminated:`任务已终止`,taskCompleted:`任务结束`,userAnswer:`用户回答: {{input}}`,question:`询问: {{question}}`,waitingPlaceholder:`等待任务开始...`,stop:`终止`,close:`关闭`,expand:`展开历史`,collapse:`收起历史`,step:`步骤 {{number}}`},tools:{clicking:`正在点击元素 [{{index}}]...`,inputting:`正在输入文本到元素 [{{index}}]...`,selecting:`正在选择选项 "{{text}}"...`,scrolling:`正在滚动页面...`,waiting:`等待 {{seconds}} 秒...`,askingUser:`正在询问用户...`,done:`结束任务`,clicked:`🖱️ 已点击元素 [{{index}}]`,inputted:`⌨️ 已输入文本 "{{text}}"`,selected:`☑️ 已选择选项 "{{text}}"`,scrolled:`🛞 页面滚动完成`,waited:`⌛️ 等待完成`,executing:`正在执行 {{toolName}}...`,resultSuccess:`成功`,resultFailure:`失败`,resultError:`错误`},errors:{elementNotFound:`未找到索引为 {{index}} 的交互元素`,taskRequired:`任务描述不能为空`,executionFailed:`任务执行失败`,notInputElement:`元素不是输入框或文本域`,notSelectElement:`元素不是选择框`,optionNotFound:`未找到选项 "{{text}}"`}}}},I18n=class{language;translations;constructor(e=`en-US`){this.language=e in locales?e:`en-US`,this.translations=locales[this.language]}t(e,t){let n=this.getNestedValue(this.translations,e);return n?t?this.interpolate(n,t):n:(console.warn(`Translation key "${e}" not found for language "${this.language}"`),e)}getNestedValue(e,t){return t.split(`.`).reduce((e,t)=>e?.[t],e)}interpolate(e,t){return e.replace(/\{\{(\w+)\}\}/g,(e,n)=>t[n]==null?e:t[n].toString())}getLanguage(){return this.language}},Panel_module_default={wrapper:`_wrapper_1tu05_1`,"mask-running":`_mask-running_1tu05_1`,background:`_background_1tu05_39`,header:`_header_1tu05_99`,pulse:`_pulse_1tu05_1`,retryPulse:`_retryPulse_1tu05_1`,statusTextFadeOut:`_statusTextFadeOut_1tu05_1`,statusTextFadeIn:`_statusTextFadeIn_1tu05_1`,statusSection:`_statusSection_1tu05_121`,indicator:`_indicator_1tu05_128`,thinking:`_thinking_1tu05_137`,tool_executing:`_tool_executing_1tu05_142`,retry:`_retry_1tu05_147`,completed:`_completed_1tu05_153`,input:`_input_1tu05_154`,output:`_output_1tu05_155`,error:`_error_1tu05_160`,statusText:`_statusText_1tu05_166`,fadeOut:`_fadeOut_1tu05_178`,fadeIn:`_fadeIn_1tu05_182`,controls:`_controls_1tu05_188`,controlButton:`_controlButton_1tu05_193`,stopButton:`_stopButton_1tu05_212`,historySectionWrapper:`_historySectionWrapper_1tu05_246`,shimmer:`_shimmer_1tu05_1`,celebrate:`_celebrate_1tu05_1`,expanded:`_expanded_1tu05_278`,historySection:`_historySection_1tu05_246`,historyItem:`_historyItem_1tu05_297`,observation:`_observation_1tu05_355`,question:`_question_1tu05_360`,doneSuccess:`_doneSuccess_1tu05_366`,historyContent:`_historyContent_1tu05_402`,statusIcon:`_statusIcon_1tu05_403`,doneError:`_doneError_1tu05_412`,reflectionLines:`_reflectionLines_1tu05_462`,historyMeta:`_historyMeta_1tu05_469`,inputSectionWrapper:`_inputSectionWrapper_1tu05_539`,hidden:`_hidden_1tu05_562`,inputSection:`_inputSection_1tu05_539`,taskInput:`_taskInput_1tu05_573`},Panel=class{#e;#t;#n;#r;#i;#a;#o;#s;#c;#l;#u=!1;#d;#f=null;#p=!1;#m=null;#h=null;#g=!1;#_=()=>this.#x();#v=()=>this.#S();#y=e=>this.#C(e.detail);#b=()=>this.dispose();get wrapper(){return this.#e}constructor(e,t={}){this.#c=e,this.#l=t,this.#d=new I18n(t.language??`en-US`),this.#c.onAskUser=(e,t)=>this.#w(e,t?.signal),this.#e=this.#N(),this.#t=this.#e.querySelector(`.${Panel_module_default.indicator}`),this.#n=this.#e.querySelector(`.${Panel_module_default.statusText}`),this.#r=this.#e.querySelector(`.${Panel_module_default.historySection}`),this.#i=this.#e.querySelector(`.${Panel_module_default.expandButton}`),this.#a=this.#e.querySelector(`.${Panel_module_default.stopButton}`),this.#o=this.#e.querySelector(`.${Panel_module_default.inputSectionWrapper}`),this.#s=this.#e.querySelector(`.${Panel_module_default.taskInput}`),this.#c.addEventListener(`statuschange`,this.#_),this.#c.addEventListener(`historychange`,this.#v),this.#c.addEventListener(`activity`,this.#y),this.#c.addEventListener(`dispose`,this.#b),this.#P(),this.#R(),this.#A(),this.hide()}#x(){let e=this.#c.status,t=e===`completed`&&this.#c.lastResult?.success===!1;this.#H(t?`error`:e),e===`running`?(this.#a.textContent=`■`,this.#a.title=this.#d.t(`ui.panel.stop`)):(this.#a.textContent=`X`,this.#a.title=this.#d.t(`ui.panel.close`)),e===`running`&&(this.show(),this.#j()),(e===`completed`||e===`error`||e===`stopped`)&&(this.#u||this.#I(),this.#M()&&this.#A())}#S(){this.#W()}#C(e){switch(e.type){case`thinking`:this.#h=this.#d.t(`ui.panel.thinking`),this.#H(`thinking`);break;case`executing`:this.#h=this.#E(e.tool,e.input),this.#H(`executing`);break;case`executed`:this.#h=truncate(e.output,50);break;case`retrying`:this.#h=`Retrying (${e.attempt}/${e.maxAttempts})`,this.#H(`retrying`);break;case`error`:this.#h=truncate(e.message,50),this.#H(`error`)}}#w(e,t){return new Promise((n,r)=>{this.#p=!0,this.#f=n,this.#u||this.#I();let i=document.createElement(`div`);i.innerHTML=createCard({icon:`❓`,content:`Question: ${e}`,type:`question`});let a=i.firstElementChild;a.setAttribute(`data-temp-card`,`true`),this.#r.appendChild(a),this.#U(),this.#A(this.#d.t(`ui.panel.userAnswerPrompt`)),t?.addEventListener(`abort`,()=>{this.#T(),this.#p=!1,this.#f=null,r(t.reason)},{once:!0})})}#T(){Array.from(this.#r.children).forEach(e=>{e.getAttribute(`data-temp-card`)===`true`&&e.remove()})}show(){this.wrapper.style.display=`block`,this.wrapper.getBoundingClientRect(),this.wrapper.style.opacity=`1`,this.wrapper.style.transform=`translateX(-50%) translateY(0)`}hide(){this.wrapper.style.opacity=`0`,this.wrapper.style.transform=`translateX(-50%) translateY(20px)`,this.wrapper.style.display=`none`}reset(){this.#n.textContent=this.#d.t(`ui.panel.ready`),this.#H(`thinking`),this.#W(),this.#L(),this.#p=!1,this.#f=null,this.#A()}expand(){this.#I()}collapse(){this.#L()}dispose(){this.#c.removeEventListener(`statuschange`,this.#_),this.#c.removeEventListener(`historychange`,this.#v),this.#c.removeEventListener(`activity`,this.#y),this.#c.removeEventListener(`dispose`,this.#b),this.#p=!1,this.#z(),this.wrapper.remove()}#E(e,t){let n=t;switch(e){case`click_element_by_index`:return this.#d.t(`ui.tools.clicking`,{index:n.index});case`input_text`:return this.#d.t(`ui.tools.inputting`,{index:n.index});case`select_dropdown_option`:return this.#d.t(`ui.tools.selecting`,{text:n.text});case`scroll`:return this.#d.t(`ui.tools.scrolling`);case`wait`:return this.#d.t(`ui.tools.waiting`,{seconds:n.seconds});case`ask_user`:return this.#d.t(`ui.tools.askingUser`);case`done`:return this.#d.t(`ui.tools.done`);default:return this.#d.t(`ui.tools.executing`,{toolName:e})}}#D(){this.#c.status===`running`?this.#c.stop():this.#c.dispose()}#O(){let e=this.#s.value.trim();e&&(this.#j(),this.#p?this.#k(e):this.#c.execute(e))}#k(e){this.#T(),this.#p=!1,this.#f&&=(this.#f(e),null)}#A(e){this.#s.value=``,this.#s.placeholder=e||this.#d.t(`ui.panel.taskInput`),this.#o.classList.remove(Panel_module_default.hidden),setTimeout(()=>{this.#s.focus()},100)}#j(){this.#o.classList.add(Panel_module_default.hidden)}#M(){if(this.#p||this.#c.history.length===0)return!0;let e=this.#c.status;return e===`completed`||e===`error`||e===`stopped`?this.#l.promptForNextTask??!0:!1}#N(){let e=1e3,t=document.createElement(`div`);return t.id=`page-agent-runtime_agent-panel`,t.className=Panel_module_default.wrapper,t.setAttribute(`data-browser-use-ignore`,`true`),t.setAttribute(`data-page-agent-ignore`,`true`),t.innerHTML=`
			<div class="${Panel_module_default.background}"></div>
			<div class="${Panel_module_default.historySectionWrapper}">
				<div class="${Panel_module_default.historySection}">
					<div class="${Panel_module_default.historyItem}">
						<div class="${Panel_module_default.historyContent}">
							<span class="${Panel_module_default.statusIcon}">🧠</span>
							<span>${this.#d.t(`ui.panel.waitingPlaceholder`)}</span>
						</div>
					</div>
				</div>
			</div>
			<div class="${Panel_module_default.header}">
				<div class="${Panel_module_default.statusSection}">
					<div class="${Panel_module_default.indicator} ${Panel_module_default.thinking}"></div>
					<div class="${Panel_module_default.statusText}">${this.#d.t(`ui.panel.ready`)}</div>
				</div>
				<div class="${Panel_module_default.controls}">
					<button class="${Panel_module_default.controlButton} ${Panel_module_default.expandButton}" title="${this.#d.t(`ui.panel.expand`)}">
						▼
					</button>
					<button class="${Panel_module_default.controlButton} ${Panel_module_default.stopButton}" title="${this.#d.t(`ui.panel.close`)}">
						X
					</button>
				</div>
			</div>
			<div class="${Panel_module_default.inputSectionWrapper} ${Panel_module_default.hidden}">
				<div class="${Panel_module_default.inputSection}">
					<input 
						type="text" 
						class="${Panel_module_default.taskInput}" 
						maxlength="1000"
					/>
				</div>
			</div>
		`,document.body.appendChild(t),t}#P(){this.wrapper.querySelector(`.${Panel_module_default.header}`).addEventListener(`click`,e=>{e.target.closest(`.${Panel_module_default.controlButton}`)||this.#F()}),this.#i.addEventListener(`click`,e=>{e.stopPropagation(),this.#F()}),this.#a.addEventListener(`click`,e=>{e.stopPropagation(),this.#D()}),this.#s.addEventListener(`keydown`,e=>{e.isComposing||e.key===`Enter`&&(e.preventDefault(),this.#O())}),this.#o.addEventListener(`click`,e=>{e.stopPropagation()})}#F(){this.#u?this.#L():this.#I()}#I(){this.#u=!0,this.wrapper.classList.add(Panel_module_default.expanded),this.#i.textContent=`▲`}#L(){this.#u=!1,this.wrapper.classList.remove(Panel_module_default.expanded),this.#i.textContent=`▼`}#R(){this.#m=setInterval(()=>{this.#B()},450)}#z(){this.#m&&=(clearInterval(this.#m),null)}#B(){if(!this.#h||this.#g)return;if(this.#n.textContent===this.#h){this.#h=null;return}let e=this.#h;this.#h=null,this.#V(e)}#V(e){this.#g=!0,this.#n.classList.add(Panel_module_default.fadeOut),setTimeout(()=>{this.#n.textContent=e,this.#n.classList.remove(Panel_module_default.fadeOut),this.#n.classList.add(Panel_module_default.fadeIn),setTimeout(()=>{this.#n.classList.remove(Panel_module_default.fadeIn),this.#g=!1},300)},150)}#H(e){let t=e===`running`?`thinking`:e;this.#t.className=Panel_module_default.indicator,t!==`idle`&&t!==`stopped`&&this.#t.classList.add(Panel_module_default[t])}#U(){setTimeout(()=>{this.#r.scrollTop=this.#r.scrollHeight},0)}#W(){let e=[],t=this.#c.task;t&&e.push(this.#G(t));let n=this.#c.history;for(let t of n)e.push(...this.#K(t));this.#r.innerHTML=e.join(``),this.#U()}#G(e){return createCard({icon:`🎯`,content:e,type:`input`})}#K(e){let t=[],n=e.type===`step`&&e.stepIndex!==void 0?this.#d.t(`ui.panel.step`,{number:(e.stepIndex+1).toString()}):void 0;if(e.type===`step`){if(e.reflection){let r=createReflectionLines(e.reflection);r.length>0&&t.push(createCard({icon:`🧠`,content:r,meta:n}))}let r=e.action;r&&t.push(...this.#q(r,n))}else if(e.type===`observation`)t.push(createCard({icon:`👁️`,content:e.content||``,meta:n,type:`observation`}));else if(e.type===`user_takeover`)t.push(createCard({icon:`👤`,content:`User takeover`,meta:n,type:`input`}));else if(e.type===`retry`){let r=`${e.message||`Retrying`} (${e.attempt}/${e.maxAttempts})`;t.push(createCard({icon:`🔄`,content:r,meta:n,type:`observation`}))}else e.type===`error`&&t.push(createCard({icon:`❌`,content:e.message||`Error`,meta:n,type:`observation`}));return t}#q(e,t){let n=[];if(e.name===`done`){let r=e.input.text||e.output||``;r&&n.push(createCard({icon:`🤖`,content:r,meta:t,type:`output`}))}else if(e.name===`ask_user`){let r=e.input,i=e.output.replace(/^User answered:\s*/i,``);n.push(createCard({icon:`❓`,content:`Question: ${r.question||``}`,meta:t,type:`question`})),n.push(createCard({icon:`💬`,content:`Answer: ${i}`,meta:t,type:`input`}))}else{let r=this.#E(e.name,e.input);n.push(createCard({icon:`🔨`,content:r,meta:t})),e.output?.length>0&&n.push(createCard({icon:`🔨`,content:e.output,meta:t,type:`output`}))}return n}}})),PageAgent,init_page_agent=__esmMin((()=>{init_page_agent_core(),init_page_controller(),init_page_agent_ui(),init_page_agent_core(),PageAgent=class extends PageAgentCore{panel;constructor(e){let t=new PageController({...e,enableMask:e.enableMask??!0});super({...e,pageController:t}),this.panel=new Panel(this,{language:e.language,promptForNextTask:e.promptForNextTask})}}}));init_page_agent();export{PageAgent};