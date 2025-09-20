/** @format */

import Header from "@/components/common/header";
import AnalyticsCard from "@/components/analytics/analyticsCard";
import MenuItemsCard from "@/components/analytics/menuItemsCard";
import { analyticsData, menuItemsData } from "@/data/analyticsData";

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-transparent pt-2 md:pt-6">
      <div className="max-w-full mx-auto space-y-6">
        {/* Header without Search */}
        <Header
          title="Analytics"
          description="Track your restaurant's performance and financial metrics"
        />

        {/* Analytics Cards */}
        <div className="px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {analyticsData.map((metric, index) => (
              <AnalyticsCard key={index} metric={metric} />
            ))}
          </div>
        </div>

        <div className="px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <MenuItemsCard menuItems={menuItemsData} />
            </div>
            <div className="p-4 md:p-6 bg-white rounded-lg shadow"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
