import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetUsers } from "../hooks/useGetUsers";
import UserStatusForm from "./UserStatusForm";

function UserStatus() {
  const { data } = useGetUsers();
  console.log(
    "🚀 ~ UserStatus ~ data:",
    data?.map((user) => user.name)
  );

  return (
    <div className="w-full  p-4">
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell>{user.status}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell className="flex justify-end">
                <UserStatusForm />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default UserStatus;
