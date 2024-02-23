 import React from 'react' 
 import Navbar from "../../src/components/Navbar"
 import BasePage from '../../src/screens/general/base/BasePage'
import TaskForm from "../../src/components/TaskForm";
import TasksList from "../../src/components/TasksList";

 export default function index() {
   return (
     <div className=' '>
         <Navbar/>
         <TasksList/>
     </div>
   )
 }
 