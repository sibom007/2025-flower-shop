import { useForm, Controller } from "react-hook-form";
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
import { Progress } from "@/components/ui/progress";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Edit } from "lucide-react";
import { useState } from "react";
import { IUser } from "@/Types/User.types";
import { uploadToCloudinary } from "@/modules/shared/utils/uploadToCloudinary";
import { useRoleInfoUpdate } from "../hooks/useRoleInfoUpdate";

const profileSchema = z.object({
  FatherName: z.string().nullable().optional(),
  FatherNumber: z.string().nullable().optional(),
  NIDNumber: z.string().nullable().optional(),
  NIDFront: z.string().nullable().optional(),
  NIDBack: z.string().nullable().optional(),
});

type RoleInfoFormData = z.infer<typeof profileSchema>;

export default function RoleInfoForm({ user }: { user: IUser }) {
  const { updateRoleInfo, isLoading } = useRoleInfoUpdate();
  const [uploadingFront, setUploadingFront] = useState(0);
  const [uploadingBack, setUploadingBack] = useState(0);
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RoleInfoFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      FatherName: user.FatherName,
      FatherNumber: user.FatherNumber,
      NIDNumber: user.NIDNumber,
      NIDFront: user.NIDFront,
      NIDBack: user.NIDBack,
    },
  });

  const onSubmit = (data: RoleInfoFormData) => {
    const safeData = {
      FatherName: data.FatherName ?? "",
      FatherNumber: data.FatherNumber ?? "",
      NIDNumber: data.NIDNumber ?? "",
      NIDFront: data.NIDFront ?? "",
      NIDBack: data.NIDBack ?? "",
    };
    updateRoleInfo(safeData, {
      onSuccess: () => {
        setOpen(false);
      },
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="hover:scale-105">
          <Edit className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-center text-orangeTheme-700">
            Update Role Info
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-4 font-body mb-2">
            <div>
              <Label className="mb-2" htmlFor="FatherName">
                Father's Name
              </Label>
              <Input id="FatherName" {...register("FatherName")} />
            </div>

            <div>
              <Label className="mb-2" htmlFor="FatherNumber">
                Father's Number
              </Label>
              <Input id="FatherNumber" {...register("FatherNumber")} />
            </div>

            <div>
              <Label className="mb-2" htmlFor="NIDNumber">
                NID Number
              </Label>
              <Input id="NIDNumber" {...register("NIDNumber")} />
            </div>

            {/* NID FRONT UPLOADER */}
            <div>
              <Label className="mb-2">NID Front Image</Label>
              <Controller
                control={control}
                name="NIDFront"
                render={({ field }) => (
                  <>
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={async (e) => {
                        const file = e.target.files?.[0];
                        if (!file) return;

                        setUploadingFront(20);
                        const url = await uploadToCloudinary(file);
                        if (url) {
                          field.onChange(url);
                        }
                        setUploadingFront(100);
                      }}
                    />
                    {uploadingFront > 0 && uploadingFront < 100 && (
                      <Progress className="mt-3" value={uploadingFront} />
                    )}
                    {field.value && (
                      <img
                        src={field.value}
                        alt="NID Front"
                        className="mt-2 rounded shadow w-32 h-auto"
                      />
                    )}
                    {errors.NIDFront && (
                      <p className="text-red-500 text-sm">
                        {errors.NIDFront.message}
                      </p>
                    )}
                  </>
                )}
              />
            </div>

            {/* NID BACK UPLOADER */}
            <div>
              <Label className="mb-2">NID Back Image</Label>
              <Controller
                control={control}
                name="NIDBack"
                render={({ field }) => (
                  <>
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={async (e) => {
                        const file = e.target.files?.[0];
                        if (!file) return;

                        setUploadingBack(20);
                        const url = await uploadToCloudinary(file);
                        if (url) {
                          field.onChange(url);
                        }
                        setUploadingBack(100);
                      }}
                    />
                    {uploadingBack > 0 && uploadingBack < 100 && (
                      <Progress className="mt-3" value={uploadingBack} />
                    )}
                    {field.value && (
                      <img
                        src={field.value}
                        alt="NID Back"
                        className="mt-2 rounded shadow w-32 h-auto"
                      />
                    )}
                    {errors.NIDBack && (
                      <p className="text-red-500 text-sm">
                        {errors.NIDBack.message}
                      </p>
                    )}
                  </>
                )}
              />
            </div>
          </div>
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-orangeTheme-600 text-white hover:bg-orangeTheme-700">
            Save Changes
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
