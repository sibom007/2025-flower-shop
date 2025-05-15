import { IFlower } from "@/Types/Flower.type";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { useDeleteFlower } from "../hooks/useDeleteFlower";

function DeleteFlowerForm({ Flowers }: { Flowers: IFlower[] }) {
  const { deleteFlower, isLoading } = useDeleteFlower();
  const handleDelete = (id: string) => {
    deleteFlower(id);
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Color</TableHead>
          <TableHead>Stock</TableHead>

          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Flowers.map((flower) => (
          <TableRow key={flower.id}>
            <TableCell>{flower.name}</TableCell>
            <TableCell>${flower.price.toFixed(2)}</TableCell>
            <TableCell>{flower.color}</TableCell>
            <TableCell>{flower.stock}</TableCell>
            <TableCell className="text-right">
              <Button
                variant="destructive"
                size="sm"
                onClick={() => handleDelete(flower.id)}
                className="active:scale-95"
                disabled={isLoading}>
                <Trash2 className="w-4 h-4 mr-2" />
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default DeleteFlowerForm;
