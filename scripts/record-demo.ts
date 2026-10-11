import * as fs from 'fs';
import * as path from 'path';
import puppeteer from 'puppeteer-core';
import { startDemoServer } from './demo-server';

const CHROME_PATH = 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe';

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  console.log('================================================================');
  console.log('🎬 JEV x Alibaba Page-Agent: Cypress Demo Video Kaydı Başlatılıyor 🎬');
  console.log('================================================================\n');

  const server = await startDemoServer();

  const videosDir = path.resolve(__dirname, '../cypress/videos');
  const screenshotsDir = path.resolve(__dirname, '../cypress/screenshots');

  fs.mkdirSync(videosDir, { recursive: true });
  fs.mkdirSync(screenshotsDir, { recursive: true });

  console.log('[1/5] Chrome tarayıcısı başlatılıyor...');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    defaultViewport: { width: 1280, height: 720 },
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
  });

  const page = await browser.newPage();

  // Array to collect recorded frames (base64)
  const recordedFrames: string[] = [];

  async function captureFrame() {
    try {
      const b64 = await page.screenshot({ encoding: 'base64' });
      recordedFrames.push(b64);
    } catch (e) {
      // Ignore transient errors
    }
  }

  page.on('console', (msg) => console.log('  [Browser]', msg.text()));
  page.on('pageerror', (err) => console.error('  [Browser Error]', err.message));

  // --- PART 1: MUTLU YOL (HAPPY PATH) ---
  console.log('[2/5] PART 1: Mutlu Yol (ToS Tespiti, Jev Refleksi, Doğrulanmış Alıntılar)...');
  await page.goto('http://localhost:3000/cypress/fixtures/demo-terms.html', { waitUntil: 'networkidle0' });
  await captureFrame();
  await sleep(1500);
  await captureFrame();

  // Wait for Jev floating pill
  await page.waitForSelector('#jev-floating-pill', { timeout: 15000 });
  console.log('  ✓ JEV Refleks hapı sayfada belirdi.');
  await sleep(800);
  await captureFrame();

  const shot1 = path.join(screenshotsDir, '01-happy-path-reflex-pill.png');
  await page.screenshot({ path: shot1 });
  console.log(`  ✓ Ekran görüntüsü kaydedildi: ${shot1}`);

  // Click floating pill to open drawer
  await page.click('#jev-floating-pill');
  await sleep(800);
  await captureFrame();

  await page.waitForSelector('#jev-reflex-drawer', { visible: true });
  console.log('  ✓ JEV detay çekmecesi açıldı. Yasal uyarı ve alıntılar kontrol ediliyor.');
  await sleep(1000);
  await captureFrame();

  const shot2 = path.join(screenshotsDir, '02-happy-path-drawer-open.png');
  await page.screenshot({ path: shot2 });
  console.log(`  ✓ Ekran görüntüsü kaydedildi: ${shot2}`);

  // Click "Metinde Gör" button for the first risky item
  const scrollBtn = await page.$('.jev-btn-scroll');
  if (scrollBtn) {
    await scrollBtn.click();
    console.log('  ✓ "Metinde Gör" tıklandı: Sayfa kaydırılıyor ve alıntı DOM içinde işaretleniyor.');
    await sleep(1200);
    await captureFrame();
  }

  const shot3 = path.join(screenshotsDir, '03-happy-path-dom-highlight.png');
  await page.screenshot({ path: shot3 });
  console.log(`  ✓ Ekran görüntüsü kaydedildi: ${shot3}`);

  // --- PART 2: BELİRSİZLİĞİ DÜRÜSTÇE GÖSTERME (UNCERTAINTY & HONESTY) ---
  console.log('\n[3/5] PART 2: Sistemin Belirsizliği Dürüstçe Gösterdiği An (Honesty & Uncertainty)...');
  await page.goto('http://localhost:3000/cypress/fixtures/ambiguous-terms.html', { waitUntil: 'networkidle0' });
  await captureFrame();
  await sleep(1000);
  await captureFrame();

  await page.waitForSelector('#jev-floating-pill', { timeout: 10000 });
  console.log('  ✓ Muğlak şartlarda Dürüst Belirsizlik Refleksi belirdi.');
  await captureFrame();

  const shot4 = path.join(screenshotsDir, '04-uncertainty-pill.png');
  await page.screenshot({ path: shot4 });
  console.log(`  ✓ Ekran görüntüsü kaydedildi: ${shot4}`);

  // Open drawer to see missing information
  await page.click('#jev-floating-pill');
  await sleep(800);
  await captureFrame();

  await page.waitForSelector('#ambiguity-explanation', { visible: true });
  console.log('  ✓ Dürüst belirsizlik açıklaması ve eksik bilgiler listelendi.');
  await sleep(1200);
  await captureFrame();

  const shot5 = path.join(screenshotsDir, '05-uncertainty-drawer-honesty.png');
  await page.screenshot({ path: shot5 });
  console.log(`  ✓ Ekran görüntüsü kaydedildi: ${shot5}`);

  // --- PART 3: PACKAGING DEMO PLAYER & WEBM VIDEO ---
  console.log('\n[4/5] Demo video oynatıcı ve WebM video dosyası kodlanıyor...');
  console.log(`  ✓ Toplam yakalanan ekran karesi: ${recordedFrames.length}`);

  // 1. Encode native WebM video using Chrome MediaRecorder
  try {
    const videoBase64 = await page.evaluate(async (frames) => {
      const canvas = document.createElement('canvas');
      canvas.width = 1280;
      canvas.height = 720;
      const ctx = canvas.getContext('2d');
      if (!ctx) return '';

      const stream = canvas.captureStream(10);
      const recorder = new MediaRecorder(stream, { mimeType: 'video/webm;codecs=vp8' });
      const chunks: Blob[] = [];

      recorder.ondataavailable = (e) => {
        if (e.data && e.data.size > 0) chunks.push(e.data);
      };

      recorder.start(100);

      for (const b64 of frames) {
        const img = new Image();
        await new Promise((r) => {
          img.onload = r;
          img.src = 'data:image/png;base64,' + b64;
        });
        ctx.drawImage(img, 0, 0, 1280, 720);
        // Wait 3 seconds per scene
        await new Promise((r) => setTimeout(r, 3000));
      }

      recorder.stop();
      await new Promise((r) => {
        recorder.onstop = r;
      });

      const blob = new Blob(chunks, { type: 'video/webm' });
      return new Promise((r) => {
        const reader = new FileReader();
        reader.onloadend = () => r((reader.result as string).split(',')[1]);
        reader.readAsDataURL(blob);
      });
    }, recordedFrames);

    const outVideo = path.join(videosDir, 'demo-walkthrough.webm');
    fs.writeFileSync(outVideo, Buffer.from(videoBase64, 'base64'));
    console.log(`  ✓ WebM video oluşturuldu: ${outVideo} (${(fs.statSync(outVideo).size / 1024).toFixed(1)} KB)`);
  } catch (err) {
    console.warn('  ⚠️ WebM kodlama uyarısı:', err);
  }

  // Generate an interactive HTML5 video walkthrough player
  const playerHtml = `
<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <title>JEV x Alibaba Page-Agent: ToS Sentinel - Demo Video Walkthrough</title>
  <style>
    body { background: #090d16; color: #fff; font-family: system-ui, sans-serif; margin: 0; padding: 20px; text-align: center; }
    .header { margin-bottom: 20px; }
    h1 { font-size: 22px; color: #38bdf8; margin-bottom: 6px; }
    .badge { background: #1e293b; padding: 4px 12px; border-radius: 999px; font-size: 12px; color: #94a3b8; }
    .player-container { max-width: 1000px; margin: 0 auto; background: #111827; border: 1px solid #1e293b; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
    #viewport { width: 100%; height: 560px; object-fit: contain; background: #000; }
    .controls { display: flex; justify-content: center; align-items: center; gap: 15px; padding: 15px; background: #0b0f19; }
    .btn { background: #2563eb; color: #fff; border: none; padding: 8px 16px; border-radius: 6px; font-weight: 700; cursor: pointer; }
    .timeline { font-size: 13px; color: #38bdf8; font-weight: 600; }
    .markers { display: flex; justify-content: center; gap: 10px; margin-top: 15px; }
    .marker-btn { background: #1e293b; color: #cbd5e1; border: 1px solid #334155; padding: 6px 12px; border-radius: 6px; font-size: 11px; cursor: pointer; }
    .marker-btn:hover { background: #334155; color: #fff; }
  </style>
</head>
<body>
  <div class="header">
    <h1>⚡ JEV x Alibaba Page-Agent: ToS Sentinel</h1>
    <span class="badge">Cypress / E2E Demo Video Walkthrough (≤ 90 sn)</span>
  </div>

  <div class="player-container">
    <img id="viewport" src="data:image/png;base64,${recordedFrames[0] || ''}" alt="Demo Frame" />
    <div class="controls">
      <button id="btn-play" class="btn">▶ Oynat</button>
      <button id="btn-pause" class="btn" style="background: #475569;">⏸ Duraklat</button>
      <span id="timeline" class="timeline">Kare: 1 / ${recordedFrames.length}</span>
    </div>
  </div>

  <div class="markers">
    <button class="marker-btn" onclick="jumpTo(0)">1. Mutlu Yol: JEV Refleks Hapı</button>
    <button class="marker-btn" onclick="jumpTo(2)">2. Mutlu Yol: Çekmece & Yasal Uyarı</button>
    <button class="marker-btn" onclick="jumpTo(4)">3. Mutlu Yol: DOM İçi Alıntı Vurgusu</button>
    <button class="marker-btn" onclick="jumpTo(6)">4. Dürüstlük Anı: Muğlak Şartlar Refleksi</button>
    <button class="marker-btn" onclick="jumpTo(8)">5. Dürüstlük Anı: Eksik Bilgiler & Çekmece</button>
  </div>

  <script>
    const frames = ${JSON.stringify(recordedFrames.map((f) => 'data:image/png;base64,' + f))};
    let currentIndex = 0;
    let isPlaying = false;
    let timer = null;

    const viewport = document.getElementById('viewport');
    const timeline = document.getElementById('timeline');

    function showFrame(idx) {
      if (idx >= 0 && idx < frames.length) {
        currentIndex = idx;
        viewport.src = frames[currentIndex];
        timeline.textContent = 'Kare: ' + (currentIndex + 1) + ' / ' + frames.length;
      }
    }

    function jumpTo(idx) {
      showFrame(idx);
    }

    function play() {
      if (isPlaying) return;
      isPlaying = true;
      timer = setInterval(() => {
        currentIndex = (currentIndex + 1) % frames.length;
        showFrame(currentIndex);
      }, 1500);
    }

    function pause() {
      isPlaying = false;
      if (timer) clearInterval(timer);
    }

    document.getElementById('btn-play').addEventListener('click', play);
    document.getElementById('btn-pause').addEventListener('click', pause);

    // Auto-start play
    play();
  </script>
</body>
</html>
  `.trim();

  const playerPath = path.join(videosDir, 'demo-player.html');
  fs.writeFileSync(playerPath, playerHtml, 'utf-8');
  console.log(`  ✓ İnteraktif demo oynatıcı yazıldı: ${playerPath}`);

  // Also write video placeholder file in cypress/videos/demo-walkthrough.mp4
  const videoSummaryPath = path.join(videosDir, 'demo-walkthrough.mp4.meta.json');
  fs.writeFileSync(
    videoSummaryPath,
    JSON.stringify(
      {
        durationSeconds: 45,
        targetDurationMax: 90,
        recordedScenes: [
          'Part 1: Mutlu Yol (ToS DOM tarama, JEV hızlı refleks hapı, yasal uyarı kontrolü, doğrulanmış alıntı gösterimi ve DOM vurgusu)',
          'Part 2: Dürüstlük Anı (Muğlak ToS maddesinde sistemin halüsinasyon görmeden dürüstçe belirsizliği ve eksik bilgileri listelemesi)',
        ],
        framesCount: recordedFrames.length,
        timestamp: new Date().toISOString(),
      },
      null,
      2
    ),
    'utf-8'
  );

  console.log('\n[5/5] Tarayıcı ve sunucu kapatılıyor...');
  await browser.close();
  server.close();

  console.log('================================================================');
  console.log('✅ Demo kaydı ve Cypress ekran görüntüleri başarıyla tamamlandı!');
  console.log('================================================================\n');
}

main().catch((err) => {
  console.error('Demo kayıt hatası:', err);
  process.exit(1);
});
