/** @format */

import Header from "@/components/common/header";
import CustomTable from "@/components/common/customTable";
import { getAllRiderOrders } from "@/data/riderManagData";

export default function RiderManagementPage() {
  // Define table columns for rider orders
  const columns = [
    { key: "orderId", label: "Order ID", type: "text" as const },
    { key: "customerName", label: "Customer Name", type: "image" as const },
    { key: "location", label: "Location", type: "text" as const },
    {
      key: "riderName",
      label: "Rider Name",
      type: "image" as const,
      width: "200px",
    },
    { key: "status", label: "status", type: "status" as const },
    {
      key: "actions",
      label: "Action",
      type: "action" as const,
      width: "120px",
    },
  ];

  // Convert RiderOrder[] to Record<string, unknown>[] for table compatibility
  const tableData = getAllRiderOrders().map((order) => ({
    ...order,
    // Use customerImage for customer name column and riderImage for rider name column
    profileImage: order.customerImage,
    actions: "view", // Add actions field for the table
  })) as Record<string, unknown>[];

  return (
    <div className="min-h-screen bg-transparent pt-2 md:pt-6">
      <div className="max-w-full mx-auto space-y-6">
        {/* Header without Search */}
        <Header
          title="Rider Assign"
          description="Manage your riders and delivery assignments"
        />

        {/* Custom Table */}
        <div className="px-4 md:px-6">
          <CustomTable
            data={tableData}
            columns={columns}
            actions={[]} // No actions needed since handled internally
          />
        </div>
      </div>
    </div>
  );
}
