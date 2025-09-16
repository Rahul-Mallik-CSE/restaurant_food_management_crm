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

// Define the RecentTransection interface
export interface RecentTransection {
  orderId: string;
  name: string;
  amount: string;
}

export const RecentTransections: RecentTransection[] = [
  { orderId: "#123402", name: "John Doe", amount: "$32.26" },
  { orderId: "#123402", name: "John Doe", amount: "$32.26" },
  { orderId: "#123402", name: "John Doe", amount: "$32.26" },
  { orderId: "#123402", name: "John Doe", amount: "$32.26" },
  { orderId: "#123402", name: "John Doe", amount: "$32.26" },
  { orderId: "#123402", name: "John Doe", amount: "$32.26" },
  { orderId: "#123402", name: "John Doe", amount: "$32.26" },
  { orderId: "#123402", name: "John Doe", amount: "$32.26" },
  { orderId: "#123402", name: "John Doe", amount: "$32.26" },
  { orderId: "#123402", name: "John Doe", amount: "$32.26" },
  { orderId: "#123402", name: "John Doe", amount: "$32.26" },
  { orderId: "#123402", name: "John Doe", amount: "$32.26" },
  { orderId: "#123402", name: "John Doe", amount: "$32.26" },
  { orderId: "#123402", name: "John Doe", amount: "$32.26" },
  { orderId: "#123402", name: "John Doe", amount: "$32.26" },
];

export interface RecentOrder {
  id: string;
  customer: string;
  items: string;
  amount: string;
  status: string;
  statusColor: string;
}

export const RecentOrders: RecentOrder[] = [
  {
    id: "#1234",
    customer: "John Doe",
    items: "Burger, Fries",
    amount: "$12",
    status: "Pending",
    statusColor: "bg-orange-100 text-orange-800",
  },
  {
    id: "#1234",
    customer: "John Doe",
    items: "Burger, Fries",
    amount: "$12",
    status: "Ready",
    statusColor: "bg-green-100 text-green-800",
  },
  {
    id: "#1234",
    customer: "John Doe",
    items: "Burger, Fries",
    amount: "$12",
    status: "Delivered",
    statusColor: "bg-blue-100 text-blue-800",
  },
  {
    id: "#1234",
    customer: "John Doe",
    items: "Burger, Fries",
    amount: "$12",
    status: "Ready",
    statusColor: "bg-green-100 text-green-800",
  },
  {
    id: "#1234",
    customer: "John Doe",
    items: "Burger, Fries",
    amount: "$12",
    status: "Delivered",
    statusColor: "bg-blue-100 text-blue-800",
  },
  {
    id: "#1234",
    customer: "John Doe",
    items: "Burger, Fries",
    amount: "$12",
    status: "Pending",
    statusColor: "bg-orange-100 text-orange-800",
  },
  {
    id: "#1234",
    customer: "John Doe",
    items: "Burger, Fries",
    amount: "$12",
    status: "Ready",
    statusColor: "bg-green-100 text-green-800",
  },
  {
    id: "#1234",
    customer: "John Doe",
    items: "Burger, Fries",
    amount: "$12",
    status: "Delivered",
    statusColor: "bg-blue-100 text-blue-800",
  },
  {
    id: "#1234",
    customer: "John Doe",
    items: "Burger, Fries",
    amount: "$12",
    status: "Ready",
    statusColor: "bg-green-100 text-green-800",
  },
  {
    id: "#1234",
    customer: "John Doe",
    items: "Burger, Fries",
    amount: "$12",
    status: "Delivered",
    statusColor: "bg-blue-100 text-blue-800",
  },
];
