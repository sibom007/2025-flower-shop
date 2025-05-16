import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Edit } from "lucide-react";
import { IUser } from "@/Types/User.types";

const contactSchema = z.object({
  phoneNumber: z
    .string()
    .min(11, "Phone number must be 11 digits")
    .max(11, "Phone number must be 11 digits"),
  currentAddress: z.string().min(1, "Current address is required"),
  homeAddress: z.string().min(1, "Home address is required"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactInfoForm({ user }: { user: IUser }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      phoneNumber: user.number || "",
      currentAddress: user.currentAddress || "",
      homeAddress: user.homeAddress || "",
    },
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Updated contact info:", data);
    // TODO: send data to your backend or API
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="hover:scale-105">
          <Edit className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-center text-orangeTheme-700">
            Update Contact Info
          </DialogTitle>
        </DialogHeader>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid gap-4 font-body">
          <div>
            <Label className="mb-2" htmlFor="phoneNumber">
              Phone Number *
            </Label>
            <Input id="phoneNumber" {...register("phoneNumber")} />
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>

          <div>
            <Label className="mb-2" htmlFor="currentAddress">
              Current Address *
            </Label>
            <Input id="currentAddress" {...register("currentAddress")} />
            {errors.currentAddress && (
              <p className="text-red-500 text-sm">
                {errors.currentAddress.message}
              </p>
            )}
          </div>

          <div>
            <Label className="mb-2" htmlFor="homeAddress">
              Home Address *
            </Label>
            <Input id="homeAddress" {...register("homeAddress")} />
            {errors.homeAddress && (
              <p className="text-red-500 text-sm">
                {errors.homeAddress.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full bg-orangeTheme-600 text-white hover:bg-orangeTheme-700">
            Save Changes
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
