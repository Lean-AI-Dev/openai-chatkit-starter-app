import { ColorScheme, ThemeOption } from "@openai/chatkit";
// 🔑 Identifiants (inchangés)
export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";
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
