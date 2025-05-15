// utils/uploadToCloudinary.ts
export const uploadToCloudinary = async (
  file: File
): Promise<string | null> => {
  const cloudName = "dwor90h8p"; // from CLOUDINARY_URL
  const preset = "ml_default"; // the preset you created in the dashboard

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", preset);

  try {
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();
    console.log("🚀 ~ data:", data);
    return data.secure_url || null;
  } catch (err) {
    console.error("Cloudinary upload failed:", err);
    return null;
  }
};
