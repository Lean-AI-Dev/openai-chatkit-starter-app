import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

// 🔑 Identifiants (inchangés)
export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

// 💬 Prompts d’accueil personnalisés OrIA
export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "Analyser une VSM",
    prompt:
      "Analyse ce Value Stream Mapping et identifie les goulots d'étranglement.",
    icon: "chart-bar", // 🟢 icône valide (ChatKitIcon)
  },
  {
    label: "Optimiser un processus",
    prompt:
      "Identifie les gaspillages et propose des actions Lean pour améliorer le flux.",
    icon: "bolt", // 🟢 icône valide (ChatKitIcon)
  },
];

// ✏️ Placeholder du champ d’entrée
export const PLACEHOLDER_INPUT = "🚀 Quel flux OrIA doit-elle optimiser ?";

// 👋 Message de bienvenue
export const GREETING = "Que souhaitez-vous qu’OrIA éclaire aujourd’hui ? ✨";

// 🎨 Thème visuel OrIA (compatible ChatKit)
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
    grayscale: {
      hue: 220,
      tint: 6,
      shade: theme === "dark" ? -1 : -4,
    },
  },
  typography: {
    baseSize: 16,
    fontFamily:
      '"OpenAI Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", sans-serif',
    fontFamilyMono:
      'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "DejaVu Sans Mono", "Courier New", monospace',
    fontSources: [
      {
        family: "OpenAI Sans",
        src: "https://cdn.openai.com/common/fonts/openai-sans/v2/OpenAISans-Regular.woff2",
        weight: 400,
        style: "normal",
        display: "swap",
      },
    ],
  },
});

// 🧠 Configuration complète OrIA (compatible ChatKitOptions)
export const ORIA_FULL_CONFIG = {
  composer: {
    placeholder: PLACEHOLDER_INPUT,
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
      {
        id: "process_ai",
        label: "OrIA Insight",
        shortLabel: "IA",
        placeholderOverride: "Décris ton processus ici...",
        icon: "sparkles",
        pinned: true,
      },
    ],
    models: [
      {
        id: "gpt-5",
        label: "gpt-5",
        description: "Balanced intelligence",
        default: true,
      },
      {
        id: "gpt-4o",
        label: "gpt-4o",
        description: "Fast reasoning",
      },
    ],
  },
  startScreen: {
    greeting: GREETING,
    prompts: STARTER_PROMPTS,
  },
  // (optionnel) tu peux aussi ajouter: threadItemActions, onClientTool, widgets, etc.
};
