import type { ChatKitOptions } from "@openai/chatkit";

export const options: ChatKitOptions = {
  api: {
    // TODO: configure your ChatKit API integration (URL, auth, uploads).
  },
  theme: {
    colorScheme: 'light',
    radius: 'pill',
    density: 'normal',
    color: {
      grayscale: {
        hue: 194,
        tint: 5
      },
      accent: {
        primary: '#00FFFF',
        level: 2
      },
      surface: {
        background: '#92bfce',
        foreground: '#d2d8da'
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
      ]
    }
  },
  composer: {
    placeholder: 'Coucou',
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
    ],
    models: [
      {
        id: 'gpt-5',
        label: 'gpt-5',
        description: 'Balanced intelligence',
        default: true
      }
    ],
  },
  startScreen: {
    greeting: 'Quel est le Process à Analyser ?',
    prompts: [
      {
        icon: 'circle-question',
        label: 'What is ChatKit?',
        prompt: 'What is ChatKit and what does it do?'
      }
    ],
  },
};
