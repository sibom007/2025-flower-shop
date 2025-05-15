import { IUser } from "@/Types/User.types";
import DistributorStatCard from "./DistributorStatCard";

function DistributorSection({ user }: { user: IUser }) {
  const { distributorProfile } = user;
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <DistributorStatCard
        title="Successful"
        count={distributorProfile?.successfulPayment?.length ?? 0}
        color="green"
      />
      <DistributorStatCard
        title="Pending"
        count={distributorProfile?.pendingPayment?.length ?? 0}
        color="amber"
      />
      <DistributorStatCard
        title="Total"
        count={distributorProfile?.payRecord?.length ?? 0}
        color="blue"
      />
    </div>
  );
}

export default DistributorSection;
