import { useState } from "react";
import { AddCategory, GifGrid } from "./component";


export const Gif_app = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategories = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>BUscador de Gifs</h1>
      <AddCategory
        // setCategories={setCategories}
        onNewCategory={onAddCategories}
      />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
