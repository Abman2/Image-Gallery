import { DndContext, closestCenter } from "@dnd-kit/core";
import { arrayMove,  SortableContext, horizontalListSortingStrategy, rectSortingStrategy } from "@dnd-kit/sortable";
import { useState } from "react";
import { SortableItem } from "./SortableItem";
import image1 from "../assets/images/1.jpeg"
import image2 from "../assets/images/2.jpeg"
import image3 from "../assets/images/3.jpeg"
import image4 from "../assets/images/sarv1.jpg"
import image5 from "../assets/images/sarv2.jpg"
import image6 from "../assets/images/sarv3.jpg"
import image7 from "../assets/images/sarv4.jpg"
import image8 from '../assets/images/background-crew-tablet.jpg'
import image9 from '../assets/images/image-currency.jpg'
import image10 from '../assets/images/image-confetti.jpg'


export const DragAndDropSection = () => {

  const [images, setImages] = useState([image1,image2,image3,image4,image5,image6,image7,image8,image9,image10]);
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
        <div className="grid md:grid-cols-4 pt-5 grid-cols-1 sm:grid-cols-2  sm:max-w-6xl max-w-md mx-auto gap-x-5 gap-y-5">
          <SortableContext items={images} strategy={rectSortingStrategy} >  
            {images.map((image,index) => (
              <SortableItem key={index} id={image} />
            ))}
          </SortableContext>
        </div>
      </DndContext>
    </div>
  );
};

