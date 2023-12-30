import puppeteer from "puppeteer";
import * as path from "$std/path/mod.ts";
import { existsSync } from "$std/fs/mod.ts";
import { format } from "$std/datetime/mod.ts";
export const screenshot = async function (
  { ...props }: { [x: string]: undefined },
) {
  const formatPath = path.format({
    root: "/",
    dir: (props.dir || "static/p/"),
    ext: ".webp",
    name: (props.date && props.path + format(new Date(), "yyyy-MM-dd")) ||
      props.path,
  }).replaceAll(/\\/g, "");
  const pathFound = existsSync(formatPath);
  if (!pathFound) {
    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox"],
    });
    const page = await browser.newPage();
    await page.setViewport({
      width: props.width || 1920,
      height: props.height || 1080,
    });
    await page.goto(props.href, { waitUntil: "networkidle0", timeout: 35000 });
    await page.screenshot({
      path: formatPath,
      type: "webp",
      fullPage: true,
    });
    await browser.close();
    return formatPath;
  } else {
    return formatPath;
  }
};
