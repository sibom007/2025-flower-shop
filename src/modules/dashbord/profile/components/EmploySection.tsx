import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { IUser } from "@/Types/User.types";

interface EmploySectionProps {
  user: IUser | null;
  toggleImageView: (imageUrl: string) => void;
}

function EmploySection({ user, toggleImageView }: EmploySectionProps) {
  const employProfile = user?.employProfile;
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="employment">
        <AccordionTrigger className="text-base font-medium">
          Employment Details
        </AccordionTrigger>
        <AccordionContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div>
              <p className="text-sm text-muted-foreground mb-2">CV/Resume</p>
              <div
                className="border rounded-md overflow-hidden cursor-pointer transition-all hover:opacity-90"
                onClick={() =>
                  employProfile && toggleImageView(employProfile.cvImage)
                }>
                <img
                  src={employProfile?.cvImage || "/placeholder.svg"}
                  alt="CV"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Employment Type</p>
                <Badge className="mt-1 bg-green-100 text-green-800">
                  {employProfile?.employType}
                </Badge>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Rank</p>
                <p className="font-medium">{employProfile?.rank}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Payment Type</p>
                <p className="font-medium">{employProfile?.paymentType}</p>
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default EmploySection;
