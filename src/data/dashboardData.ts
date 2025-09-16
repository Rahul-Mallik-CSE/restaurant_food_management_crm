/** @format */

export interface DashboardMetric {
  title: string;
  value: string | number;
  change: number;
  changeType: "increase" | "decrease";
}

export const dashboardMetrics: DashboardMetric[] = [
  {
    title: "Revenue",
    value: "12,145",
    change: 2.4,
    changeType: "decrease",
  },
  {
    title: "Balance",
    value: "6,023.25",
    change: 6.5,
    changeType: "increase",
  },
  {
    title: "Total Orders",
    value: 24,
    change: 6.5,
    changeType: "increase",
  },
  {
    title: "Menu Items",
    value: 214,
    change: 4.2,
    changeType: "increase",
  },
];
