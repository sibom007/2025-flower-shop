import Header from "@/components/Header";
import CardItems from "@/modules/card/components/CardItems";
import { useAllCardItems } from "@/modules/card/hooks/useAllCardItems";

function CardPage() {
  const { data, isLoading } = useAllCardItems();

  return (
    <div>
      <Header title="Card Items" />
      <CardItems Carditems={data} isLoading={isLoading} />
    </div>
  );
}

export default CardPage;
