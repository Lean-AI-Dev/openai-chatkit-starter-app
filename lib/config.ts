import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

// 🔑 Identifiants (inchangés)
export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

// 💬 Prompts d’accueil personnalisés OrIA
export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "Analyse cette VSM",
    prompt: "Analyse ce Value Stream Mapping, calcule l'efficience et identifie les goulots d'étranglement.",
    icon: "lightbulb",
  },
  {
    label: "Analyse ce Processus",
    prompt: "Lance l'analyse détaillée de ce processus.",
    icon: "star",
  },
  ];

// ✏️ Placeholder du champ d’entrée
export const PLACEHOLDER_INPUT = "🚀 Quel flux OrIA doit-elle optimiser.";

// 👋 Message de bienvenue
export const GREETING = " Que souhaitez-vous qu’OrIA éclaire aujourd’hui ? ✨";

// 🎨 Thème visuel OrIA (cyan, clair/sombre dynamique)
export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
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
});
