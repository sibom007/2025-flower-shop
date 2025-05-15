import Header from "@/components/Header";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { useAuth } from "@/context/AuthContext";
import UserStatusForm from "@/modules/dashbord/Admin/components/UserStatusForm";
import { useGetUsers } from "@/modules/dashbord/Admin/hooks/useGetUsers";

function UserStatusPage() {
  const { user } = useAuth();
  const { data } = useGetUsers();
  const Existuser = data?.filter((data) => data.id !== user?.id);

  return (
    <div className="w-full p-4">
      <Header title="User Status" />
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Existuser?.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell className="lowercase">{user.role}</TableCell>
              <TableCell className="lowercase">{user.status}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell className="flex justify-end">
                <UserStatusForm
                  id={user.id}
                  Role={user.role}
                  Status={user.status}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default UserStatusPage;
