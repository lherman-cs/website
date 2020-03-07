const puppeteer = require("puppeteer");
const path = require("path");
const { execSync } = require("child_process");
var fs = require('fs');

const createPdf = async () => {
    execSync("hugo");
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

    const url = `file:${path.join(__dirname, "public", "portfolios", "2020-03-06", "index.html")}`;
    await page.goto(url, { waitUntil: "networkidle2" });
    await page.pdf(options);
    await browser.close();

    console.log(`successfully generated pdf at ${outPath}`);
};

createPdf();