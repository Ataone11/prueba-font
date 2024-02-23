
import Link from "next/link";
import { users } from "../../pages/login";
import { selectUser } from "../redux/slice";
import { useSelector } from "react-redux";

function TaskCard({ task }) {
//selector para cargar la variable global para saber si el usuario es administrador o corriente
  const user =  useSelector(selectUser)
return (
<div className=" container flex flex-row mx-auto justify-center">
   {/* operador ternario para diferenciar y que solo los administradores puedan editar las tareas*/} 
   {user<=2 ?
   <Link href={`/inicio/${task.id}/edit`}>

    <div className="bg-white p-3 rounded-lg shadow-lg px-2 lg:px-10 my-2 hover:cursor-pointer hover:bg-slate-300 flex w-[80%] justify-between">
       <h3 className="font-bold base md:text-xl flex mx-6">{task.title}</h3>
          <p className="flex mx-6">{task.description}</p>
           {users.find((id)=> id.userid===task.userid)?.username}
    </div>
    </Link> : 
    <div className="bg-white p-3 rounded-lg shadow-lg px-2 lg:px-10 my-2  hover:bg-slate-300 flex w-[80%] justify-between">
       <h3 className="font-bold text-base md:text-xl flex mx-6">{task.title}</h3>
         <p className="flex mx-6">{task.description}</p>
        {users.find((id)=> id.userid===task.userid)?.username}
  
  
    </div>
    }
      
</div>
  );
}

export default TaskCard;
