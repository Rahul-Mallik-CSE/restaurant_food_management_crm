/** @format */

"use client";

import { useState } from "react";
import Header from "@/components/common/header";
import CustomTable from "@/components/common/customTable";
import { TableColumn } from "@/types/commonTypes";
import { paymentData } from "@/data/paymentData";

export default function PaymentPage() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter payments based on search term
  const filteredPayments = paymentData.filter(
    (payment) =>
      payment.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.orderId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.contactNo.includes(searchTerm) ||
      payment.paymentMethod.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Define table columns
  const columns: TableColumn[] = [
    { key: "orderId", label: "Order ID", type: "text", width: "12%" },
    { key: "date", label: "Date", type: "text", width: "12%" },
    {
      key: "customerName",
      label: "Customer Name",
      type: "image",
      width: "20%",
    },
    { key: "amount", label: "Amount", type: "amount", width: "12%" },
    {
      key: "adminCommission",
      label: "Admin Commission",
      type: "amount",
      width: "15%",
    },
    { key: "actions", label: "Action", type: "action", width: "10%" },
  ];

  // Define table actions
  const actions = [
    {
      type: "view" as const,
      onClick: (payment: Record<string, unknown>) => {
        console.log("View payment:", payment.id);
        // This will be handled by the modal trigger
      },
    },
  ];

  // Handle search change
  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
  };

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  // Transform payment data for table display
  const tableData = filteredPayments.map((payment) => ({
    ...payment,
    date: formatDate(payment.date),
    orderId: `#${payment.orderId}`,
    actions: "actions", // This will be handled by the action column
  }));

  return (
    <div className="min-h-screen bg-transparent pt-2 md:pt-6">
      <div className="max-w-full mx-auto space-y-6">
        {/* Header with Search */}
        <Header
          title="Payment Management"
          description="Track and manage all your payments in one place"
        />

        {/* Payments Table */}
        <div className="bg-white rounded-lg">
          <CustomTable
            columns={columns}
            data={tableData}
            actions={actions}
            itemsPerPage={10}
            showPagination={true}
            headerColor="bg-custom-red"
            statusColors={{
              Completed: "bg-green-100 text-green-800",
              Pending: "bg-yellow-100 text-yellow-800",
              Failed: "bg-red-100 text-red-800",
              Refunded: "bg-blue-100 text-blue-800",
            }}
          />
        </div>
      </div>
    </div>
  );
}
