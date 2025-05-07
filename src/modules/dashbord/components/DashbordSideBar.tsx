import { Calendar, Home, Settings, ShoppingBagIcon } from "lucide-react";
import { FaUserSlash } from "react-icons/fa";

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
import { Role } from "@/routes/ProtectRoute";
import { cn } from "@/lib/utils";

// Menu items.
const Useritems = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Shop",
    url: "/shop",
    icon: ShoppingBagIcon,
  },
  {
    title: "About",
    url: "#",
    icon: Calendar,
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
    role: Role.ADMIN,
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
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
          <Separator className="my-4 bg-orangeTheme-200" />
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                if (user?.role !== item.role) return null; // Check if the user has the required role
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
