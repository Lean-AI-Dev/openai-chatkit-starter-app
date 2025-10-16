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
    baseSize: 16,
    fontFamily:
      '"OpenAI Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    fontFamilyMono:
      'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },
});

// 🧠 Configuration complète OrIA (non typée ThemeOption)
export const ORIA_FULL_CONFIG = {
  startScreen: {
    greeting: "Que souhaitez-vous qu’OrIA éclaire aujourd’hui ? ✨",
    prompts: [
      {
        label: "Analyse cette VSM",
        prompt:
          "Analyse ce Value Stream Mapping, calcule l'efficience et identifie les goulots d'étranglement.",
        icon: "lightbulb",
      },
      {
        label: "Analyse ce Processus",
        prompt: "Lance l'analyse détaillée de ce processus.",
        icon: "star",
      },
    ],
  },
  composer: {
    placeholder: "🚀 Quel flux OrIA doit-elle optimiser ?",
    attachments: {
      enabled: true,
      maxCount: 5,
      maxSize: 10485760,
    },
    tools: [
      {
        id: "search_docs",
        label: "Lean6Sigma",
        shortLabel: "L6S",
        placeholderOverride: "Search documentation",
        icon: "chart",
        pinned: false,
      },
    ],
    models: [
      {
        id: "gpt-5",
        label: "gpt-5",
        description: "Balanced intelligence",
        default: true,
      },
    ],
  },
};
