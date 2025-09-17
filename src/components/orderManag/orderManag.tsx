/** @format */

"use client";

import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import OrderCard from "./orderCard";
import { Order, OrderStatus } from "@/types/orderManagTypes";
import { orderManagementData } from "@/data/orderManagData";
import { Button } from "../ui/button";

interface OrderManagementProps {
  searchTerm?: string;
}

const OrderManagement: React.FC<OrderManagementProps> = ({
  searchTerm = "",
}) => {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [orders, setOrders] = useState<Order[]>(orderManagementData);

  // Filter orders based on search term
  const filteredOrders = orders.filter(
    (order) =>
      order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.contactNo.includes(searchTerm) ||
      order.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Get filtered orders by status
  const getFilteredOrders = () => {
    if (activeTab === "all") {
      return filteredOrders;
    }
    return filteredOrders.filter(
      (order) => order.status.toLowerCase() === activeTab.toLowerCase()
    );
  };

  // Handle status change
  const handleStatusChange = (orderId: string, newStatus: OrderStatus) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  return (
    <div className="w-full">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="flex justify-between items-center mb-6 p-3 rounded-sm border border-gray-300">
          <TabsList className="bg-gray-100 p-1 rounded-lg inline-flex gap-3">
            <TabsTrigger
              value="all"
              className="px-6 py-4 border border-gray-300 rounded-sm text-sm font-medium transition-all data-[state=active]:bg-black data-[state=active]:text-white data-[state=inactive]:text-gray-600 data-[state=inactive]:bg-transparent hover:text-white hover:bg-black/40 cursor-pointer"
            >
              All Orders
            </TabsTrigger>
            <TabsTrigger
              value="pending"
              className="px-6 py-4 border border-gray-300 rounded-sm text-sm font-medium transition-all data-[state=active]:bg-black data-[state=active]:text-white data-[state=inactive]:text-gray-600 data-[state=inactive]:bg-transparent hover:text-white hover:bg-black/40 cursor-pointer"
            >
              Pending
            </TabsTrigger>
            <TabsTrigger
              value="preparing"
              className="px-6 py-4 border border-gray-300 rounded-sm text-sm font-medium transition-all data-[state=active]:bg-black data-[state=active]:text-white data-[state=inactive]:text-gray-600 data-[state=inactive]:bg-transparent hover:text-white hover:bg-black/40 cursor-pointer"
            >
              Preparing
            </TabsTrigger>
            <TabsTrigger
              value="ready"
              className="px-6 py-4 border border-gray-300 rounded-sm text-sm font-medium transition-all data-[state=active]:bg-black data-[state=active]:text-white data-[state=inactive]:text-gray-600 data-[state=inactive]:bg-transparent hover:text-white hover:bg-black/40 cursor-pointer"
            >
              Ready
            </TabsTrigger>
            <TabsTrigger
              value="delivered"
              className="px-6 py-4 border border-gray-300 rounded-sm text-sm font-medium transition-all data-[state=active]:bg-black data-[state=active]:text-white data-[state=inactive]:text-gray-600 data-[state=inactive]:bg-transparent hover:text-white hover:bg-black/40 cursor-pointer"
            >
              Delivered
            </TabsTrigger>
            <TabsTrigger
              value="cancelled"
              className="px-6 py-4 border border-gray-300 rounded-sm text-sm font-medium transition-all data-[state=active]:bg-black data-[state=active]:text-white data-[state=inactive]:text-gray-600 data-[state=inactive]:bg-transparent hover:text-white hover:bg-black/40 cursor-pointer"
            >
              Cancelled
            </TabsTrigger>
          </TabsList>
          <Button variant="outline" size="sm" className="px-4 py-2">
            Today ▼
          </Button>
        </div>

        <ScrollArea className="h-[calc(100vh-300px)]">
          <TabsContent value="all" className="space-y-4">
            {getFilteredOrders().map((order) => (
              <OrderCard
                key={order.id}
                order={order}
                onStatusChange={handleStatusChange}
              />
            ))}
          </TabsContent>

          <TabsContent value="pending" className="space-y-4">
            {getFilteredOrders().map((order) => (
              <OrderCard
                key={order.id}
                order={order}
                onStatusChange={handleStatusChange}
              />
            ))}
          </TabsContent>

          <TabsContent value="preparing" className="space-y-4">
            {getFilteredOrders().map((order) => (
              <OrderCard
                key={order.id}
                order={order}
                onStatusChange={handleStatusChange}
              />
            ))}
          </TabsContent>

          <TabsContent value="ready" className="space-y-4">
            {getFilteredOrders().map((order) => (
              <OrderCard
                key={order.id}
                order={order}
                onStatusChange={handleStatusChange}
              />
            ))}
          </TabsContent>

          <TabsContent value="delivered" className="space-y-4">
            {getFilteredOrders().map((order) => (
              <OrderCard
                key={order.id}
                order={order}
                onStatusChange={handleStatusChange}
              />
            ))}
          </TabsContent>

          <TabsContent value="cancelled" className="space-y-4">
            {getFilteredOrders().map((order) => (
              <OrderCard
                key={order.id}
                order={order}
                onStatusChange={handleStatusChange}
              />
            ))}
          </TabsContent>
        </ScrollArea>
      </Tabs>
    </div>
  );
};

export default OrderManagement;
