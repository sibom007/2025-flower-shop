import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { MdDeleteOutline } from "react-icons/md";

import { useSingleFlower } from "@/modules/shop/hooks/useSingleFlower";

interface FlowerDataRowProps {
  FlowerId: string;
}

function FlowerDataRow({ FlowerId }: FlowerDataRowProps) {
  const { data } = useSingleFlower(FlowerId);

  return (
    <TableRow>
      <TableCell className="p-4">{data?.name}</TableCell>
      <TableCell>{data?.FlowerType}</TableCell>
      <TableCell>{data?.color}</TableCell>
      <TableCell className="text-right">{data?.price}</TableCell>
      <TableCell className="text-right">
        <Button variant={"secondary"}>
          <MdDeleteOutline />
        </Button>
      </TableCell>
    </TableRow>
  );
}

export default FlowerDataRow;
