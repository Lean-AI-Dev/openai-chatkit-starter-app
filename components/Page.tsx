import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
export function Page({ name, content }: { name: string; content: string }) {
  console.log("Render page");
  return (
    <div className="space-y-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
      {/*<pre>{JSON.stringify(toolsState?.summary, null, 2)}</pre>*/}
      <h1 className="text-2xl">{name}</h1>
      <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
    </div>
  );
}
