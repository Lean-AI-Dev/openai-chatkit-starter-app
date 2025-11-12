import { useState } from "react";
import { Summary } from "./Summary";
import { ChartPanel } from "./ChartPanel";
import { ToolsState } from "@/app/tools";
import { Page } from "./Page";

export function LeftPanel({ toolsState }: { toolsState: ToolsState }) {
  const panels = {
    summary: Summary,
    chart: ChartPanel,
  } as const;

  const [leftView, setLeftView] = useState<keyof typeof panels | undefined>(
    "summary",
  );

  const [pageIndex, setPageIndex] = useState<number | undefined>(undefined);

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
                  onClick={() => {
                    setLeftView(entry[0] as keyof typeof panels);
                    setPageIndex(undefined);
                  }}
                >
                  {entry[0]}
                </button>
              );
            })}
            {toolsState.pages?.map((page, index) => {
              return (
                <button
                  key={index}
                  className={`px-3 py-1.5 rounded-md transition-colors ${
                    pageIndex === index
                      ? "bg-white dark:bg-slate-700 shadow"
                      : "text-slate-600 dark:text-slate-300"
                  }`}
                  onClick={() => {
                    setPageIndex(index);
                    setLeftView(undefined);
                  }}
                >
                  {page.name}
                </button>
              );
            })}
          </nav>
        </div>
        <div className="p-4 border-t border-slate-200/60 dark:border-slate-800/60">
          {leftView && panels[leftView]({ toolsState })}
          {pageIndex !== undefined ? (
            <Page
              content={toolsState.pages[pageIndex].content}
              name={toolsState.pages[pageIndex].name}
            />
          ) : undefined}
        </div>
      </div>
    </aside>
  );
}
