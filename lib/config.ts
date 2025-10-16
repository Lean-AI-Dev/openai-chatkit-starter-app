import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

// 🔑 Identifiants (inchangés)
export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

// 💬 Prompts d’accueil personnalisés OrIA
export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "Analyse la VSM VSM",
    prompt: "Analyse ce Value Stream Mapping, calcule l'efficience et identifie les goulots d'étranglement.",
    icon: "lightbulb",
  },
  {
    label: "Analyse ce Process",
    prompt: "Lance l'analyse détaillée de ce processus",
    icon: "star",
  },
  {
    label: "Proposer une amélioration TO-BE",
    prompt: "Propose une version optimisée du process avec les gains attendus.",
    icon: "star",
  },
];

// ✏️ Placeholder du champ d’entrée
export const PLACEHOLDER_INPUT = "🚀 Quel flux OrIA doit-elle optimiser ?";

// 👋 Message de bienvenue
export const GREETING = "Que souhaitez-vous qu’OrIA éclaire aujourd’hui ? ✨";

// 🎨 Thème visuel OrIA (cyan, clair/sombre dynamique)
export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  color: {
    grayscale: {
      hue: 194, // teinte bleu-vert
      tint: 5,
      shade: theme === "dark" ? -2 : -4,
    },
    accent: {
      primary: "#5dbce5", 
      level: 1,
    },
    surface: {
      background: theme === "dark" ? "#fcfcfc": "#92bfce",
      foreground: theme === "dark" ? "#f2f2f2" : "#0f172a",
    },
  },
  radius: "pill",
  typography: {
    baseSize: 16,
    fontFamily:
      '"OpenAI Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    fontFamilyMono:
      'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },
});
