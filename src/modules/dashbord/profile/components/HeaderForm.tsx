import { useState } from "react";
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
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Edit } from "lucide-react";
import { IUser } from "@/Types/User.types";

// Schema
const profileSchema = z.object({
  profileImage: z.string().optional(),
});

type ProfileFormData = z.infer<typeof profileSchema>;

export default function HeaderForm({ user }: { user: IUser }) {
  const [uploadingFront, setUploadingFront] = useState(0);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      profileImage: user.image || "",
    },
  });

  const onSubmit = (data: ProfileFormData) => {
    console.log("Profile image updated:", data);
    // TODO: Submit to API
  };

  const uploadToCloudinary = async (file: File): Promise<string | null> => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "your_upload_preset"); // replace with your actual preset

    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/your_cloud_name/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();
      return data.secure_url;
    } catch (err) {
      console.error("Image upload failed:", err);
      return null;
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="sm"
          variant="secondary"
          className="rounded-full w-8 h-8 p-0">
          <Edit className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-orangeTheme-700">
            Update Profile Image
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
          <div>
            <Label className="mb-2">Profile Image</Label>
            <Controller
              control={control}
              name="profileImage"
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
                      alt="Profile"
                      className="mt-2 rounded shadow w-32 h-auto"
                    />
                  )}
                  {errors.profileImage && (
                    <p className="text-red-500 text-sm">
                      {errors.profileImage.message}
                    </p>
                  )}
                </>
              )}
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-orangeTheme-600 text-white hover:bg-orangeTheme-700">
            Save Image
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
