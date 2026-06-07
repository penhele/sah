"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { LayoutDashboard, LogOut, Wallet } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/constants/routes";

export function AppSidebar() {
  const router = useRouter();

  const items = [
    { Icon: LayoutDashboard, label: "Dashboard", href: ROUTES.HOME },
    { Icon: Wallet, label: "Saving", href: ROUTES.SAVING },
  ];

  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {items.map((item, index) => (
              <SidebarMenuItem key={index}>
                <SidebarMenuButton onClick={() => router.push(item.href)}>
                  <item.Icon />
                  {item.label}
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Button
                variant={"destructive"}
                onClick={() => router.push(ROUTES.LOGIN)}
              >
                Keluar
                <LogOut />
              </Button>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
