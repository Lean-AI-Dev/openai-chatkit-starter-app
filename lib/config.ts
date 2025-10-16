import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

// 🔑 Identifiants (inchangés)
export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

// 💬 Prompts d’accueil personnalisés OrIA
export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "Analyser un Process VSM",
    prompt: "Analyse ce process VSM et identifie les goulots d'étranglement.",
    icon: "chart-line-up",
  },
  {
    label: "Calculer VA / BVA / NVA",
    prompt: "Calcule la répartition des temps de valeur ajoutée, BVA et NVA.",
    icon: "gear",
  },
  {
    label: "Proposer une amélioration TO-BE",
    prompt: "Propose une version optimisée du process avec les gains attendus.",
    icon: "star",
  },
];

// ✏️ Placeholder du champ d’entrée
export const PLACEHOLDER_INPUT = "Explique-moi ton process Lean...";

// 👋 Message de bienvenue
export const GREETING = "👋 Bonjour, je suis OrIA – ton copilote Lean IA.";

// 🎨 Thème visuel OrIA (cyan, clair/sombre dynamique)
export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  color: {
    grayscale: {
      hue: 194, // teinte bleu-vert
      tint: 5,
      shade: theme === "dark" ? -2 : -5,
    },
    accent: {
      primary: "#00FFFF", // cyan OrIA
      level: 2,
    },
    surface: {
      background: theme === "dark" ? "#0B1220" : "#92bfce",
      foreground: theme === "dark" ? "#E6F8FF" : "#0f172a",
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
