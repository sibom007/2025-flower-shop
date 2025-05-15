import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import AdminSection from "./AdminSection";
import EmploySection from "./EmploySection";
import { Badge, Shield } from "lucide-react";
import ManagerSection from "./ManagerSection";
import { Skeleton } from "@/components/ui/skeleton";
import {
  formatDate,
  getRoleColor,
} from "@/modules/dashbord/profile/ProfileConstant";
import { UserRole, IUser } from "@/Types/User.types";
import DistributorSection from "./DistributorSection";

interface ProfileRoleInfoProps {
  user: IUser | null;
  isLoading: boolean;
  error?: string | null;
}

export default function ProfileRoleInfo({
  user,
  isLoading,
  error,
}: ProfileRoleInfoProps) {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const toggleImageView = (imageUrl: string) => {
    setActiveImage((prev) => (prev === imageUrl ? null : imageUrl));
  };

  if (isLoading) {
    return (
      <Card className="md:col-span-2 transition-all duration-300 hover:shadow-md">
        <CardHeader>
          <Skeleton className="h-6 w-1/3" />
          <Skeleton className="h-4 w-1/2 mt-2" />
        </CardHeader>
        <CardContent className="space-y-4">
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-48 w-full rounded-md" />
        </CardContent>
      </Card>
    );
  }

  if (error || !user) {
    return (
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-destructive">
            <Shield className="h-5 w-5" />
            Error
          </CardTitle>
          <CardDescription>
            {error || "User data not available."}
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card className="md:col-span-2 transition-all duration-300 hover:shadow-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-[oklch(0.554_0.225_37.417)]">
          <Shield className="h-5 w-5" />
          Role Information
        </CardTitle>
        <CardDescription>
          Details specific to your {user.role.toLowerCase()} role at Flower
          Bloom
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Badge className={getRoleColor(user.role)}>{user.role}</Badge>
            <span className="text-sm text-muted-foreground">
              Since {formatDate(user.createdAt)}
            </span>
          </div>

          {/* Role-specific Sections */}
          {user.role === UserRole.MANAGER && user.managerProfile && (
            <ManagerSection user={user} toggleImageView={toggleImageView} />
          )}

          {user.role === UserRole.ADMIN && user.adminProfile && (
            <AdminSection user={user} toggleImageView={toggleImageView} />
          )}

          {user.role === UserRole.EMPLOY && user.employProfile && (
            <EmploySection user={user} toggleImageView={toggleImageView} />
          )}

          {user.role === UserRole.DISTRIBUTOR && user.distributorProfile && (
            <DistributorSection user={user} />
          )}

          {user.role === UserRole.USER && (
            <div className="flex items-center justify-center p-4">
              <div className="text-center">
                <p className="text-muted-foreground">Standard user account</p>
                <p className="mt-2">Enjoy shopping for beautiful flowers!</p>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
