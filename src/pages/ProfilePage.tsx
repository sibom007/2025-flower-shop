import ProfileHeader from "@/modules/dashbord/profile/components/ProfileHeader";
import ProfileContactInfo from "@/modules/dashbord/profile/components/ProfileContactInfo";
import ProfileRoleInfo from "@/modules/dashbord/profile/components/ProfileRoleInfo";

import { useUser } from "@/modules/auth/hooks/useUser";
import ProfileMembership from "@/modules/dashbord/profile/components/ProfileMembership";

export default function ProfilePage() {
  const { data: user, isLoading } = useUser();
  return (
    <div className="container mx-auto py-8 px-4 max-w-6xl space-y-6">
      {/* Full-width Profile Header */}
      <div>
        <ProfileHeader user={user} isLoading={isLoading} />
      </div>
      {/* Two-column layout: Contact Info & Role Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-fit">
        <ProfileContactInfo user={user} isLoading={isLoading} />
        <ProfileRoleInfo user={user} isLoading={isLoading} />
      </div>{" "}
      <div>
        <ProfileMembership user={user} isLoading={isLoading} />
      </div>
    </div>
  );
}
