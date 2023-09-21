import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
export function SortableItem(props) {
  useSortable({ id: props.id });
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: props.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: ".1s",
    
  };

  return (
    <div
    style={style}
    {...attributes}
    {...listeners}
    {...isDragging}
      className=" mx-auto bg-green-400 rounded-md inline h hover:scale-105">
      <img src={props.id} alt="" className=" rounded-md h-60 w-60 border    " ref={setNodeRef}
     />
    </div>
  );
}
