const puppeteer = require("puppeteer");
const path = require("path");
const {execSync} = require("child_process");

const createPdf = async () => {
  execSync("hugo", {
    env: {
      PRINT_MODE: "on"
    }
  });
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const options = {
    path: path.join("public", "pdf", "resume.pdf"),
    format: "A4",
    printBackground: true
  };

  const url = `file:${path.join(__dirname, "public", "resume", "index.html")}`;
  await page.goto(url, {waitUntil: "networkidle2"});
  await page.pdf(options);

  await browser.close();
};

createPdf();
