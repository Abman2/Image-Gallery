import { DndContext, closestCenter } from "@dnd-kit/core";
import { arrayMove,  SortableContext, horizontalListSortingStrategy, rectSortingStrategy } from "@dnd-kit/sortable";
import { useState } from "react";
import { Images } from "../images/Images";
import { SortableItem } from "./SortableItem";

export const DragAndDropSection = () => {
  const [images, setImages] = useState([...Images.img]);
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id != over.id) {
      setImages((items) => {
        const activeIndex = items.indexOf(active.id);
        const overIndex = items.indexOf(over.id);
        return arrayMove(items, activeIndex, overIndex);
      });
    }
  };
 
  return (
    <div className="overflow-hidden bg-green-400 py-10 ">
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <h1 className="text-center md:text-7xl text-2xl my-3 font-extrabold text-green-700">
          Gallery Section
        </h1>
        <div className="grid md:grid-cols-4 pt-5 grid-cols-2  sm:max-w-6xl max-w-md mx-auto gap-x-5 gap-y-5">
          <SortableContext items={images} strategy={rectSortingStrategy} >  
            {images.map((image) => (
              <SortableItem key={image} id={image} />
            ))}
          </SortableContext>
        </div>
      </DndContext>
    </div>
  );
};

