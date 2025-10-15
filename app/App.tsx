"use client";
import { useCallback } from "react";
import { ChatKitPanel, type FactAction } from "@/components/ChatKitPanel";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function App() {
   const { scheme, setScheme } = useColorScheme();

  const handleWidgetAction = useCallback(async (action: FactAction) => {
    if (process.env.NODE_ENV !== "production") {
      console.info("[ChatKitPanel] widget action", action);
    }
  }, []);

  const handleResponseEnd = useCallback(() => {
    if (process.env.NODE_ENV !== "production") {
      console.debug("[ChatKitPanel] response end");
    }
  }, []);
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
        <Chatkit
          // Clés publiques et workflow OpenAI
          apiKey={process.env.NEXT_PUBLIC_CHATKIT_DOMAIN_PUBLIC_KEY!}
          workflowId={process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID!}
          // Apparence
          theme="dark"
          placeholder="Posez votre question Lean / VSM..."
        />
      </div>
    </main>
  );
}
