import Works from "@/components/Works/Works";
import CategoriesLayout from "@/layouts/CategoriesLayout";

export default function AllWorks() {
  return (
    <CategoriesLayout shouldBeWithLinks={true}>
      <div className="allworks">
        <Works />
      </div>
    </CategoriesLayout>
  );
}
