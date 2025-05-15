import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Loader from "@/components/loading/Loader";

import { UserRole, UserStatus } from "@/modules/auth/AuthConstant";

import { useUpdateStatus } from "../hooks/useUpdateStatus";
import { useUpdateRole } from "../hooks/useUpdateRole";


function UserStatusForm({
  id,
  Role,
  Status,
}: {
  id: string;
  Role: string;
  Status: string;
}) {
  const { mutate: statusMutate, isPending: statusPending } = useUpdateStatus();
  const { mutate: roleMutate, isPending: rolePending } = useUpdateRole();

  const handleStatusChange = (value: string) => {
    statusMutate({ id, status: value });
  };

  const handleRoleChange = (value: string) => {
    roleMutate({ id, role: value });
  };

  return (
    <div className="flex items-center gap-2 ">
      {rolePending && statusPending && <Loader />}
      <Select
        onValueChange={handleStatusChange}
        defaultValue={Status}
        disabled={rolePending || statusPending}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          {UserStatus.map((Status, i) => (
            <SelectItem key={i} value={Status}>
              {Status}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select
        defaultValue={Role}
        onValueChange={handleRoleChange}
        disabled={statusPending || rolePending}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="User Role" />
        </SelectTrigger>
        <SelectContent>
          {UserRole.map((Ro, i) => (
            <SelectItem key={i} value={Ro}>
              {Ro}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default UserStatusForm;
