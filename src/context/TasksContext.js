import { createContext, useEffect, useState } from "react";

export const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const [toDoArr, setToDoArr] = useState([]);
    const [inProcessArr, setInProcessArr] = useState([]);
    const [doneArr, setDoneArr] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await fetch(`https://json.extendsclass.com/bin/${process.env.REACT_APP_API_KEY}`);
                const data = await response.json();
                setTasks(data);
            } catch (error) {
                console.error("Error fetching tasks:", error);
            }
        };

        fetchTasks();
    }, []);

    useEffect(() => {
        setToDoArr(tasks.filter(task => task.status === 'todo'));
        setInProcessArr(tasks.filter(task => task.status === 'inProgress'));
        setDoneArr(tasks.filter(task => task.status === 'done'));
    }, [tasks]);

    const onDragEnd = async (result) => {
        const { source, destination } = result;

        if (!destination) return;

        const sourceArr = getArrayByDroppableId(source.droppableId);
        const destinationArr = getArrayByDroppableId(destination.droppableId);

        let newTasks = [...tasks];

        if (source.droppableId === destination.droppableId) {
            const newItems = reorder(sourceArr, source.index, destination.index);
            updateArrayByDroppableId(source.droppableId, newItems);
        } else {
            const sourceItems = Array.from(sourceArr);
            const destinationItems = Array.from(destinationArr);
            const [removed] = sourceItems.splice(source.index, 1);
            destinationItems.splice(destination.index, 0, removed);
            updateArrayByDroppableId(source.droppableId, sourceItems);
            updateArrayByDroppableId(destination.droppableId, destinationItems);

            newTasks = newTasks.map(task => {
                if (task.id === removed.id) {
                    task.status = destination.droppableId === 'inprogress' ? 'inProgress' : destination.droppableId;
                }
                return task;
            });
        }

        setTasks(newTasks);

        try {
            await updateTasksOnServer(newTasks);
        } catch (error) {
            console.error("Error updating tasks:", error);
        }
    };

    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result;
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

    const updateTasksOnServer = async (tasks) => {
        const response = await fetch(`https://json.extendsclass.com/bin/${process.env.REACT_APP_API_KEY}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Security-key": "Your security key"
            },
            body: JSON.stringify(tasks)
        });

        if (!response.ok) {
            throw new Error("Failed to update tasks on the server.");
        }
    };

    return (
        <TasksContext.Provider value={{ toDoArr, inProcessArr, doneArr, onDragEnd }}>
            {children}
        </TasksContext.Provider>
    );
};
