
import Link from 'next/link'
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/slice';
import { useRouter } from 'next/router';

export default function ButtonAppBar() {
//selector para traer el estado del usuario
  const user =  useSelector(selectUser)
  
  return (
    <nav className="flex w-full items-center justify-between shadow-2xl mx-auto ">
      <div>
        <Link  href={'/inicio'}>
           <h1 className=" text-black font-bold text-2xl my-4 px-20">Tasks</h1>
        </Link>
      </div>
      <div className=' flex justify-end w-full'>
        {/*operador ternario para que solo los administradores accedan a la funcion de crear tareas */}
        {user<=2 && 
        <Link href={'/inicio/new'}>
           <button className={"h-[40px] bg-blue-600 w-28 text-white rounded-[5px] text-textSize4 font-bold mx-10"}>
               New Task
           </button>
        </Link> }
        <Link href={'/login'}>
           <button className={"h-[40px] bg-blue-600 w-20 text-white rounded-[5px] text-textSize4 font-bold mx-5"}>
               Sing off
           </button>
        </Link>
     
    </div>
    </nav>
  );
}
