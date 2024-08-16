import { createContext, useEffect, useState } from "react";

export const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
  const URI = `https://${process.env.REACT_APP_PROJECT_TOKEN}.mockapi.io/tasks`;
  const [tasks, setTasks] = useState([]);
  const [toDoArr, setToDoArr] = useState([]);
  const [inProcessArr, setInProcessArr] = useState([]);
  const [doneArr, setDoneArr] = useState([]);

  const fetchTasks = async () => {
    try {
      const response = await fetch(URI, {
        method: "GET",
        headers: { "content-type": "application/json" },
      });
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };
  useEffect(() => {
    fetchTasks();
  }, []);

  useEffect(() => {
    if (tasks && tasks.length > 0) {
      setToDoArr(tasks.filter((task) => task.status === "todo"));
      setInProcessArr(tasks.filter((task) => task.status === "inprogress"));
      setDoneArr(tasks.filter((task) => task.status === "done"));
    }
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

      newTasks = newTasks.map((task) => {
        if (task.id === removed.id) {
          task.status =
            destination.droppableId === "inprogress"
              ? "inprogress"
              : destination.droppableId;
          updateTaskOnServer(task);
        }
        return task;
      });
    }

    setTasks(newTasks);
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

  const updateTaskOnServer = async (task) => {
    const response = await fetch(`${URI}/${task.id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    if (!response.ok) {
      throw new Error("Failed to update task on the server.");
    }

    return await response.json();
  };

  const addTasksOnServer = async (task) => {
    const response = await fetch(URI, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    if (!response.ok) {
      throw new Error("Failed to update tasks on the server.");
    }

    return await response.json();
  };

  const deleteTaskOnServer = async (id) => {
    const response = await fetch(`${URI}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to update task on the server.");
    }

    return await response.json();
  };

  const addTask = async (newTask) => {
    try {
      await addTasksOnServer(newTask);
      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);
      await fetchTasks();
    } catch (error) {
      console.error("Error adding new task:", error);
    }
  };

  const deleteTask = async (task) => {
    try {
      await deleteTaskOnServer(task);
      const updatedTasks = [...tasks, task];
      setTasks(updatedTasks);
      await fetchTasks();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <TasksContext.Provider
      value={{ toDoArr, inProcessArr, doneArr, onDragEnd, addTask, deleteTask }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
