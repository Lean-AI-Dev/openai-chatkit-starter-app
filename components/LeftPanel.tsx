import { useState } from "react";
import { Summary } from "./Summary";
import { ChartPanel } from "./ChartPanel";
import { ToolsState } from "@/app/tools";

export function LeftPanel({ toolsState }: { toolsState: ToolsState }) {
  const panels = {
    summary: Summary,
    chart: ChartPanel,
  } as const;

  const [leftView, setLeftView] = useState<keyof typeof panels>("summary");

  console.log("Rendering LeftPanel ", toolsState);

  return (
    <aside className="w-full lg:sticky lg:top-4 lg:max-h-[calc(100vh-6rem)] lg:overflow-auto">
      <div className="rounded-xl border border-slate-200/60 dark:border-slate-800/60 bg-white dark:bg-slate-900 shadow-sm">
        <div className="px-4 pt-4">
          <nav className="inline-flex rounded-lg bg-slate-100 dark:bg-slate-800 p-1 text-sm">
            {Object.entries(panels).map((entry) => {
              return (
                <button
                  key={entry[0]}
                  className={`px-3 py-1.5 rounded-md transition-colors ${
                    leftView === entry[0]
                      ? "bg-white dark:bg-slate-700 shadow"
                      : "text-slate-600 dark:text-slate-300"
                  }`}
                  onClick={() => setLeftView(entry[0] as keyof typeof panels)}
                >
                  {entry[0]}
                </button>
              );
            })}
            {/*<button
              className={`px-3 py-1.5 rounded-md transition-colors ${
                leftView === "summary"
                  ? "bg-white dark:bg-slate-700 shadow"
                  : "text-slate-600 dark:text-slate-300"
              }`}
              onClick={() => setLeftView("summary")}
            >
              Summary
            </button>{" "}
            <button
              className={`px-3 py-1.5 rounded-md transition-colors ${
                leftView === "infos"
                  ? "bg-white dark:bg-slate-700 shadow"
                  : "text-slate-600 dark:text-slate-300"
              }`}
              onClick={() => setLeftView("infos")}
            >
              Infos
            </button>
            <button
              className={`px-3 py-1.5 rounded-md transition-colors ${
                leftView === "prompts"
                  ? "bg-white dark:bg-slate-700 shadow"
                  : "text-slate-600 dark:text-slate-300"
              }`}
              onClick={() => setLeftView("prompts")}
            >
              Prompts
            </button>*/}
            {/*<button
              className={`px-3 py-1.5 rounded-md transition-colors ${
                leftView === "history"
                  ? "bg-white dark:bg-slate-700 shadow"
                  : "text-slate-600 dark:text-slate-300"
              }`}
              onClick={() => setLeftView("history")}
            >
              History
            </button>*/}
          </nav>
        </div>
        <div className="p-4 border-t border-slate-200/60 dark:border-slate-800/60">
          {panels[leftView]({ toolsState })}
          {/*{leftView === "summary" && <Summary summary={summary}></Summary>}
          {leftView === "infos" && (
            <div className="space-y-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              <p>
                Welcome to OrIA. Use the right panel to chat. This left panel is
                dynamic: show info, shortcuts, or docs.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Getting started and best practices</li>
                <li>Useful internal links and docs</li>
                <li>Key metrics and KPIs</li>
              </ul>
            </div>
          )}
          {leftView === "prompts" && (
            <div className="space-y-2 text-sm">
              <p className="text-slate-700 dark:text-slate-300">
                Example prompts to kick off:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-800 dark:text-slate-200">
                <li>Analyze a VSM and identify bottlenecks</li>
                <li>Optimize a process: wastes and Lean actions</li>
              </ul>
              <p className="text-xs text-slate-500">
                Tip: these are also available in the widget start screen.
              </p>
            </div>
          )}
          {leftView === "history" && (
            <div className="text-sm text-slate-700 dark:text-slate-300">
              <p>Local history (example). Show recent or pinned threads.</p>
              <div className="mt-2 space-y-1">
                <div className="rounded-md bg-slate-100 dark:bg-slate-800 px-3 py-2">
                  VSM - Assembly Line A
                </div>
                <div className="rounded-md bg-slate-100 dark:bg-slate-800 px-3 py-2">
                  Process improvement - Receiving
                </div>
              </div>
            </div>
          )}*/}
        </div>
      </div>
    </aside>
  );
}
