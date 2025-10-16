import type { ChatKitOptions } from "@openai/chatkit";

// 🔑 Identifiants (inchangés)
export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

const options: ChatKitOptions = {
  api: {
    // TODO: configure your ChatKit API integration (URL, auth, uploads).
  },
  export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "Analyser une VSM",
    prompt: "Analyse ce process VSM et identifie les goulots d'étranglement.",
    icon: "lightbulb",
  },
  {
    label: "Calculer VA / BVA / NVA",
    prompt: "Calcule la répartition des temps de valeur ajoutée, BVA et NVA.",
    icon: "star",
  },
  {
    label: "Proposer une amélioration TO-BE",
    prompt: "Propose une version optimisée du process avec les gains attendus.",
    icon: "star",
  },  
  // ✏️ Placeholder du champ d’entrée
export const PLACEHOLDER_INPUT = "Explique-moi ton process Lean...";

// 👋 Message de bienvenue
export const GREETING = "👋 Bonjour, je suis OrIA – ton copilote Lean IA.";
export function getThemeConfig()
  theme: {
    colorScheme: 'light',
    radius: 'pill',
    density: 'normal',
    color: {
      accent: {
        primary: '#5dbce5',
        level: 1
      },
      surface: {
        background: '#fcfcfc',
        foreground: '#f2f2f2'
      }
    },
    typography: {
      baseSize: 16,
      fontFamily: '"OpenAI Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", sans-serif',
      fontFamilyMono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "DejaVu Sans Mono", "Courier New", monospace',
      fontSources: [
        {
          family: 'OpenAI Sans',
          src: 'https://cdn.openai.com/common/fonts/openai-sans/v2/OpenAISans-Regular.woff2',
          weight: 400,
          style: 'normal',
          display: 'swap'
        }
      // ...and 7 more font sources
      ]
    }
  },
  composer: {
    placeholder: '🚀 Quel flux OrIA doit-elle optimiser ?',
    attachments: {
      enabled: true,
      maxCount: 5,
      maxSize: 10485760
    },
    tools: [
      {
        id: 'search_docs',
        label: 'Lean6Sigma',
        shortLabel: 'L6S',
        placeholderOverride: 'Search documentation',
        icon: 'chart',
        pinned: false
      }
      // ...and 1 more tool
    ],
    models: [
      {
        id: 'gpt-5',
        label: 'gpt-5',
        description: 'Balanced intelligence',
        'default': true
      }
      // ...and 3 more models
    ],
  },
  startScreen: {
    greeting: ' Que souhaitez-vous qu’OrIA éclaire aujourd’hui ? ✨',
    prompts: [],
  },
  // Optional fields not shown: locale, initialThread, threadItemActions, header, onClientTool, entities, widgets
};
