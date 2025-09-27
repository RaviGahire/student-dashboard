import React from 'react'
import studentData from './data.json'
import { Header } from './components/Header'
import { Announcement } from './components/Announcement'
import { StudentCard } from './components/StudentCard'

// console.log(studentData)
export const App = () => {
  return (
   <>
   <Header/>
   <Announcement />
   <StudentCard student={studentData}/>
   </>
  )
}
