import { useState, useEffect } from "react";
import TaskCard from "./TaskCard";
import { selectUser } from "../redux/slice";
import { useSelector } from "react-redux";

const TasksList = () => {
  const [tasks, setTasks] = useState([]);
  const user =  useSelector(selectUser)
  const loadTasks = async () => {
    const response = await fetch("http://localhost:4000/tasks");
    const data = await response.json();
    console.log(data);
    setTasks(data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    //listar las tareas creadas por los administradores
    <>
    <div className=" container flex flex-row mx-auto justify-center">
    <div className=" bg-slate-200 p-3 rounded-lg shadow-lg px-2 md:px-10 my-2 hover:cursor-pointer  flex w-[80%] justify-between mx-auto">
      <h3 className="font-bold text-xl flex mx-2 md:mx-6">Title</h3>
       <p className="flex mx-6">Description</p>
      <p  className="flex mx-2 md:mx-6">User</p>
    </div>
    </div>
     {/* map para pintar todas las tareas
       */} 
      {tasks.map((task:any) => (
         <TaskCard key={task.id} task={task} /> 
      ))}
    </>
  );
};

export default TasksList;
