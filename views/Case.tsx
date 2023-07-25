import CaseCard from "@/components/CaseCard";
import CategoryCard from "@/components/CategoryCard";
import CategoriesLayout from "@/layouts/CategoriesLayout";
import React from "react";

const Case = () => {
  return (
    <CategoriesLayout shouldBeWithLinks={false}>
      <CaseCard />
    </CategoriesLayout>
  );
};

export default Case;
