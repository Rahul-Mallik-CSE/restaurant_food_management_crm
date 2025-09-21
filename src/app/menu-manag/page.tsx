/** @format */

import Header from "@/components/common/header";
import FoodMenu from "@/components/menuManag/foodMenu";

export default function MenuManagementPage() {
  return (
    <div className="min-h-screen bg-transparent pt-2 md:pt-6">
      <div className="max-w-full mx-auto space-y-2">
        {/* Header */}
        <Header
          title="Menu Management"
          showSearch={true}
          description="Manage your restaurant's menu items and categories"
        />

        {/* Food Menu Component */}

        <FoodMenu />
      </div>
    </div>
  );
}
