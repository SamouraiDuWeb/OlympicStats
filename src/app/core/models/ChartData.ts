export interface ChartData {
  labels?: string[] | number[];
  datasets: ChartDataset[];
}

export interface ChartDataset {
  data?: number[];
  label?: string;
}
