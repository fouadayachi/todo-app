import Checkbox from './checkbox';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

export default function TaskItem({ task, handleClick, handleRemove }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: task.idTask });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  const preventDragStart = (e) => {
    e.stopPropagation(); // Prevent drag initiation
  };

  return (
    <div
      className={`${task.completed ? 'task-item completed' : 'task-item'}`}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
    >
      {/* Prevent drag when interacting with the checkbox on both desktop and mobile */}
      <div
        onPointerDown={preventDragStart} // Prevent drag initiation on pointer devices
        onClick={(e) => e.stopPropagation()} // Prevent checkbox click from propagating
        onTouchStart={preventDragStart} // Prevent drag initiation on touch devices
      >
        <Checkbox onHandleClick={() => handleClick(task.idTask)} task={task} />
      </div>
      <span>{task.title}</span>
      <button
        className="close"
        onClick={(e) => {
          e.stopPropagation(); // Stop the event propagation for desktop
          handleRemove(task.idTask); // Call the remove function
        }}
        onPointerDown={preventDragStart} // Prevent drag initiation on button press for desktop
        onTouchStart={preventDragStart} // Prevent drag initiation on button press for touch devices
      >
        X
      </button>
    </div>
  );
}
