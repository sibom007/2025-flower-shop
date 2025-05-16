import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IUser } from "@/Types/User.types";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import { Edit, MapPin, Phone, User } from "lucide-react";
import ContactInfoForm from "./ContactInfoForm";

interface ProfileContactInfoProps {
  user: IUser | null;
  isLoading: boolean;
}

export default function ProfileContactInfo({
  user,
  isLoading,
}: ProfileContactInfoProps) {
  const renderField = (
    label: string,
    value?: string | null,
    icon?: React.ReactNode
  ) => (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 text-[oklch(0.704_0.2_37.788)]">{icon}</div>
      <div>
        <p className="font-medium">{label}</p>
        {isLoading ? (
          <Skeleton className="h-4 w-40 mt-1" />
        ) : value ? (
          <p className="text-muted-foreground">{value}</p>
        ) : (
          <p className="text-sm text-muted-foreground italic">
            No data provided
          </p>
        )}
      </div>
    </div>
  );

  return (
    <Card className="transition-all duration-300 hover:shadow-md">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-[oklch(0.554_0.225_37.417)]">
            <User className="h-5 w-5" />
            Contact Information
          </CardTitle>
          {user && <ContactInfoForm user={user} />}
        </div>
        <Separator />
      </CardHeader>
      <CardContent className="space-y-2">
        {renderField(
          "Phone Number",
          user?.number,
          <Phone className="h-5 w-5" />
        )}
        {renderField(
          "Current Address",
          user?.currentAddress,
          <MapPin className="h-5 w-5" />
        )}
        {renderField(
          "Home Address",
          user?.homeAddress,
          <MapPin className="h-5 w-5" />
        )}
      </CardContent>

      <CardFooter>
        {isLoading ? (
          <Skeleton className="h-10 w-full rounded-md" />
        ) : (
          <Button variant="outline" size="sm" className="w-full">
            <Edit className="h-4 w-4 mr-2" />
            Update Contact Info
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
