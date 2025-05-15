import Header from "@/components/Header";
import DeleteFlowerForm from "@/modules/shared/components/DeleteFlowerForm";
import { useGetFlower } from "@/modules/shop/hooks/useGetFlower";

function DeleteFlowerPage() {
  const { data } = useGetFlower({});
  return (
    <div className="w-full p-4">
      <Header title="Delete Flower" />
      <DeleteFlowerForm Flowers={data} />
    </div>
  );
}

export default DeleteFlowerPage;
