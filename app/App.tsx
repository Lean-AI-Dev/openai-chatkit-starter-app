"use client";
import { ChatKit } from "@openai/chatkit-js";

export default function App() {
  return (
    <main
      style={{
        background: "#0B1220",
        color: "#E6F8F4",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily:
          "Inter, system-ui, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
        padding: "2rem",
      }}
    >
      <img
        src="/oria-logo.png"
        alt="OrIA"
        style={{ width: "80px", marginBottom: "1rem" }}
      />
      <h1 style={{ fontSize: "1.8rem", color: "#12B886" }}>OrIA – Lean IA Copilot</h1>
      <p style={{ opacity: 0.8, marginBottom: "1.5rem" }}>
        Analyse de flux, VSM et performance en temps réel
      </p>

      <div
        style={{
          background: "#102B2A",
          border: "1px solid rgba(18,184,134,0.25)",
          borderRadius: "16px",
          padding: "1.5rem",
          width: "100%",
          maxWidth: "700px",
        }}
      >
        <ChatKit
          workflowId={process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID!}
          domainPublicKey={process.env.NEXT_PUBLIC_CHATKIT_DOMAIN_PUBLIC_KEY!}
          sessionEndpoint={
            process.env.NEXT_PUBLIC_CHATKIT_SESSION_ENDPOINT ??
            "/api/create-session"
          }
          messages={{
            inputPlaceholder: "Posez votre question Lean / VSM...",
            sendButtonLabel: "Envoyer",
          }}
          quickActions={[
            { label: "Analyser un VSM", value: "Run VSM analysis" },
            { label: "Calcul VA / BVA / NVA", value: "Compute VA/BVA/NVA" },
            { label: "Identifier le bottleneck", value: "Find bottleneck" },
          ]}
          theme={{
            mode: "dark",
            brandColor: "#12B886",
            backgroundColor: "#102B2A",
            textColor: "#E6F8F4",
          }}
        />
      </div>
    </main>
  );
}
