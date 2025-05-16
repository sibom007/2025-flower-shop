import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { ShieldAlert } from "lucide-react";
import { useState } from "react";
import { IUser, UserRole } from "@/Types/User.types";
import RoleInfoForm from "./RoleInfoForm";

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

  if (isLoading) {
    return (
      <Card className="md:col-span-2">
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
            <ShieldAlert className="h-5 w-5" />
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
    <Card className="md:col-span-2 hover:shadow-md transition-all">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-primary">
            <ShieldAlert className="h-5 w-5" />
            Role Information
          </CardTitle>
          <RoleInfoForm user={user} />
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-6">
          {user.role === UserRole.USER && (
            <div className="text-center bg-muted/30 p-4 rounded-md">
              <p className="text-muted-foreground">Standard user account</p>
              <p className="mt-2">Enjoy shopping for beautiful flowers!</p>
            </div>
          )}

          {/* Show fallback info cards for common fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InfoBlock label="Father's Name" value={user.FatherName} />
            <InfoBlock label="Father's Number" value={user.FatherNumber} />
            <InfoBlock label="NID Number" value={user.NIDNumber} />
            <ImagePreview
              label="NID Front"
              src={user.NIDFront}
              onClick={setActiveImage}
            />
            <ImagePreview
              label="NID Back"
              src={user.NIDBack}
              onClick={setActiveImage}
            />
          </div>
        </div>

        {activeImage && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div
              className="absolute inset-0 bg-black bg-opacity-50"
              onClick={() => setActiveImage(null)}
            />
            <img
              src={activeImage}
              alt="Preview"
              className="max-w-full max-h-full rounded-lg z-10"
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function InfoBlock({ label, value }: { label: string; value?: string }) {
  return (
    <div className="bg-muted/30 p-3 rounded-md">
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="font-medium mt-1">
        {value || <span className="text-muted">Not Provided</span>}
      </p>
    </div>
  );
}

function ImagePreview({
  label,
  src,
  onClick,
}: {
  label: string;
  src?: string;
  onClick: (url: string) => void;
}) {
  return (
    <div className="bg-muted/30 p-3 rounded-md">
      <p className="text-sm text-muted-foreground mb-2">{label}</p>
      <div
        className="border rounded-md overflow-hidden cursor-pointer transition-all hover:opacity-90"
        onClick={() => src && onClick(src)}>
        <img
          src={src || "/placeholder.svg"}
          alt={label}
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
}
