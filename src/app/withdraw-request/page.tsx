/** @format */

"use client";

import Header from "@/components/common/header";
import CustomTable from "@/components/common/customTable";
import { getAllWithdraws } from "@/data/widthdrawRequestData";

export default function WithdrawRequestPage() {
  // Define table columns for withdraw requests
  const columns = [
    { key: "withdrawId", label: "Withdraw ID", type: "text" as const },
    { key: "date", label: "Date", type: "text" as const },
    { key: "withdrawMethod", label: "Method", type: "text" as const },
    { key: "amount", label: "Amount", type: "amount" as const },
    { key: "status", label: "Status", type: "status" as const },
    {
      key: "actions",
      label: "Actions",
      type: "action" as const,
      width: "120px",
    },
  ];

  // Define actions for each row - empty since we handle withdraw actions internally
  const actions: never[] = [];

  // Convert WithdrawRequest[] to Record<string, unknown>[] for table compatibility
  const tableData = getAllWithdraws().map((withdraw) => ({
    ...withdraw,
    actions: "view", // Add actions field for the table
  })) as Record<string, unknown>[];

  return (
    <div className="min-h-screen bg-transparent pt-2 md:pt-6">
      <div className="max-w-full mx-auto space-y-6">
        {/* Header with Search */}
        <Header
          title="Withdraw Request Management"
          description="Track and manage all your withdrawal requests in one place"
        />

        {/* Custom Table */}
        <div className="px-4 md:px-6">
          <CustomTable data={tableData} columns={columns} actions={actions} />
        </div>
      </div>
    </div>
  );
}
