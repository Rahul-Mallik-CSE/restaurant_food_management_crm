/** @format */

import { ComponentType } from "react";

export interface AnalyticsCard {
  title: string;
  value: string | number;
  icon: ComponentType<{ className?: string; size?: number }>;
  change: number;
  changeType: "increase" | "decrease";
}

export interface MenuItemData {
  name: string;
  category: string;
  orders: number;
  revenue: string;
  growthPercentage: number;
}
