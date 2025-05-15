import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { IUser } from "@/Types/User.types";

interface ManagerSectionProps {
  user: IUser;
  toggleImageView: (imageUrl: string) => void;
}

function ManagerSection({ user, toggleImageView }: ManagerSectionProps) {
  const { managerProfile } = user;

  if (!managerProfile) {
    return null;
  }

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="identification">
        <AccordionTrigger className="text-base font-medium">
          Identification Documents
        </AccordionTrigger>
        <AccordionContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {managerProfile.nidCardImage && (
              <div key="nidCardImage">
                <p className="text-sm text-muted-foreground mb-2">NID Card</p>
                <div
                  className="border rounded-md overflow-hidden cursor-pointer transition-all hover:opacity-90"
                  onClick={() => toggleImageView(managerProfile.nidCardImage)}>
                  <img
                    src={managerProfile.nidCardImage || "/placeholder.svg"}
                    alt="nidCardImage"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            )}
            {managerProfile.cvImage && (
              <div key="cvImage">
                <p className="text-sm text-muted-foreground mb-2">CV/Resume</p>
                <div
                  className="border rounded-md overflow-hidden 
                  cursor-pointer transition-all hover:opacity-90"
                  onClick={() => toggleImageView(managerProfile.cvImage!)}>
                  <img
                    src={managerProfile.cvImage || "/placeholder.svg"}
                    alt="cvImage"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            )}
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="responsibilities">
        <AccordionTrigger className="text-base font-medium">
          Responsibilities
        </AccordionTrigger>
        <AccordionContent>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground pt-2">
            <li>Oversee daily operations of the flower shop</li>
            <li>Manage inventory and supplier relationships</li>
            <li>Supervise staff and handle customer inquiries</li>
            <li>Ensure quality control of all floral arrangements</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default ManagerSection;
