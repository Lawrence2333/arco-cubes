import { sharedThemeConfig } from "arco-cubes-themes";

export const injectTailwind = async () => {
  if (document.getElementById("tailwind-cdn")) {
    return;
  }

  // 注入 Tailwind
  return new Promise<void>((resolve) => {
    const script = document.createElement("script");
    script.id = "tailwind-cdn";
    script.src = "https://cdn.tailwindcss.com";

    script.onload = () => {
      // @ts-ignore
      window.tailwind.config = {
        theme: {
          extend: {
            ...sharedThemeConfig,
          },
        },
      };
      resolve();
    };

    document.head.appendChild(script);
  });
};
