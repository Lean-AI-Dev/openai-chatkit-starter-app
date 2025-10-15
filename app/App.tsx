"use client";

import { useCallback } from "react";
import { ChatKitPanel, type FactAction } from "@/components/ChatKitPanel";

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
  <main className="flex min-h-screen flex-col items-center justify-between bg-slate-100 dark:bg-slate-950 py-8">
      {/* --- HEADER ORIA --- */}
      <header className="flex flex-col items-center justify-center mb-6">
       
        <h1 className="text-2xl font-semibold text-emerald-500">
          OrIA
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm">
          Analyse de flux, VSM et performance en temps réel
        </p>
      </header>
      <div className="mx-auto w-full max-w-5xl">
        <ChatKitPanel
          options={options}
          theme={scheme}
          onWidgetAction={handleWidgetAction}
          onResponseEnd={handleResponseEnd}
          onThemeRequest={setScheme}
        />
      </div>
    </main>
  );
}
