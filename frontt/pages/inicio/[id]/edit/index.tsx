import React from 'react' 
import Navbar from "../../../../src/components/Navbar"
import TaskForm from '../../../../src/components/TaskForm';
export default function index() {
  return (
    <div >
      <Navbar/>
      <div className=' mx-auto py-10'>
      <TaskForm/>
      </div>
    </div>
  )
}
