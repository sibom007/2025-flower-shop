import Header from "@/components/Header";
import FlowerActionsForm from "@/modules/shared/components/FlowerActionsForm";
import { useGetFlower } from "@/modules/shop/hooks/useGetFlower";

function FlowerActionsPage() {
  const { data } = useGetFlower({});
  return (
    <div className="w-full p-4">
      <Header title="Flower Actions" />
      <FlowerActionsForm Flowers={data} />
    </div>
  );
}

export default FlowerActionsPage;
