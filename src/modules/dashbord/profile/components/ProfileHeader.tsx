import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";

import {
  getMembershipColor,
  getRoleColor,
} from "@/modules/dashbord/profile/ProfileConstant";
import { Skeleton } from "@/components/ui/skeleton";
import { IUser, UserStatus } from "@/Types/User.types";
import { Award, Mail, Package } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import HeaderForm from "./HeaderForm";

type ProfileHeaderProps = {
  user: IUser;
  isLoading: boolean;
};

export default function ProfileHeader({ user, isLoading }: ProfileHeaderProps) {
  return (
    <div
      className="bg-gradient-to-r from-[oklch(0.929_0.15_37.508)]
     to-[oklch(0.704_0.2_37.788)] 
     rounded-lg p-6 mb-8 shadow-lg transition-all
      duration-300 hover:shadow-xl">
      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* Avatar Section */}
        <div className="relative group">
          {isLoading ? (
            <Skeleton className="h-24 w-24 rounded-full" />
          ) : (
            <div className="relative group">
              <Avatar className="h-24 w-24 border-4 border-white shadow-md transition-transform duration-300 group-hover:scale-105">
                <AvatarImage
                  src={user?.image || "/placeholder.svg"}
                  alt={user?.name}
                />
                <AvatarFallback className="text-2xl bg-[oklch(0.554_0.225_37.417)] text-white">
                  {user?.name
                    ?.split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <HeaderForm user={user} />
              </div>
            </div>
          )}
        </div>

        {/* Info Section */}
        <div className="flex-1 text-center md:text-left space-y-3">
          {/* Name + Badges */}
          <div className="flex flex-col md:flex-row md:items-center gap-2 justify-center md:justify-start">
            {isLoading ? (
              <Skeleton className="h-8 w-40" />
            ) : (
              <h1 className="text-3xl font-semibold text-white">
                {user?.name}
              </h1>
            )}

            {!isLoading && (
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Badge
                        className={`${getRoleColor(
                          user?.role
                        )} cursor-help transition-all hover:scale-105`}>
                        {user?.role}
                      </Badge>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Your role at Flower Bloom</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Badge
                        variant={
                          user?.status === UserStatus.ACTIVE
                            ? "outline"
                            : "destructive"
                        }
                        className="cursor-help transition-all hover:scale-105">
                        {user?.status}
                      </Badge>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Your account status</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            )}
          </div>

          {/* Email */}
          <p className="text-white/80 flex items-center justify-center md:justify-start gap-2">
            <Mail className="h-4 w-4" />
            {isLoading ? <Skeleton className="h-4 w-40" /> : user?.email}
          </p>

          {/* Membership & Points */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2">
            {isLoading ? (
              <>
                <Skeleton className="h-6 w-28 rounded-full" />
                <Skeleton className="h-6 w-24 rounded-full" />
              </>
            ) : (
              <>
                <Badge
                  className={`${getMembershipColor(
                    user?.membership
                  )} flex items-center gap-1 transition-all hover:scale-105`}>
                  <Award className="h-3 w-3" />
                  {user?.membership} MEMBER
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-white/20 text-white flex items-center gap-1 transition-all hover:scale-105">
                  <Package className="h-3 w-3" />
                  {user?.point} POINTS
                </Badge>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
