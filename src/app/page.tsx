/** @format */

import MetricsCard from "@/components/dashboard/matricsCard";
import WithdrawCard from "@/components/dashboard/withdrawCard";
import { dashboardMetrics } from "@/data/dashboardData";

export default function Home() {
  return (
    <div className="min-h-screen bg-transparent pt-2 md:pt-6">
      <div className="max-w-full mx-auto space-y-6">
        {/* Header */}
        <div className="space-y-1">
          <h1 className="text-xl md:text-3xl font-semibold text-black">
            Dashboard
          </h1>
          <p className="text-black/50 text-sm md:text-base">
            Welcome back! Here&apos;s what&apos;s happening with your restaurant
            today.
          </p>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dashboardMetrics.map((metric, index) => (
            <MetricsCard
              key={index}
              title={metric.title}
              value={metric.value}
              change={metric.change}
              changeType={metric.changeType}
            />
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
          <div className="col-span-1 lg:col-span-3 ">
            <WithdrawCard />
          </div>
          <div className="col-span-1 lg:col-span-4"></div>
        </div>
      </div>
    </div>
  );
}
