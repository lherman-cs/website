const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");
const {execSync} = require("child_process");

const createPdf = async () => {
  execSync("hugo --cleanDestinationDir --minify --verbose", {
    env: {
      PRINT_MODE: "on"
    }
  });
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const outDir = path.join(__dirname, "public", "pdf");
  const outPath = path.join(outDir, "resume.pdf")
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir);
  }
  const options = {
    path: outPath,
    format: "A4",
    printBackground: true
  };

  const url = `file:${path.join(__dirname, "public", "resume", "index.html")}`;
  await page.goto(url, {waitUntil: "networkidle2"});
  await page.pdf(options);

  await browser.close();
};

createPdf();
