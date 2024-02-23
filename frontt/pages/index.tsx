import type { NextPage } from 'next'
import BasePage from '../src/screens/general/base/BasePage'
import TaskForm from "../src/components/TaskForm";
import TasksList from "../src/components/TasksList";
import Navbar from "../src/components/Navbar";
import { Provider } from 'react-redux';


const Home: NextPage = () => {

  //pagina inicial que direcciona al login 
  if (typeof window !== 'undefined') {
    window.location.href = "/login"
  }
  
  return (
    
    <BasePage>
 
  
    </BasePage>
  )
}

export default Home
