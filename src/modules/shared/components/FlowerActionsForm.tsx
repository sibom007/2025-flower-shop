import { IFlower } from "@/Types/Flower.type";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import UpdateFlowerForm from "./UpdateFlowerForm";
import DeleteFlowerForm from "./DeleteFlowerForm";

function FlowerActionsForm({ Flowers }: { Flowers: IFlower[] }) {
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
        {Flowers?.map((flower) => (
          <TableRow key={flower.id}>
            <TableCell>{flower.name}</TableCell>
            <TableCell>${flower.price.toFixed(2)}</TableCell>
            <TableCell>{flower.color}</TableCell>
            <TableCell>{flower.stock}</TableCell>
            <TableCell className="flex justify-end gap-4">
              <UpdateFlowerForm key={flower.id} flower={flower} />
              <DeleteFlowerForm flowerId={flower.id} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default FlowerActionsForm;
