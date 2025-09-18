/** @format */

"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { RiderOrder } from "@/types/riderManagTypes";
import Image from "next/image";

interface DeliveryDetailsModalProps {
  children: React.ReactNode;
  orderData: RiderOrder;
}

export const DeliveryDetailsModal: React.FC<DeliveryDetailsModalProps> = ({
  children,
  orderData,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-md mx-auto bg-white">
        <DialogHeader>
          <DialogTitle className="text-xl md:text-2xl font-bold text-gray-800 text-center ">
            Delivery Details
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-1 pb-2">
          {/* Order Details Section */}
          <div className="space-y-0">
            <div className="flex justify-between">
              <span className="text-black text-xs md:text-sm font-medium">
                Order ID:
              </span>
              <span className="text-xs md:text-sm text-gray-600">
                {orderData.orderId}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-black text-xs md:text-sm font-medium">
                Name:
              </span>
              <span className="text-xs md:text-sm text-gray-600">
                {orderData.customerName}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-black text-xs md:text-sm font-medium">
                Contact Number:
              </span>
              <span className="text-xs md:text-sm text-gray-600">
                {orderData.contactNumber}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-black text-xs md:text-sm font-medium">
                Location:
              </span>
              <span className="text-xs md:text-sm text-gray-600 text-right max-w-xs">
                {orderData.location}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-black text-xs md:text-sm font-medium">
                Date:
              </span>
              <span className="text-xs md:text-sm text-gray-600">
                {orderData.date}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-black text-xs md:text-sm font-medium">
                Estimate Delivery Time:
              </span>
              <span className="text-xs md:text-sm text-gray-600">
                {orderData.estimateDeliveryTime}
              </span>
            </div>
          </div>

          {/* Food List Section */}
          <div className="mt-2">
            <h4 className="text-black text-xs md:text-sm font-medium mb-1">
              Food List:
            </h4>
            <div className="space-y-0">
              {orderData.foodList?.map((item, index) => (
                <div key={index} className="flex justify-between text-sm">
                  <span>
                    {item.item} - {item.quantity}x
                  </span>
                  <span>${item.price.toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 pt-0 mt-1">
              <div className="text-black text-xs md:text-sm font-medium w-full flex justify-between">
                <span>Total</span>
                <span>${orderData.total?.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Rider Information Section */}
          <div className="mt-2">
            <h4 className="text-black text-xs md:text-sm font-medium mb-1">
              Rider Information
            </h4>
            <div className="space-y-0">
              <div className="flex justify-between">
                <span className="text-black text-xs md:text-sm font-medium">
                  user Id:
                </span>
                <span className="text-xs md:text-sm text-gray-600">
                  {orderData.riderId}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-black text-xs md:text-sm font-medium">
                  Name:
                </span>
                <span className="text-xs md:text-sm text-gray-600">
                  {orderData.riderName}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-black text-xs md:text-sm font-medium">
                  Contact Number:
                </span>
                <span className="text-xs md:text-sm text-gray-600">
                  {orderData.riderContactNumber}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-black text-xs md:text-sm font-medium">
                  Status:
                </span>
                <span
                  className={`font-semibold ${
                    orderData.status === "Delivered"
                      ? "text-green-600"
                      : orderData.status === "Pickup"
                      ? "text-yellow-600"
                      : "text-blue-600"
                  }`}
                >
                  {orderData.status}
                </span>
              </div>
            </div>
          </div>

          {/* Receipt Image */}
          <div className="mt-3 flex justify-center ">
            <div className="w-1/2 bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-4">
              <Image src="/JVAI.jpg" alt="Receipt" width={200} height={200} />
            </div>
          </div>

          {/* Download Button */}
          <div className="mt-4">
            <Button
              className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg flex items-center justify-center gap-2"
              onClick={() => {
                console.log("Download receipt for:", orderData.orderId);
              }}
            >
              Download
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
