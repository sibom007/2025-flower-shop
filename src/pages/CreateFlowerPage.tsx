import Header from "@/components/Header";
import CreateFlowerForm from "@/modules/shared/components/CreateFlowerForm";

function CreateFlowerPage() {
  return (
    <div className="w-full p-4">
      <Header title="Create Flower" />
      <CreateFlowerForm />
    </div>
  );
}

export default CreateFlowerPage;
