/** @format */

"use client";

import type React from "react";

import Link from "next/link";
import {
  LayoutGrid,
  BookText,
  BadgePercent,
  ClipboardClock,
  Bike,
  Settings,
  ShoppingBag,
  Plus,
  List,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { GoCreditCard } from "react-icons/go";
import { TbMessage2Dollar } from "react-icons/tb";
import { MdInsertChartOutlined } from "react-icons/md";
import { cn } from "@/lib/utils";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import LogoutModal from "./logout-modal";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";

// import { logout } from "@/service/authService";
export default function DashboardSidebar() {
  return <DashboardSidebarContent />;
}

function DashboardSidebarContent() {
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [isOrdersExpanded, setIsOrdersExpanded] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const { state } = useSidebar();

  const handleLogout = async () => {
    // Perform logout actions here (clear tokens, etc.)
    // Redirect to login page
    // await logout();
    // localStorage.removeItem("accessToken");
    router.push("/signin");
  };

  // Auto-expand orders menu when on orders-related pages
  useEffect(() => {
    if (pathname.startsWith("/orders") || pathname.startsWith("/new-order")) {
      setIsOrdersExpanded(true);
    }
  }, [pathname]);

  if (
    pathname === "/signIn" ||
    pathname === "/signUp" ||
    pathname === "/forget-pass" ||
    pathname === "/verify-password" ||
    pathname === "/verify-otp" ||
    pathname === "/reset-pass"
  ) {
    return null;
  }

  const isCollapsed = state === "collapsed";

  return (
    <>
      {/* Mobile menu button */}
      <div className="fixed top-4 left-4 z-40 md:hidden">
        <SidebarTrigger />
      </div>
      <Sidebar
        className="border-r-0 border-transparent !bg-[#F2F6FF]"
        collapsible="icon"
      >
        <SidebarContent>
          <div
            className={`flex items-center justify-center px-2 py-6 relative ${
              isCollapsed ? "px-2" : "gap-2"
            }`}
          >
            <Link href="/">
              {isCollapsed ? (
                <Image
                  src="/food-icon-mini.png"
                  alt="logo"
                  width={isCollapsed ? 40 : 140}
                  height={isCollapsed ? 40 : 140}
                  className={"h-5 w-5"}
                />
              ) : (
                <Image
                  src="/food-icon.png"
                  alt="logo"
                  width={isCollapsed ? 40 : 140}
                  height={isCollapsed ? 40 : 140}
                  className={"h-10 w-16"}
                />
              )}
            </Link>
            {/* Collapse button for desktop */}
            <div
              className={`absolute top-1 hidden md:block ${
                isCollapsed ? "right-0" : "right-0"
              }`}
            >
              <SidebarTrigger />
            </div>
          </div>

          <SidebarMenu
            className={
              isCollapsed ? "px-2 space-y-2 items-center" : "px-6 space-y-1"
            }
          >
            <NavItem
              href="/"
              icon={LayoutGrid}
              label="Dashboard"
              active={pathname === "/"}
              collapsed={isCollapsed}
            />

            {/* Orders Management Collapsible Section */}
            {!isCollapsed ? (
              <Collapsible
                open={isOrdersExpanded}
                onOpenChange={setIsOrdersExpanded}
              >
                <CollapsibleTrigger asChild>
                  <Button
                    className={cn(
                      "flex w-full items-center gap-3 px-0 py-0.5 transition-colors rounded-md hover:bg-transparent hover:text-custom-red",
                      pathname.startsWith("/orders") ||
                        pathname.startsWith("/new-order") ||
                        pathname.startsWith("/order-list")
                        ? "bg-transparent text-custom-red hover:!bg-transparent hover:!text-custom-red"
                        : "bg-transparent text-black hover:!bg-transparent hover:!text-custom-red"
                    )}
                  >
                    <ShoppingBag size={18} />
                    <span className="text-base flex-1 text-left">
                      Orders Manag.
                    </span>
                    {isOrdersExpanded ? (
                      <ChevronDown size={16} />
                    ) : (
                      <ChevronRight size={16} />
                    )}
                  </Button>
                </CollapsibleTrigger>

                <CollapsibleContent className="ml-4 space-y-1 pt-2 ">
                  <NavItem
                    href="/new-order"
                    icon={Plus}
                    label="New Order"
                    active={
                      pathname.startsWith("/orders") ||
                      pathname.startsWith("/new-order")
                    }
                    collapsed={isCollapsed}
                  />

                  <NavItem
                    href="/order-list"
                    icon={List}
                    label="Order list"
                    active={
                      pathname.startsWith("/orders") ||
                      pathname.startsWith("/order-list")
                    }
                    collapsed={isCollapsed}
                  />
                </CollapsibleContent>
              </Collapsible>
            ) : (
              /* Collapsed state - show just the orders icon */
              <>
                <NavItem
                  href="/new-order"
                  icon={Plus}
                  label="New Order"
                  active={
                    pathname.startsWith("/orders") ||
                    pathname.startsWith("/new-order")
                  }
                  collapsed={isCollapsed}
                />

                <NavItem
                  href="/order-list"
                  icon={List}
                  label="Order list"
                  active={
                    pathname.startsWith("/orders") ||
                    pathname.startsWith("/order-list")
                  }
                  collapsed={isCollapsed}
                />
              </>
            )}

            <NavItem
              href="/menu-manag"
              icon={BookText}
              label="Menu Manag."
              active={
                pathname === "/menu-manag" || pathname.startsWith("/menu-manag")
              }
              collapsed={isCollapsed}
            />

            <NavItem
              href="/promotion"
              icon={BadgePercent}
              label="Promotion"
              active={
                pathname === "/promotion" || pathname.startsWith("/promotion")
              }
              collapsed={isCollapsed}
            />
            <NavItem
              href="/payment"
              icon={GoCreditCard}
              label="Payment"
              active={
                pathname === "/payment" || pathname.startsWith("/payment")
              }
              collapsed={isCollapsed}
            />
            <NavItem
              href="/withdraw-request"
              icon={TbMessage2Dollar}
              label="Withdraw Request"
              active={
                pathname === "/withdraw-request" ||
                pathname.startsWith("/withdraw-request")
              }
              collapsed={isCollapsed}
            />
            <NavItem
              href="/schedule"
              icon={ClipboardClock}
              label="Schedule"
              active={
                pathname === "/schedule" || pathname.startsWith("/schedule")
              }
              collapsed={isCollapsed}
            />
            <NavItem
              href="/rider-manag"
              icon={Bike}
              label="Rider Manag."
              active={
                pathname === "/rider-manag" ||
                pathname.startsWith("/rider-manag")
              }
              collapsed={isCollapsed}
            />
            <NavItem
              href="/analytics"
              icon={MdInsertChartOutlined}
              label="Analytics"
              active={
                pathname === "/analytics" || pathname.startsWith("/analytics")
              }
              collapsed={isCollapsed}
            />
            <NavItem
              href="/settings"
              icon={Settings}
              label="Settings"
              active={
                pathname === "/settings" || pathname.startsWith("/settings")
              }
              collapsed={isCollapsed}
            />
          </SidebarMenu>
        </SidebarContent>

        {!isCollapsed ? (
          <SidebarFooter className="p-6">
            <Button
              onClick={() => setIsLogoutModalOpen(true)}
              className="flex justify-center w-32 items-center gap-3  px-4 py-3 bg-red-500 text-white hover:bg-red-600 rounded-lg"
            >
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.4 7.56023C9.71 3.96023 11.56 2.49023 15.61 2.49023H15.74C20.21 2.49023 22 4.28023 22 8.75023V15.2702C22 19.7402 20.21 21.5302 15.74 21.5302H15.61C11.59 21.5302 9.74 20.0802 9.41 16.5402"
                  stroke="#4F3E19"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.5 12H4.12"
                  stroke="#4F3E19"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.35 8.65039L3 12.0004L6.35 15.3504"
                  stroke="#4F3E19"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className="text-white text-lg font-semibold">Log out</span>
            </Button>
          </SidebarFooter>
        ) : (
          <SidebarFooter className="p-6">
            <Button
              onClick={() => setIsLogoutModalOpen(true)}
              className="flex justify-center items-center gap-3  px-4 py-1 bg-transparent  text-white hover:bg-red-200 rounded-lg"
            >
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.4 7.56023C9.71 3.96023 11.56 2.49023 15.61 2.49023H15.74C20.21 2.49023 22 4.28023 22 8.75023V15.2702C22 19.7402 20.21 21.5302 15.74 21.5302H15.61C11.59 21.5302 9.74 20.0802 9.41 16.5402"
                  stroke="#4F3E19"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.5 12H4.12"
                  stroke="#4F3E19"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.35 8.65039L3 12.0004L6.35 15.3504"
                  stroke="#4F3E19"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
          </SidebarFooter>
        )}
      </Sidebar>
      <LogoutModal
        isOpen={isLogoutModalOpen}
        onClose={() => setIsLogoutModalOpen(false)}
        onConfirm={handleLogout}
      />
    </>
  );
}

// ...existing code...

interface NavItemProps {
  href: string;
  icon: React.ElementType;
  label: string;
  active: boolean;
  collapsed?: boolean;
}

function NavItem({
  href,
  icon: Icon,
  label,
  active,
  collapsed = false,
}: NavItemProps) {
  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild>
        <Link
          href={href}
          className={cn(
            collapsed
              ? "flex items-center justify-center px-2 py-3 transition-colors rounded-full w-12 h-12 mx-auto"
              : "flex items-center gap-3 px-4 py-3 transition-colors rounded-md",
            active
              ? "bg-custom-red/30 text-custom-red hover:!bg-custom-red/30 hover:!text-custom-red font-medium"
              : "bg-transparent text-black hover:!bg-custom-red/10 hover:!text-custom-red font-medium"
          )}
        >
          <Icon size={collapsed ? 20 : 18} />
          {!collapsed && <span className="text-base">{label}</span>}
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}
// ...existing code...
