/** @format */

import React, { useState } from "react";
import { Eye, Info, Trash2 } from "lucide-react";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { TableColumn, TableProps } from "@/types/commonTypes";

const CustomTable: React.FC<TableProps> = ({
  columns,
  data,
  actions = [],
  itemsPerPage = 10,
  showPagination = true,
  headerColor = "bg-red-500",
  statusColors = {
    Accepted: "bg-blue-100 text-blue-800",
    Pending: "bg-yellow-100 text-yellow-800",
    Shipping: "bg-purple-100 text-purple-800",
    Delivered: "bg-green-100 text-green-800",
    Cancelled: "bg-red-100 text-red-800",
    Preparing: "bg-orange-100 text-orange-800",
    Successful: "bg-green-100 text-green-800",
  },
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const formatValue = (value: unknown, column: TableColumn) => {
    if (column.type === "amount" && typeof value === "number") {
      return `$${value.toFixed(2)}`;
    }
    if (column.type === "amount" && typeof value === "string") {
      return value;
    }
    return value;
  };

  const renderCell = (row: Record<string, unknown>, column: TableColumn) => {
    const value = row[column.key];

    switch (column.type) {
      case "image":
        return (
          <div className="flex items-center gap-2">
            <Image
              src={(row.profileImage as string) || "/api/placeholder/40/40"}
              alt="Profile"
              width={32}
              height={32}
              className="rounded-full object-cover bg-gray-200"
            />
            <span className="font-medium text-gray-900">
              {(row.customerName as string) || (value as string)}
            </span>
          </div>
        );

      case "status":
        return (
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              statusColors[value as string] || "bg-gray-100 text-gray-800"
            }`}
          >
            {value as string}
          </span>
        );

      case "amount":
        return (
          <span className="font-semibold text-gray-900">
            {formatValue(value, column) as string}
          </span>
        );

      case "action":
        return (
          <div className="flex items-center gap-2">
            {actions.map((action, index) => (
              <button
                key={index}
                onClick={() => action.onClick(row)}
                className="p-1.5 rounded-full hover:bg-gray-100 transition-colors"
                title={
                  action.type === "view"
                    ? "View"
                    : action.type === "delete"
                    ? "Delete"
                    : "Receipt"
                }
              >
                {action.type === "view" && (
                  <Info className="w-4 h-4 text-gray-600" />
                )}
                {action.type === "delete" && (
                  <Trash2 className="w-4 h-4 text-gray-600" />
                )}
                {action.type === "receipt" && (
                  <div className="w-4 h-4 text-gray-600">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,4.11 20.1,3 19,3M19,19H5V5H19V19Z" />
                    </svg>
                  </div>
                )}
              </button>
            ))}
          </div>
        );

      default:
        return (
          <span className="text-gray-900">
            {formatValue(value, column) as string}
          </span>
        );
    }
  };

  const renderPagination = () => {
    if (!showPagination || totalPages <= 1) return null;

    const getVisiblePages = () => {
      const pages = [];
      const maxVisible = 3;

      if (totalPages <= maxVisible + 2) {
        for (let i = 1; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        if (currentPage <= maxVisible) {
          for (let i = 1; i <= maxVisible + 1; i++) {
            pages.push(i);
          }
        } else if (currentPage >= totalPages - maxVisible + 1) {
          for (let i = totalPages - maxVisible; i <= totalPages; i++) {
            pages.push(i);
          }
        } else {
          pages.push(currentPage - 1, currentPage, currentPage + 1);
        }
      }
      return pages;
    };

    const visiblePages = getVisiblePages();
    const showStartEllipsis = visiblePages[0] > 2;
    const showEndEllipsis =
      visiblePages[visiblePages.length - 1] < totalPages - 1;

    return (
      <div className="mt-4 py-4">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                className={
                  currentPage === 1
                    ? "pointer-events-none opacity-50"
                    : "cursor-pointer"
                }
              />
            </PaginationItem>

            {visiblePages[0] > 1 && (
              <PaginationItem>
                <PaginationLink
                  onClick={() => setCurrentPage(1)}
                  className="cursor-pointer"
                >
                  1
                </PaginationLink>
              </PaginationItem>
            )}

            {showStartEllipsis && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}

            {visiblePages.map((pageNum) => (
              <PaginationItem key={pageNum}>
                <PaginationLink
                  onClick={() => setCurrentPage(pageNum)}
                  isActive={currentPage === pageNum}
                  className={`cursor-pointer ${
                    currentPage === pageNum
                      ? "bg-red-100 text-red-600 border border-red-500"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {pageNum}
                </PaginationLink>
              </PaginationItem>
            ))}

            {showEndEllipsis && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}

            {visiblePages[visiblePages.length - 1] < totalPages && (
              <PaginationItem>
                <PaginationLink
                  onClick={() => setCurrentPage(totalPages)}
                  className="cursor-pointer"
                >
                  {totalPages}
                </PaginationLink>
              </PaginationItem>
            )}

            <PaginationItem>
              <PaginationNext
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                className={
                  currentPage === totalPages
                    ? "pointer-events-none opacity-50"
                    : "cursor-pointer"
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    );
  };

  return (
    <div className="w-full">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-x-auto">
        <Table className="w-full mx-0 ">
          <TableHeader className={`${headerColor} text-white`}>
            <TableRow>
              {columns.map((column) => (
                <TableHead
                  key={column.key}
                  className="text-white font-medium py-5"
                  style={column.width ? { width: column.width } : {}}
                >
                  {column.label}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentData.map((row, index) => (
              <TableRow
                key={index}
                className="hover:bg-gray-50 transition-colors"
              >
                {columns.map((column) => (
                  <TableCell
                    key={column.key}
                    className="py-3 text-base md:text-lg"
                  >
                    {renderCell(row, column)}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {renderPagination()}
      </div>
    </div>
  );
};

export default CustomTable;
