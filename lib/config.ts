import { ColorScheme, StartScreenPrompt } from "@openai/chatkit";

// 🧩 Type élargi pour inclure toutes les options du ChatKit
export type OrIAThemeConfig = {
  colorScheme: "light" | "dark";
  radius: "pill" | "rounded" | "square";
  density: "compact" | "normal" | "comfortable";
  color: {
    accent: { primary: string; level: number };
    surface: { background: string; foreground: string };
  };
  typography: {
    baseSize: number;
    fontFamily: string;
    fontFamilyMono: string;
  };
  composer: {
    placeholder: string;
    attachments: {
      enabled: boolean;
      maxCount: number;
      maxSize: number;
    };
    tools: {
      id: string;
      label: string;
      shortLabel: string;
      placeholderOverride: string;
      icon: string;
      pinned: boolean;
    }[];
    models: {
      id: string;
      label: string;
      description: string;
      default: boolean;
    }[];
  };
  startScreen: {
    greeting: string;
    prompts: StartScreenPrompt[];
  };
};

// 🔑 Identifiants
export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

// 💬 Prompts d’accueil personnalisés OrIA
export const STARTER_PROMPTS: StartScreenPrompt[] = [
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
];

// ✏️ Placeholder du champ d’entrée
export const PLACEHOLDER_INPUT = "🚀 Quel flux OrIA doit-elle optimiser ?";

// 👋 Message de bienvenue
export const GREETING =
  "Que souhaitez-vous qu’OrIA éclaire aujourd’hui ? ✨";

// 🎨 Thème visuel et configuration complète OrIA
export const getThemeConfig = (_theme: ColorScheme): OrIAThemeConfig => ({
  colorScheme: "light",
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
      {
        id: "insight_ai",
        label: "InsightAI",
        shortLabel: "IA",
        placeholderOverride: "Analyse ton processus",
        icon: "bot",
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
        description: "Fast reasoning and analysis",
        default: false,
      },
      {
        id: "gpt-4",
        label: "gpt-4",
        description: "Legacy stable model",
        default: false,
      },
      {
        id: "gpt-mini",
        label: "gpt-mini",
        description: "Lightweight quick answers",
        default: false,
      },
    ],
  },
  startScreen: {
    greeting: "Que souhaitez-vous qu’OrIA éclaire aujourd’hui ? ✨",
    prompts: STARTER_PROMPTS,
  },
});
