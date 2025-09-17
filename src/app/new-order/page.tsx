/** @format */

import Header from "@/components/common/header";

export default function NewOrderPage() {
  return (
    <div className="min-h-screen bg-transparent pt-2 md:pt-6">
      <div className="max-w-full mx-auto space-y-6">
        {/* Header */}
        <Header
          title="Order Management"
          description="Manage your restaurant’s food items and categories."
        />
      </div>
    </div>
  );
}
