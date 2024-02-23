import React, { useEffect, useState } from "react";
import { users } from "../../pages/login";
import { useRouter } from "next/router";

const TaskForm = () => {
  //useState para cargar las tareas y aquien seran asignadas
  const [task, setTask] = useState({
    title: "",
    description: "",
    userid:5
  });

  const [loading, setLoading] = useState(false);
  const router = useRouter()
  //para tomar query param si lo que se desea es editar una tarea ya existente
  const params = router.query.id
  //use effct para cargar las tareas cada vez que el query params cambie
  useEffect(() => {
    if (params) {
      loadTask(params);
    }
  }, [params]);
//funcion para cargar una tarea atravez del id
  const loadTask = async (id:any) => {
    const res = await fetch("http://localhost:4000/tasks/" + id);
    const data = await res.json();
    setTask({ title: data.title, description: data.description, userid: data.userid });
  };
//funcion proxi para eliminar tarea
  const handleDelete = async (id:any) => {
    try {
      await fetch(`http://localhost:4000/tasks/${id}`, {
        method: "DELETE",
      });
      
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setLoading(true);
    //funcion para actualizar tarea
    try {
      if (params) {
        const response = await fetch(
          "http://localhost:4000/tasks/" + params,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(task),
          }
        );
        await response.json();
        window.location.href = "/inicio"
      } else {
      //funcion proxy para crear tarea
        const response = await fetch("http://localhost:4000/tasks", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(task),
        });
        
        await response.json();
        window.location.href = "/inicio"
      }

      setLoading(false);

    } catch (error) {
      console.error(error);
    }
  };
  //funcion para leer y cargar el contenido del formulario en el state
  const handleChange = (e:any) =>
    setTask({ ...task, [e.target.name]: e.target.value });

  return (
    <div className=" container shadow-2xl rounded-lg flex flex-col gap-y-5 h-[400px] w-[40%] items-center justify-center mx-auto ">
      <form onSubmit={handleSubmit} className="w-[90%] lg:w-2/5">
        <h3 className="font-bold text-2xl flex my-5 text-black">
          {params ? "Update Task" : "Create Task"}
        </h3>
        <select
        name={"userid"}
        className={`w-full align-middle text-left border border-black  rounded overflow-y-auto text-[16px] my-2 h-10`}
        title={"userid"}
        onChange={handleChange}
        >
        {users.map((option) => {
          return (
            <option
              className="py-2 px-2 align-middle text-left border w-[300px] h-[46px] border-azulPrimary5 rounded-md"
              key={option.userid}
              value={option.userid}
            >
              {option.username}
            </option>
          );
        })}
        </select>
        <input
          type="text"
          name="title"
          placeholder="Write your title"
          className="border border-black p-2  rounded-md block my-2 w-full h-10"
          onChange={handleChange}
          value={task ? task.title : ""}
          autoFocus
        />
        <textarea
          name="description"
          rows={4}
          placeholder="Write your description"
          className="border border-black p-2 rounded-md block my-2 w-full"
          onChange={handleChange}
          value={task.description}
        ></textarea>

        <div className="flex justify-between">
          <button
            type="submit"
            disabled={!task.title || !task.description}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {loading
              ? 
                loading
              : "Save"}
          </button>

          {params && (
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
              onClick={() => handleDelete(params)}
            >
              Delete
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
