/** @format */

"use client";

import { useState } from "react";
import Header from "@/components/common/header";
import CustomTable from "@/components/common/customTable";
import { TableColumn } from "@/types/commonTypes";
import { orderManagementData } from "@/data/orderManagData";

export default function OrderListPage() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter orders based on search term
  const filteredOrders = orderManagementData.filter(
    (order) =>
      order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.contactNo.includes(searchTerm) ||
      order.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Define table columns
  const columns: TableColumn[] = [
    { key: "id", label: "Order ID", type: "text", width: "10%" },
    { key: "date", label: "Date", type: "text", width: "12%" },
    {
      key: "customerName",
      label: "Customer Name",
      type: "image",
      width: "20%",
    },
    { key: "totalPrice", label: "Amount", type: "amount", width: "10%" },
    { key: "status", label: "Status", type: "status", width: "12%" },
    { key: "actions", label: "Action", type: "action", width: "10%" },
  ];

  // Define table actions
  const actions = [
    {
      type: "view" as const,
      onClick: (order: Record<string, unknown>) => {
        console.log("View order:", order.id);
        // Add your view logic here
      },
    },
    {
      type: "delete" as const,
      onClick: (order: Record<string, unknown>) => {
        console.log("Delete order:", order.id);
        // Add your delete logic here
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

  // Transform order data for table display
  const tableData = filteredOrders.map((order) => ({
    ...order,
    date: formatDate(order.date),
    actions: "actions", // This will be handled by the action column
  }));

  return (
    <div className="min-h-screen bg-transparent pt-2 md:pt-6">
      <div className="max-w-full mx-auto space-y-6">
        {/* Header with Search */}
        <Header
          title="Order Management"
          description="Manage your restaurant's orders and track their status"
          showSearch={true}
          searchPlaceholder="Search orders, customers, or order IDs..."
          onSearchChange={handleSearchChange}
        />

        {/* Orders Table */}
        <div className="bg-white rounded-lg ">
          <CustomTable
            columns={columns}
            data={tableData}
            actions={actions}
            itemsPerPage={10}
            showPagination={true}
            headerColor="bg-custom-red"
            statusColors={{
              Accepted: "bg-blue-100 text-blue-800",
              Pending: "bg-yellow-100 text-yellow-800",
              Shipping: "bg-purple-100 text-purple-800",
              Delivered: "bg-green-100 text-green-800",
              Cancelled: "bg-red-100 text-red-800",
              Preparing: "bg-orange-100 text-orange-800",
            }}
          />
        </div>
      </div>
    </div>
  );
}
