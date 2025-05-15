import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { IUser } from "@/Types/User.types";

interface AdminSectionProps {
  user: IUser | null;
  toggleImageView: (imageUrl: string) => void;
}

function AdminSection({ user, toggleImageView }: AdminSectionProps) {
  if (!user || !user.adminProfile) {
    return null;
  }
  const { adminProfile } = user;
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="identification">
        <AccordionTrigger className="text-base font-medium">
          Identification Documents
        </AccordionTrigger>
        <AccordionContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div>
              <p className="text-sm text-muted-foreground mb-2">NID Card</p>
              <div
                className="border rounded-md overflow-hidden cursor-pointer transition-all hover:opacity-90"
                onClick={() => toggleImageView(adminProfile.nidCardImage)}>
                <img
                  src={adminProfile.nidCardImage || "/placeholder.svg"}
                  alt="NID Card"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="contact">
        <AccordionTrigger className="text-base font-medium">
          Emergency Contact
        </AccordionTrigger>
        <AccordionContent className="space-y-2 pt-2">
          <div>
            <p className="text-sm text-muted-foreground">Father's Name</p>
            <p>{adminProfile.fatherName}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Father's Number</p>
            <p>{adminProfile.fatherNumber}</p>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
export default AdminSection;
