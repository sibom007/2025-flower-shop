import { Settings } from "lucide-react";
import { FaUserSlash } from "react-icons/fa";
import { PiFlowerBold } from "react-icons/pi";
import { RiProfileLine } from "react-icons/ri";
import { MdPendingActions, MdOutlinePayments } from "react-icons/md";
import { LuBriefcase } from "react-icons/lu";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { cn } from "@/lib/utils";
import { UserRole } from "@/Types/User.types";

// Menu items.
const Useritems = [
  {
    title: "Profile",
    url: "/dashboard/profile",
    icon: RiProfileLine,
  },
  {
    title: "Ordera",
    url: "/dashboard/orders",
    icon: LuBriefcase,
  },
  {
    title: "Payments",
    url: "/dashboard/payments",
    icon: MdOutlinePayments,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

const items = [
  {
    title: "user Status",
    url: "/dashboard/status",
    icon: FaUserSlash,
    roles: [UserRole.ADMIN, UserRole.MANAGER],
  },
  {
    title: "Create Flower",
    url: "/dashboard/create-flower",
    icon: PiFlowerBold,
    roles: [UserRole.ADMIN, UserRole.MANAGER],
  },
  {
    title: "Flower Actions",
    url: "/dashboard/flower-actions",
    icon: MdPendingActions,
    roles: [UserRole.ADMIN, UserRole.MANAGER],
  },
];

export function DashbordSideBar() {
  const pathName = useLocation().pathname;
  const { user } = useAuth();

  return (
    <Sidebar collapsible="icon" className="w-64 ">
      <SidebarContent className="bg-orangeTheme-100/50">
        <SidebarGroup>
          <SidebarGroupLabel className="text-2xl text-orangeTheme-600">
            <Link to={"/"} className="flex items-center gap-2 font-serif">
              FlowerShop
            </Link>
          </SidebarGroupLabel>
          <Separator className="my-4 bg-orangeTheme-200" />

          <SidebarGroupContent>
            <SidebarMenu>
              {Useritems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    className={cn(
                      pathName === item.url &&
                        "bg-orangeTheme-600 text-orangeTheme-100",
                      "hover:bg-orangeTheme-600 hover:text-orangeTheme-100"
                    )}
                    asChild>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>

          <Separator className="my-4 bg-orangeTheme-200" />

          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                if (
                  item.roles &&
                  (!user?.role || !item.roles.includes(user.role as UserRole))
                )
                  return null;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      className={cn(
                        pathName === item.url &&
                          "bg-orangeTheme-600 text-orangeTheme-100 ",
                        "hover:bg-orangeTheme-600 hover:text-orangeTheme-100"
                      )}
                      asChild>
                      <Link to={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
