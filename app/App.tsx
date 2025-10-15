"use client";

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
      }}
    >
      <img
        src="/oria-logo.png"
        alt="OrIA"
        style={{ width: "80px", marginBottom: "1rem" }}
      />
      <h1 style={{ fontSize: "1.8rem", color: "#12B886" }}>OrIA – Lean IA Copilot</h1>
      <p style={{ opacity: 0.8, marginBottom: "2rem" }}>
        Interface ChatKit personnalisée à venir...
      </p>

      <div
        style={{
          background: "#102B2A",
          border: "1px solid rgba(18,184,134,0.25)",
          borderRadius: "12px",
          padding: "1.5rem",
          width: "90%",
          maxWidth: "600px",
          textAlign: "center",
        }}
      >
        <p>💬 ChatKit sera intégré ici dans la prochaine étape.</p>
      </div>
    </main>
  );
}
