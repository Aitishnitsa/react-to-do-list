import React, { useState } from "react";
import TaskContainer from "./TaskContainer";
import Task from "./Task";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const Board = () => {
    const [toDoArr, setToDoArr] = useState([
        { id: "1", text: "hello world1" },
        { id: "2", text: "hello world2" },
        { id: "3", text: "hello world3" },
    ]);
    const [inProcessArr, setInProcessArr] = useState([
        { id: "4", text: "hello world4" },
        { id: "5", text: "hello world5" },
        { id: "6", text: "hello world6" },
    ]);
    const [doneArr, setDoneArr] = useState([
        { id: "7", text: "hello world7" },
        { id: "8", text: "hello world8" },
        { id: "9", text: "hello world9" },
    ]);

    const onDragEnd = (result) => {
        const { source, destination } = result;

        if (!destination) return;

        const sourceDroppableId = source.droppableId;
        const destinationDroppableId = destination.droppableId;

        const sourceArr = getArrayByDroppableId(sourceDroppableId);
        const destinationArr = getArrayByDroppableId(destinationDroppableId);

        if (sourceDroppableId === destinationDroppableId) {
            const newItems = Array.from(sourceArr);
            const [removed] = newItems.splice(source.index, 1);
            newItems.splice(destination.index, 0, removed);
            updateArrayByDroppableId(sourceDroppableId, newItems);
        } else {
            const sourceItems = Array.from(sourceArr);
            const destinationItems = Array.from(destinationArr);
            const [removed] = sourceItems.splice(source.index, 1);
            destinationItems.splice(destination.index, 0, removed);
            updateArrayByDroppableId(sourceDroppableId, sourceItems);
            updateArrayByDroppableId(destinationDroppableId, destinationItems);
        }
    };

    const getArrayByDroppableId = (id) => {
        switch (id) {
            case "todo":
                return toDoArr;
            case "inprogress":
                return inProcessArr;
            case "done":
                return doneArr;
            default:
                return [];
        }
    };

    const updateArrayByDroppableId = (id, newArray) => {
        switch (id) {
            case "todo":
                setToDoArr(newArray);
                break;
            case "inprogress":
                setInProcessArr(newArray);
                break;
            case "done":
                setDoneArr(newArray);
                break;
            default:
                break;
        }
    };

    return (
        <div className="flex flex-col sm:flex-row justify-around space-y-2 sm:space-y-0 border-2 border-black rounded-lg w-5/6 sm:w-2/3 h-fit sm:h-2/3 mb-4 sm:m-0 py-2 px-4 overflow-y-auto">
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="todo">
                    {(provided, snapshot) => (
                        <TaskContainer
                            title={"To do"}
                            titleColor={"bg-red-200"}
                            ref={provided.innerRef}
                            droppableProps={provided.droppableProps}
                        >
                            {toDoArr.map((task, index) => (
                                <Draggable key={task.id} draggableId={task.id} index={index}>
                                    {(provided, snapshot) => (
                                        <Task text={task.text} provided={provided} snapshot={snapshot} />
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </TaskContainer>
                    )}
                </Droppable>

                <Droppable droppableId="inprogress">
                    {(provided, snapshot) => (
                        <TaskContainer
                            title={"In progress"}
                            titleColor={"bg-blue-200"}
                            ref={provided.innerRef}
                            droppableProps={provided.droppableProps}
                        >
                            {inProcessArr.map((task, index) => (
                                <Draggable key={task.id} draggableId={task.id} index={index}>
                                    {(provided, snapshot) => (
                                        <Task text={task.text} provided={provided} snapshot={snapshot} />
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </TaskContainer>
                    )}
                </Droppable>

                <Droppable droppableId="done">
                    {(provided, snapshot) => (
                        <TaskContainer
                            title={"Done"}
                            titleColor={"bg-green-200"}
                            ref={provided.innerRef}
                            droppableProps={provided.droppableProps}
                        >
                            {doneArr.map((task, index) => (
                                <Draggable key={task.id} draggableId={task.id} index={index}>
                                    {(provided, snapshot) => (
                                        <Task text={task.text} provided={provided} snapshot={snapshot} />
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
