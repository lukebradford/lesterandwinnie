// Full-page screenshots for visual review. Usage: node tools/shot.mjs [url] [outdir]
// Uses the locally installed Google Chrome. Scrolls through the page so reveal animations fire.
import puppeteer from "puppeteer-core";
const url = process.argv[2] || "http://localhost:8765/";
const out = process.argv[3] || ".";
const browser = await puppeteer.launch({ executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", headless: true, args: ["--autoplay-policy=no-user-gesture-required"] });
const errors = [];
for (const [name, vp] of [["desktop", { width: 1440, height: 900 }], ["mobile", { width: 390, height: 844, isMobile: true, hasTouch: true, deviceScaleFactor: 2 }]]) {
  const page = await browser.newPage();
  page.on("console", (m) => m.type() === "error" && errors.push(`[${name}] console: ${m.text()}`));
  page.on("pageerror", (e) => errors.push(`[${name}] pageerror: ${e.message}`));
  page.on("requestfailed", (r) => errors.push(`[${name}] failed: ${r.url()} ${r.failure()?.errorText}`));
  page.on("response", (r) => r.status() >= 400 && errors.push(`[${name}] ${r.status()}: ${r.url()}`));
  await page.setViewport(vp);
  await page.goto(url, { waitUntil: "networkidle0" });
  const h = await page.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0; y < h; y += vp.height / 2) { await page.evaluate((y) => scrollTo(0, y), y); await new Promise((r) => setTimeout(r, 120)); }
  await new Promise((r) => setTimeout(r, 1500));
  await page.evaluate(() => document.querySelectorAll(".reveal").forEach((e) => e.classList.add("in")));
  await page.evaluate(() => scrollTo(0, 0));
  await new Promise((r) => setTimeout(r, 1200));
  // Chrome can't capture beyond ~16k px in one shot, so capture the page in tall segments.
  const seg = name === "desktop" ? 3600 : 2400;
  const total = await page.evaluate(() => document.documentElement.scrollHeight);
  let k = 0;
  for (let y = 0; y < total; y += seg, k++) {
    await page.screenshot({ path: `${out}/${name}-${String(k).padStart(2, "0")}.png`, clip: { x: 0, y, width: vp.width, height: Math.min(seg, total - y) }, captureBeyondViewport: true });
  }
  console.log(name, "height", h);
  await page.close();
}
await browser.close();
console.log(errors.length ? errors.join("\n") : "no errors");
