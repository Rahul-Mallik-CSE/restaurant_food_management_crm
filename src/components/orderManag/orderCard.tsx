/** @format */

"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Phone, User } from "lucide-react";
import { OrderCardProps, Order } from "@/types/orderManagTypes";

const OrderCard: React.FC<OrderCardProps> = ({ order, onStatusChange }) => {
  // Get status-based styling
  const getStatusColor = (status: Order["status"]) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Preparing":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Ready":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "Delivered":
        return "bg-green-100 text-green-800 border-green-200";
      case "Cancelled":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getActionButtons = (status: Order["status"]) => {
    switch (status) {
      case "Pending":
        return (
          <div className="flex gap-2">
            <Button
              size="sm"
              className="bg-gray-800 hover:bg-gray-700 text-white"
              onClick={() => onStatusChange?.(order.id, "Preparing")}
            >
              Accept Order
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="text-red-600 border-red-200 hover:bg-red-50 bg-transparent"
              onClick={() => onStatusChange?.(order.id, "Cancelled")}
            >
              Reject
            </Button>
          </div>
        );
      case "Preparing":
        return (
          <div className="flex gap-2">
            <Button
              size="sm"
              className="bg-gray-800 hover:bg-gray-700 text-white"
              onClick={() => onStatusChange?.(order.id, "Ready")}
            >
              Ready for Pickup
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="text-red-600 border-red-200 hover:bg-red-50 bg-transparent"
              onClick={() => onStatusChange?.(order.id, "Cancelled")}
            >
              Cancel
            </Button>
          </div>
        );
      case "Ready":
        return (
          <div className="flex gap-2">
            <Button
              size="sm"
              className="bg-gray-800 hover:bg-gray-700 text-white"
              onClick={() => onStatusChange?.(order.id, "Delivered")}
            >
              Mark Delivered
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="text-red-600 border-red-200 hover:bg-red-50 bg-transparent"
              onClick={() => onStatusChange?.(order.id, "Cancelled")}
            >
              Cancel
            </Button>
          </div>
        );
      case "Delivered":
        return (
          <div className="flex gap-2">
            <Button
              size="sm"
              className="bg-gray-800 hover:bg-gray-700 text-white"
            >
              Download Receipt
            </Button>
          </div>
        );
      case "Cancelled":
        return null;
      default:
        return null;
    }
  };

  return (
    <div className="p-6 rounded-lg border bg-white shadow-sm hover:shadow-md transition-all duration-200">
      {/* Header with Order ID, Date and Status */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex w-full items-center justify-between ">
          <div className="flex flex-col md:flex-row items-center gap-1 md:gap-6 mb-1">
            <span className="font-semibold text-xs md:text-sm">
              Order ID: #{order.id}
            </span>
            <span className="text-black font-semibold text-xs md:text-sm">
              Date: {order.date}
            </span>
          </div>
          <span
            className={`px-3 py-1 text-xs font-medium rounded-sm w-20 text-center border ${getStatusColor(
              order.status
            )}`}
          >
            {order.status}
          </span>
        </div>
      </div>

      {/* Customer Info */}
      <div className="space-y-2 md:space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-sm md:text-base font-medium">
              {order.customerName
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
          </div>
          <div>
            <p className="font-medium text-gray-900">{order.customerName}</p>
          </div>
        </div>
        <div>
          <div className="text-sm md:text-base text-black/50">
            <div className="flex items-center gap-1">
              <strong>Contact Number:</strong>
              {order.contactNo}
            </div>
          </div>
          <div className="text-sm md:text-base text-black/50">
            <div className="flex items-center gap-1">
              <strong>Location:</strong> {order.location}
            </div>
          </div>
        </div>
      </div>

      {/* Order Items */}
      <div className="space-y-2">
        <h4 className="font-medium text-gray-900 mt-2">Order Items:</h4>
        {order.foodArray.map((item, index) => (
          <div
            key={index}
            className="flex justify-between text-xs md:text-sm text-black/50 font-medium"
          >
            <span>
              {item.name} x{item.quantity}
            </span>
            <span className="text-black text-sm md:text-base font-bold">
              ${(item.price * item.quantity).toFixed(2)}
            </span>
          </div>
        ))}
      </div>

      {/* Driver Information (if assigned) */}
      {order.assignedDriver && (
        <div className="mb-4 p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <User className="w-5 h-5 text-gray-500" />
              <div>
                <p className="font-medium text-gray-900">
                  {order.assignedDriver.name}
                </p>
                <p className="text-sm text-gray-600 flex items-center">
                  <Phone className="w-3 h-3 mr-1" />
                  {order.assignedDriver.phone}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">ETA</p>
              <p className="text-sm text-gray-600">
                {order.assignedDriver.eta}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Notes (if any) */}
      {order.notes && (
        <div className="mb-4 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-gray-700">
            <span className="font-medium text-blue-800">Notes:</span>{" "}
            {order.notes}
          </p>
        </div>
      )}

      {/* Footer with Actions and Total */}
      <div className="flex w-full justify-between items-center pt-4 border-t border-gray-300">
        <div></div>
        <div className="flex gap-2">{getActionButtons(order.status)}</div>
        <div className="text-right">
          <div className="text-xl font-bold text-gray-900">
            Total: ${order.totalPrice.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
