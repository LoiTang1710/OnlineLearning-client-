import * as React from "react";
import {
  LayoutGrid,
  GraduationCap,
  Sparkles,
  BrainCircuit,
  Users,
  Settings,
  CircleHelp,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";

import { NavMain } from "@/components/NavMain.tsx";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";

const data = {
  mainNav: [
    { title: "Trang chủ", url: "/", icon: LayoutGrid },
    { title: "Khoá học", url: "/course", icon: GraduationCap },
    { title: "Chatbot", url: "/pattern", icon: Sparkles },
    { title: "Lập kế hoạch với AI", url: "/planner", icon: BrainCircuit },
    { title: "Cộng đồng", url: "/community", icon: Users },
  ],
  footerNav: [
    { title: "Settings", url: "/settings", icon: Settings },
    { title: "Support", url: "/support", icon: CircleHelp },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { toggleSidebar } = useSidebar();

  return (
    <Sidebar
      collapsible="icon"
      className="border-r border-slate-200 bg-white"
      {...props}
    >
      <SidebarHeader className="pt-6 pb-4 px-4 group-data-[collapsible=icon]:p-2 group-data-[collapsible=icon]:pt-6">
        {/* ĐỔI LOGIC FLEX Ở ĐÂY: Dùng flex-col và items-center khi thu nhỏ */}
        <div className="flex items-center justify-between group-data-[collapsible=icon]:flex-col group-data-[collapsible=icon]:items-center group-data-[collapsible=icon]:gap-4">
          {/* LOGO BOX: Đã bỏ class hidden ở thẻ cha này */}
          <div className="flex items-center gap-3">
            <div className="bg-primary p-2 rounded-lg flex items-center justify-center shadow-sm shrink-0">
              <GraduationCap
                className="w-5 h-5 text-white bg-transparent"
                strokeWidth={2.5}
              />
            </div>
            {/* CHỈ ẨN PHẦN TEXT NÀY KHI THU NHỎ */}
            <div className="flex flex-col group-data-[collapsible=icon]:hidden">
              <span className="font-extrabold text-[20px] text-primary tracking-tight leading-none">
                QLCamp
              </span>
            </div>
          </div>

          {/* NÚT TOGGLE */}
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors shrink-0 group-data-[collapsible=icon]:bg-primary/10 group-data-[collapsible=icon]:text-primary"
            title="Đóng/Mở Sidebar"
          >
            <PanelLeftClose className="w-5 h-5 group-data-[collapsible=icon]:hidden" />
            <PanelLeftOpen className="w-5 h-5 hidden group-data-[collapsible=icon]:block" />
          </button>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-3 group-data-[collapsible=icon]:px-2">
        <NavMain items={data.mainNav} />
      </SidebarContent>

      <SidebarFooter className="px-3 pb-6 group-data-[collapsible=icon]:px-2">
        <div className="h-px bg-slate-200 w-auto mx-4 mb-4 group-data-[collapsible=icon]:mx-0" />
        <NavMain items={data.footerNav} />
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
