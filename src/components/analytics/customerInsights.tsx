/** @format */

"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Progress } from "@/components/ui/progress";
import { CustomerInsightsData } from "@/types/analyticsTypes";

interface CustomerInsightsProps {
  data: CustomerInsightsData;
}

export default function CustomerInsights({ data }: CustomerInsightsProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 max-h-[900px]">
      <div className="mb-6">
        <h3 className="text-lg md:text-xl font-semibold text-black">
          Customer Insights
        </h3>
        <p className="text-sm md:text-base text-gray-500">
          Customer demographics and ordering patterns
        </p>
      </div>

      {/* Donut Chart Section */}
      <div className="mb-8">
        <div className="flex items-center justify-center mb-4">
          <div className="w-48 h-48">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data.customerTypes}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={5}
                  dataKey="value"
                  strokeWidth={0}
                >
                  {data.customerTypes.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart Legend */}
        <div className="flex items-center justify-center gap-6">
          {data.customerTypes.map((type, index) => (
            <div key={index} className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: type.color }}
              />
              <span className="text-sm text-gray-600">
                {type.name} ({type.percentage}%)
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Order Time Analysis */}
      <div>
        <h4 className="text-base font-semibold text-gray-900 mb-4">
          Pick Order Time
        </h4>
        <div className="space-y-4">
          {data.orderTimes.map((time, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center w-full">
                <span className="text-sm w-28 font-medium text-gray-700">
                  {time.name}
                </span>
                <div className="flex justify-between w-full">
                  <Progress
                    value={time.percentage}
                    className="h-2.5 max-w-72 text-left"
                  />
                  <span className="text-sm text-gray-600 w-28 text-right">
                    {time.orders} orders
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
