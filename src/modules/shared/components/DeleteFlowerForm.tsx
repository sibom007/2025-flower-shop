import { Button } from "@/components/ui/button";
import { useDeleteFlower } from "../hooks/useDeleteFlower";
import { Trash2 } from "lucide-react";

function DeleteFlowerForm({ flowerId }: { flowerId: string }) {
  const { deleteFlower, isLoading } = useDeleteFlower();
  const handleDelete = (id: string) => {
    deleteFlower(id);
  };
  return (
    <div>
      <Button
        variant="destructive"
        size="sm"
        onClick={() => handleDelete(flowerId)}
        className="active:scale-95"
        disabled={isLoading}>
        <Trash2 className="w-4 h-4 mr-2" />
        Delete
      </Button>
    </div>
  );
}

export default DeleteFlowerForm;
