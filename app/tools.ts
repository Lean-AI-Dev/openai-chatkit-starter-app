type BarChart = {
  type: "bar";
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string[];
    }[];
  };
};
type DonutChart = {
  type: "donut";
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
    }[];
  };
};

export type ToolsState = {
  summary?: {
    summary: string;
    tasks: string[];
  };
  pages: {
    name: string;
    content: string;
  }[];
  graphs?: (BarChart | DonutChart)[];
};
