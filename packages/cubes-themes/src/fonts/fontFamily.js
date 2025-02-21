// tailwind 默认支持字体配置
const tailwindFonts = {
  // 非衬线字体
  sans: {
    fonts: "ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
    source: "tailwind"
  },
  // 衬线字体
  serif: {
    fonts: "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif",
    source: "tailwind"
  },
  // 等宽字体
  mono: {
    fonts: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
    source: "tailwind"
  }
};

const defaultSupportFonts = {
  sans: ["Times New Roman"],
  serif: ["Avenir"],
}

// google fonts 配置
const googleFonts = {
  // 非衬线字体
  sans: [
    "DM Serif Text",
    "Libre Baskerville",
    "Crimson Text",
    "EB Garamond",
    "Libre Bodoni",
  ],
  // 衬线字体
  serif: [
    "Lexend",
    "Kumbh Sans",
    "Montserrat",
    "Poppins",
    "Sulphur Point",
  ],
  // 等宽字体
  mono: [
    "Roboto Mono",
    "Azeret Mono",
    "Courier Prime",
  ],
  // 特殊字体，使用非衬线字体进行 fallback
  special: [
    "Knewave",
    "Playwrite AU SA",
    "Rubik Moonrocks",
    "Cherry Bomb One",
    "Titan One",
    "Tiny5",
    "Sniglet",
    "Arizonia",
    "Train One",
    "Koulen",
    "Kumar One",
    "Anton",
    "Protest Riot",
    "Teko",
    "Abril Fatface",
    "Archivo Black",
    "Abhaya Libre",
    "Alata"
  ]
};

// 为 Google 字体添加 fallback
function addFallbackToFonts(fonts, source = "google") {
  const result = {};
  Object.entries(fonts).forEach(([key, fonts]) => {
    const fallbacks = tailwindFonts[key] ? tailwindFonts[key].fonts : tailwindFonts.sans.fonts;
    for (const font of fonts) {
      result[font] = {
        fonts: `'${font}', ${fallbacks}`,
        source: source
      }
    }
  })
  console.log("result: ", result);
  return result
}

// 导出支持的所有字体
export function supportedFonts() {
  return {
    ...tailwindFonts,
    ...addFallbackToFonts(defaultSupportFonts, "default"),
    ...addFallbackToFonts(googleFonts, "google")
  };
}

// 导出基础配置，方便其他地方使用
export { tailwindFonts, googleFonts };
