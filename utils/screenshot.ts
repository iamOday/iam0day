import puppeteer from "puppeteer";
import * as path from "$std/path/mod.ts";
import { existsSync } from "$std/fs/mod.ts";
import { format } from "$std/datetime/mod.ts";

export const screenshot = async function ({ ...props }) {
  const formatPath = path.format({
    root: "/",
    dir: (props._dir || "static/i/s/"),
    ext: ".png",
    name: (props._date && props._path + format(new Date(), "yyyy-MM-dd")) ||
      props._path,
  });
  const pathFound = existsSync(formatPath);
  if (!pathFound) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });
    await page.goto(props._href, { waitUntil: "networkidle0", timeout: 35000 });
    await page.screenshot({ path: formatPath, fullPage: true });
    await browser.close();
  }
};
