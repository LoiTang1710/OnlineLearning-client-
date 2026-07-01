"use client";

import { type LucideIcon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

type NavItem = {
  title: string;
  url: string;
  icon: LucideIcon;
};

export function NavMain({ items }: { items: NavItem[] }) {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <SidebarGroup>
      <SidebarMenu className="gap-2 flex flex-col group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:items-center">
        {items.map((item) => {
          // So sánh URL hiện tại với URL của item
          const isActive = item.url === pathname;

          return (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                tooltip={item.title}
                className={`h-12 rounded transition-all ${
                  isActive
                    ? "bg-primary/10 text-primary font-bold relative overflow-hidden"
                    : "bg-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100 font-medium"
                }`}
              >
                <Link
                  to={item.url}
                  className="flex items-center gap-3 w-full group-data-[collapsible=icon]:justify-center"
                >
                  <item.icon
                    className="w-5 h-5 shrink-0"
                    strokeWidth={isActive ? 2.5 : 2}
                  />
                  <span className="text-[15px] bg-transparent group-data-[collapsible=icon]:hidden">
                    {item.title}
                  </span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
