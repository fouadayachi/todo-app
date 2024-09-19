import Checkbox from './checkbox';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

export default function TaskItem({ task, handleClick, handleRemove }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: task.idTask });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      className={`${task.completed ? 'task-item completed' : 'task-item'}`}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
    >
      {/* Prevent drag when interacting with the checkbox */}
      <div
        onPointerDown={(e) => e.stopPropagation()} // Prevent drag initiation
        onClick={(e) => e.stopPropagation()} // Prevent checkbox click from propagating
      >
        <Checkbox onHandleClick={() => handleClick(task.idTask)} task={task} />
      </div>
      <span>{task.title}</span>
      <button
        className="close"
        onClick={(e) => {
          e.stopPropagation(); // Stop the drag event
          handleRemove(task.idTask); // Call the remove function
        }}
        onPointerDown={(e) => e.stopPropagation()} // Prevent drag initiation on button press
      >
        X
      </button>
    </div>
  );
}
