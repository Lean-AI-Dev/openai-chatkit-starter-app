import { ToolsState } from "@/app/tools";

export function Summary({ toolsState }: { toolsState: ToolsState }) {
  console.log("Render summary", toolsState.summary);
  return (
    <div className="space-y-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
      {/*<pre>{JSON.stringify(toolsState?.summary, null, 2)}</pre>*/}
      <h1 className="text-2xl">{toolsState?.summary?.summary}</h1>
      {toolsState?.summary &&
        toolsState.summary.tasks.map((task, index) => {
          return <div key={index}> ✳️ {task}</div>;
        })}
    </div>
  );
}
