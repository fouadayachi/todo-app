import { useState } from "react";
import "./App.css";
import AddTask from "./Add-task";
import TaskItem from "./Task-item";
import Moon from "./moon";
import Sun from "./Sun";
import Details from "./details";
import { useMediaQuery } from "react-responsive";
import { closestCorners, DndContext, KeyboardSensor, PointerSensor, TouchSensor, useSensor, useSensors } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import useLocalStorage from "./useLocalStorage";

let id = 1;

function Main() {
  const [tasks, setTasks] = useState([]);
  const completed = tasks.filter((task) => task.completed);
  const active = tasks.filter((task) => !task.completed);
  const [taskState, setTaskState] = useState("all");
  const [mode, setMode] = useLocalStorage("theme","moon");
  const isMobile = useMediaQuery({ query: "(max-width: 500px)" });

  function addNewTask(newTask) {
    const task = {
      idTask: id++,
      title: newTask,
      completed: false,
    };
    setTasks([...tasks, task]);
  }

  function toggleTaskCompletion(taskId) {
    const updatedTasks = tasks.map((task) =>
      task.idTask === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  }

  function removeTask(taskId) {
    const updatedTasks = tasks.filter((task) => task.idTask !== taskId);
    setTasks(updatedTasks);
  }

  function changeTaskState(state) {
    setTaskState(state);
  }

  function removeCompleted() {
    const updatedTasks = tasks.filter((task) => !task.completed);
    setTasks(updatedTasks);
  }

  function changeMode() {
    const newMode = mode === "moon" ? "sun" : "moon";
    setMode(newMode);
  }

  const getPosition = (id) => {
    return tasks.findIndex((task) => task.idTask === id);
  };

  function handleDrag(event) {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    const currentPosition = getPosition(active.id);
    const overPosition = getPosition(over.id);

    setTasks((tasks) => arrayMove(tasks, currentPosition, overPosition));
  }
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, { coordinateGetter : sortableKeyboardCoordinates}),
  )

  const currentTasks =
    taskState === "all" ? tasks : taskState === "active" ? active : completed;

  return (
    <div className={`container ${mode === "sun" ? "light-mode" : "dark-mode"}`}>
      <div className="todo">
        <div className="heading">
          <h1>T O D O</h1>
          {mode === "sun" ? (
            <Moon changeMode={changeMode} />
          ) : (
            <Sun changeMode={changeMode} />
          )}
        </div>
        <AddTask handleAddTask={addNewTask} />
        <div className="items">
          <DndContext
            collisionDetection={closestCorners}
            onDragEnd={handleDrag}
            sensors={sensors}
          >
            <SortableContext
              items={currentTasks.map((task) => task.idTask)} // Pass task IDs
              strategy={verticalListSortingStrategy}
            >
              {currentTasks.map((task) => (
                <TaskItem
                  key={task.idTask}
                  task={task}
                  handleClick={toggleTaskCompletion}
                  handleRemove={removeTask}
                />
              ))}
            </SortableContext>
          </DndContext>
          <div className="tasks-details">
            <span>{active.length} items left</span>
            {!isMobile && (
              <Details
                taskState={taskState}
                changeTaskState={changeTaskState}
              />
            )}
            <button onClick={removeCompleted}>Clear completed</button>
          </div>
        </div>
        {isMobile && (
          <Details taskState={taskState} changeTaskState={changeTaskState} />
        )}
      </div>
    </div>
  );
}

export default Main;
