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

import { Payment } from "@/types/paymentTypes";

interface PaymentDetailsModalProps {
  children: React.ReactNode;
  payment: Payment;
}

const PaymentDetailsModal: React.FC<PaymentDetailsModalProps> = ({
  children,
  payment,
}) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const formatAmount = (amount: number) => {
    return `$${amount.toFixed(2)}`;
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-4 relative">
          <DialogTitle className="text-center text-2xl md:text-3xl font-semibold text-gray-800">
            Payment Details
          </DialogTitle>
        </DialogHeader>

        <div className="px-6 pb-6 space-y-4">
          {/* Order ID */}
          <div className="flex justify-between items-center">
            <span className="text-gray-black font-medium text-base md:text-lg">
              Order ID:
            </span>
            <span className="text-black/70 text-sm md:text-base">
              #{payment.orderId}
            </span>
          </div>

          {/* Customer Name */}
          <div className="flex justify-between items-center">
            <span className="text-gray-black font-medium text-base md:text-lg">
              Name:
            </span>
            <span className="text-black/70 text-sm md:text-base">
              {payment.customerName}
            </span>
          </div>

          {/* Contact Number */}
          <div className="flex justify-between items-center">
            <span className="text-gray-black font-medium text-base md:text-lg">
              Contact Number:
            </span>
            <span className="text-black/70 text-sm md:text-base">
              {payment.contactNo}
            </span>
          </div>

          {/* Location */}
          <div className="flex justify-between items-start">
            <span className="text-gray-black font-medium text-base md:text-lg">
              Location:
            </span>
            <span className="text-black/70 text-sm md:text-base text-right flex-1 ml-4">
              {payment.location}
            </span>
          </div>

          {/* Date */}
          <div className="flex justify-between items-center">
            <span className="text-gray-black font-medium text-base md:text-lg">
              Date:
            </span>
            <span className="text-black/70 text-sm md:text-base">
              {formatDate(payment.date)}
            </span>
          </div>

          {/* Payment Method */}
          <div className="flex justify-between items-center">
            <span className="text-gray-black font-medium text-base md:text-lg">
              Payment Method:
            </span>
            <span className="text-black/70 text-sm md:text-base">
              {payment.paymentMethod}
            </span>
          </div>

          {/* Total Amount */}
          <div className="flex justify-between items-center border-t pt-4">
            <span className="text-gray-black font-medium text-base md:text-lg">
              Total Amount:
            </span>
            <span className="text-black/70 text-sm md:text-base">
              {formatAmount(payment.amount)}
            </span>
          </div>

          {/* Admin Commission */}
          <div className="flex justify-between items-center">
            <span className="text-gray-black font-medium text-base md:text-lg">
              Admin Commission:
            </span>
            <span className="text-black/70 text-sm md:text-base">
              {formatAmount(payment.adminCommission)}
            </span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentDetailsModal;
