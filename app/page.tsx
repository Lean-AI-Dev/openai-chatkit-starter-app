import App from "./App";

export default function Home() {
  return (
    <main
      style={{
        background: "#0B1220", // fond sombre OrIA
        color: "#E6F8F4",
        minHeight: "100vh",
        fontFamily:
          "Inter, system-ui, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      <div style={{ width: "100%", maxWidth: "800px" }}>
        <ChatKit
          // Identifiants et clés environnementales
          workflowId={process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID!}
          domainPublicKey={process.env.NEXT_PUBLIC_CHATKIT_DOMAIN_PUBLIC_KEY!}
          sessionEndpoint={
            process.env.NEXT_PUBLIC_CHATKIT_SESSION_ENDPOINT ??
            "/api/create-session"
          }

          // Branding & en-tête
          header={{
            title: "OrIA – Lean IA Copilot",
            subtitle: "Analyse de flux, VSM et performance en temps réel",
            logoUrl: "/oria-logo.png", // à placer dans /public
          }}

          // Thème graphique Lean IA
          theme={{
            mode: "dark",
            brandColor: "#12B886", // vert Lean IA
            backgroundColor: "#0B1220",
            textColor: "#E6F8F4",
            fontFamily:
              "Inter, system-ui, Segoe UI, Roboto, Helvetica, Arial, sans-serif",

            // Style des bulles
            assistantBubble: {
              background: "#102B2A", // vert sombre
              text: "#E6F8F4",
              border: "1px solid rgba(18,184,134,0.25)",
            },
            userBubble: {
              background: "#1F2937", // gris anthracite (RAL 7016)
              text: "#F7FBFA",
              border: "1px solid rgba(255,255,255,0.08)",
            },

            // Boutons et éléments interactifs
            accent: {
              background: "#12B886",
              text: "#06221D",
              hoverBackground: "#0FA277",
            },
          }}

          // Actions rapides (widgets)
          quickActions={[
            { label: "Analyser un VSM", value: "Run VSM analysis" },
            { label: "Calcul VA / BVA / NVA", value: "Compute VA/BVA/NVA" },
            { label: "Identifier le bottleneck", value: "Find current bottleneck" },
          ]}

          // Libellés et interface utilisateur
          messages={{
            inputPlaceholder: "Posez votre question Lean / VSM...",
            sendButtonLabel: "Envoyer",
          }}
        />
      </div>
    </main>
  );
}
