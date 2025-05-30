import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


import { useLogout } from "@/modules/auth/hooks/useLogout";
import { useAuth } from "@/context/AuthContext";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const items = [
  {
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    label: "Billing",
    href: "/",
  },
  {
    label: "Settings",
    href: "/",
  },
];

const Avater = () => {
  const pathname = useLocation().pathname;
  const { user } = useAuth();

  const { mutate: Logout } = useLogout();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar>
          <AvatarImage
            src={user?.image || "https://github.com/shadcn.png"}
            className="w-9 h-9 rounded-2xl ring-2 ring-orangeTheme-500"
          />
          <AvatarFallback className="bg-orangeTheme-500 text-white">
            CN
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-orangeTheme-100 text-orangeTheme-900 border border-orangeTheme-300 shadow-lg">
        <DropdownMenuLabel className="text-orangeTheme-700 font-semibold">
          My Account
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-orangeTheme-300" />

        <DropdownMenuGroup>
          {items.map((item) => (
            <Link to={item.href} key={item.label}>
              <DropdownMenuItem
                className={cn(
                  "hover:bg-orangeTheme-400",
                  pathname === item.href && "bg-orangeTheme-400 my-1"
                )}>
                {item.label}
              </DropdownMenuItem>
            </Link>
          ))}
        </DropdownMenuGroup>

        <DropdownMenuSeparator className="bg-orangeTheme-300" />
        <DropdownMenuItem
          className="hover:bg-orangeTheme-200 text-orangeTheme-700"
          onClick={() => Logout()}>
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Avater;
