import React, { useContext, lazy, Suspense } from "react";
import TaskContainer from "./TaskContainer";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { TasksContext } from "../context/TasksContext";
import Loading from "./Loading";

const Task = lazy(() => import("./Task"));

const columns = [
    { id: "todo", title: "To do", color: "bg-red-200" },
    { id: "inprogress", title: "In progress", color: "bg-blue-200" },
    { id: "done", title: "Done", color: "bg-green-200" },
];

const Board = () => {
    const { toDoArr, inProcessArr, doneArr, onDragEnd } = useContext(TasksContext);
    const tasks = { todo: toDoArr, inprogress: inProcessArr, done: doneArr };

    return (
        <main className="animate-fade animate-duration-300 flex flex-col sm:flex-row justify-around space-y-2 sm:space-y-0 border-2 border-black dark:border-white rounded-lg w-5/6 sm:w-2/3 h-fit sm:h-2/3 mb-4 sm:m-0 py-2 px-4 overflow-y-auto">
            <DragDropContext onDragEnd={onDragEnd}>
                {columns.map(({ id, title, color }) => (
                    <Droppable key={id} droppableId={id}>
                        {(provided) => (
                            <TaskContainer
                                title={title}
                                titleColor={color}
                                ref={provided.innerRef}
                                droppableProps={provided.droppableProps}
                            >
                                <Suspense fallback={<Loading />}>
                                    {tasks[id].map((task, index) => (
                                        <Draggable key={task.id} draggableId={task.id} index={index}>
                                            {(provided, snapshot) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                >
                                                    <Task id={task.id} text={task.text} isDragging={snapshot.isDragging} />
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                </Suspense>
                                {provided.placeholder}
                            </TaskContainer>
                        )}
                    </Droppable>
                ))}
            </DragDropContext>
        </main >
    );
};

export default Board;
