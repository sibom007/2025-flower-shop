import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CardItem } from "@/Types/Card.types";
import FlowerDataRow from "./FlowerDataRow";
import { Button } from "@/components/ui/button";

interface CardItemsProps {
  Carditems?: CardItem;
  isLoading: boolean;
}

function CardItems({ Carditems }: CardItemsProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Flower Name</TableHead>
          <TableHead>FlowerType</TableHead>
          <TableHead>color</TableHead>
          <TableHead className="text-right">Amount</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Carditems?.FlowerIds.map((id) => (
          <FlowerDataRow key={id} FlowerId={id} />
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={4}>Total</TableCell>
          <TableCell className="text-right ">{Carditems?.TotalPrice}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell colSpan={4} className="py-4 ">
            Place order
          </TableCell>
          {Carditems?.FlowerIds.length !== 0 && (
            <div className="flex justify-end mt-2 gap-2">
              <Button variant={"primary"}>Place Order</Button>
            </div>
          )}
        </TableRow>
      </TableFooter>
    </Table>
  );
}

export default CardItems;
