import { supportedFonts } from "arco-cubes-themes";

export const injectCustomFonts = async (targetFamily: string) => {
  // targetFamily 里面如果有未支持的字体，则直接走默认fallback，return即可
  const fonts = supportedFonts();

  let googleFontFamily: string | undefined;
  Object.keys(fonts).forEach((key) => {
    // @ts-ignore
    if (targetFamily.includes(fonts[key].fonts)) {
      // @ts-ignore
      if (fonts[key].source === "google") {
        // @ts-ignore
        googleFontFamily = fonts[key].fonts;
      }
    }
  });

  console.log("googleFontFamily: ", googleFontFamily);

  if (!googleFontFamily) {
    console.log("use unsupport custom fonts: ", targetFamily);
    return;
  }

  if (googleFontFamily.includes(",")) {
    googleFontFamily = googleFontFamily.split(",")[0];
  }

  // targetfamily 里面有已经支持的 google fonts，则需要注入
  // 注入 Google Fonts
  return new Promise<void>((resolve) => {
    if (!googleFontFamily) {
      resolve();
      return;
    }
    const link = document.createElement("link");
    const downloadName = googleFontFamily.replace(/ /g, "+").replace(/'/g, "");
    link.id = `google-fonts-cdn-${downloadName}`;
    link.rel = "stylesheet";
    link.href = `https://fonts.googleapis.com/css2?family=${downloadName}&display=swap`;

    link.onload = () => {
      console.log("Google Fonts loaded successfully");
      resolve();
    };

    // 如果加载失败也要 resolve，避免阻塞
    link.onerror = () => {
      console.warn("Failed to load Google Fonts");
      resolve();
    };

    document.head.appendChild(link);
  });
};
