import { ColorScheme, ThemeOption } from "@openai/chatkit";

export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  colorScheme: theme ?? "light",
  radius: "pill",
  density: "normal",
  color: {
    accent: {
      primary: "#5dbce5",
      level: 1,
    },
    surface: {
      background: "#fcfcfc",
      foreground: "#f2f2f2",
    },
  },
  typography: {
    baseSize: 16 as 16, // ✅ Cast pour correspondre à la définition (16 | 14 | 15 | 17 | 18)
    fontFamily:
      '"OpenAI Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    fontFamilyMono:
      'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },
});
