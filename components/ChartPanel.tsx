import { ToolsState } from "@/app/tools";
import { Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  DoughnutController,
  ArcElement,
} from "chart.js";

export const colorPalette = [
  "#F09D51",
  "#3993DD",
  "#F06543",
  "#606C38",
  "#424874",
  "#E8E9EB",
  "#50514F",
  "#E0DFD5",
  "#313638",
  "#25283D",
];

export function ChartPanel({ toolsState }: { toolsState: ToolsState }) {
  ChartJS.register(
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
    DoughnutController,
    ArcElement,
  );

  const graphsData = toolsState?.graphs?.map((graph) => {
    // if (graph.type === "bar") {
    return {
      type: graph.type,
      ...graph.data,
      datasets: [
        ...graph.data.datasets.map((dataset, index) => ({
          ...dataset,
          backgroundColor:
            graph.type === "bar"
              ? colorPalette[index % colorPalette.length]
              : [...Array(dataset.data.length)].map(
                  (rien, index) => colorPalette[index % colorPalette.length],
                ),
        })),
      ],
    };
    // }
  });

  console.log(graphsData);

  return (
    <div className="space-y-2 text-sm  text-slate-700 dark:text-slate-300">
      {graphsData &&
        graphsData.map((data, index) => {
          if (data.type === "bar")
            return (
              <Bar
                data={data}
                key={index}
                options={{ maintainAspectRatio: true, aspectRatio: 2 }}
              ></Bar>
            );
          else
            return (
              <Doughnut
                className="h-20"
                data={data}
                key={index}
                options={{ maintainAspectRatio: true, aspectRatio: 2 }}
              ></Doughnut>
            );
        })}
      {/*<Doughnut
        // height="100"
        // width="200"
        data={{
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [
            {
              label: "# of Votes",
              data: [12, 19, 3, 5, 2, 3],
              borderWidth: 1,
              backgroundColor: [
                "#F06543",
                "#E8E9EB",
                "#313638",
                "#F09D51",
                "#3993DD",
              ],
            },
          ],
        }}
        options={{ maintainAspectRatio: true, aspectRatio: 2 }}
      ></Doughnut>*/}
      {/*<pre>{JSON.stringify(graphsData, null, 2)}</pre>*/}
    </div>
  );
}
