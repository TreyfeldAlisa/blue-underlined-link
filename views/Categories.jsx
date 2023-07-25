import CategoryCard from "@/components/CategoryCard";
import CategoriesLayout from "@/layouts/CategoriesLayout";
import React from "react";


const Categories = () => {
  return (
    <CategoriesLayout shouldBeWithLinks={true}>
      <CategoryCard/>
    </CategoriesLayout>
  );
};

export default Categories;
