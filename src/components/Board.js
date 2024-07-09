import React, { useContext } from "react";
import TaskContainer from "./TaskContainer";
import Task from "./Task";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { TasksContext } from "../context/TasksContext";

const Board = () => {
    const { toDoArr, inProcessArr, doneArr, onDragEnd } = useContext(TasksContext);

    return (
        <div className="flex flex-col sm:flex-row justify-around space-y-2 sm:space-y-0 border-2 border-black rounded-lg w-5/6 sm:w-2/3 h-fit sm:h-2/3 mb-4 sm:m-0 py-2 px-4 overflow-y-auto">
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="todo">
                    {(provided) => (
                        <TaskContainer
                            title={"To do"}
                            titleColor={"bg-red-200"}
                            ref={provided.innerRef}
                            droppableProps={provided.droppableProps}
                        >
                            {toDoArr.map((task, index) => (
                                <Draggable key={task.id} draggableId={task.id} index={index}>
                                    {(provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                        >
                                            <Task text={task.text} isDragging={snapshot.isDragging} />
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </TaskContainer>
                    )}
                </Droppable>

                <Droppable droppableId="inprogress">
                    {(provided) => (
                        <TaskContainer
                            title={"In progress"}
                            titleColor={"bg-blue-200"}
                            ref={provided.innerRef}
                            droppableProps={provided.droppableProps}
                        >
                            {inProcessArr.map((task, index) => (
                                <Draggable key={task.id} draggableId={task.id} index={index}>
                                    {(provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                        >
                                            <Task text={task.text} isDragging={snapshot.isDragging} />
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </TaskContainer>
                    )}
                </Droppable>

                <Droppable droppableId="done">
                    {(provided) => (
                        <TaskContainer
                            title={"Done"}
                            titleColor={"bg-green-200"}
                            ref={provided.innerRef}
                            droppableProps={provided.droppableProps}
                        >
                            {doneArr.map((task, index) => (
                                <Draggable key={task.id} draggableId={task.id} index={index}>
                                    {(provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                        >
                                            <Task text={task.text} isDragging={snapshot.isDragging} />
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </TaskContainer>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    );
};

export default Board;
