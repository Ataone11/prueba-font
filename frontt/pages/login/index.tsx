import Arroba from '../../src/assets/login/Arroba'
import Password from '../../src/assets/login/Password'
import { ChangeEvent, useState } from "react"
import ReCAPTCHA from "react-google-recaptcha"
import { addUser } from "../../src/redux/slice"
import { store } from "../../src/redux/store"
import { useRouter } from "next/router"


//interface de modelado de los usuarios
export interface CredentialsInterface {
  username: string
  password: string
  recaptcha?: boolean
  userid?: number
}

//credenciales quemadas en este array para ingresar a la aplicacion como administrador
const admins: CredentialsInterface[] = [
  {
    username: "daniel",
    password: '123',
    userid: 1
  },
  {
    username: "administrador",
    password: '123456',
    userid: 2
  }
]
//credenciales quemadas en este array para ingresar a la aplicacion como usuario normal
export const users: CredentialsInterface[] = [
  {
    username: "daniell",
    password: '12345',
    userid: 5
  },
  {
    username: "daniela",
    password: '123456',
    userid: 4
  },
  {
    username: "user",
    password: '123456',
    userid: 6
  }
]
const Login = () => {

  const router = useRouter()
  //state para cargar usuario y contraseña 
  const [credentials, setCredentials] = useState<CredentialsInterface>({
    username: '',
    password: '',
    recaptcha: false
  })

  //set State para cargar los campos
  const handleCredentials = (e: ChangeEvent<HTMLFormElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }
  // funcion para validar el usuario, contraseña y captcha
  const validateCaptcha = async (e: any) => {
    e.preventDefault()
   
    admins.map((option:any) => {
      if(credentials && credentials.username == option.username && credentials.password == option.password && credentials.recaptcha==true){
      //dispatch para cargar el estado globarl en el store de redux
        store.dispatch(addUser(option.userid))
        
        console.log("inicio de secion exitoso como administrador")
      //redireccion de la pagina si es exitoso el login 
        router.push('/inicio')
      }else{
        users.map((option:any)=>{
          if(credentials && credentials.username == option.username && credentials.password == option.password && credentials.recaptcha==true){
            store.dispatch(addUser(option.userid))
            console.log("inicio de secion exitoso como usuario")
            
            router.push('/inicio')
          }else{
            //mensaje por consola si el logueo ah fallado
            console.log("inicio fallido")
          }
        })
      }

    })
    
  }
  
    return (
    //Formulario de logueo  
      <form
      className={`flex flex-col h-screen  w-full  items-center `  }
      onSubmit={validateCaptcha}
      onChange={handleCredentials}
    >
      <div className=" container shadow-2xl  p-10 w-[380px] h-[450px] rounded-lg  my-auto ">
      <label className=" text-2xl font-bold my-10">
           Login
      </label>
       <div className="w-full grid gap-[5px] py-5  font-semibold text-neutral-900 text-textSize7 lg:text-textSize6">
         <label  className="">
          Usuario
         </label>
       <div className="border-2 border-azulPrimary900 h-[40px] rounded-md  w-full flex items-center">
        <input
          id={"username"}
          name="username"
          placeholder="Usuario"
          className="focus:outline-none font-medium h-full text-neutral-600 w-full placeholder:text-textSize7 rounded-md placeholder:text-neutral-300"
        />
       <Arroba />
      </div>
    </div>
    <div className="w-full grid gap-[5px]  font-semibold text-neutral-900 text-textSize7 lg:text-textSize6">
      <label  className="">
      Contraseña
      </label>
      <div className="border-2 border-azulPrimary900 h-[40px] rounded-md  w-full flex items-center">
        <input
          id={"password"}
          name="password"
          type="password"
          placeholder="Contraseña"
          className="focus:outline-none font-medium h-full text-neutral-600 w-full placeholder:text-textSize7 rounded-md placeholder:text-neutral-300"
        />
       <Password />
      </div>
    </div>
      <small
        className="text-azulPrimary500 -mt-[20px] w-full text-right hover:underline cursor-pointer">
        Olvidé mi contraseña
      </small>
       {/* Recaptcha como seguridad contra bots*/} 
      <ReCAPTCHA
            sitekey="6Ld2hnQpAAAAAIeVzEkfN0j4wHAUbSAsx0o1xXv8"
            onChange={() =>
              setCredentials({
                ...credentials,
                recaptcha: true
              })
            }
            className="  my-4"
          />
      <button
      type={"submit"}
      className={"h-[30px] bg-blue-600 text-white w-full rounded-[5px] text-textSize7 font-bold"}
    >
      Iniciar sesión
    </button>
     
      </div>
      
    </form>
    )
  
 
}

export default Login
