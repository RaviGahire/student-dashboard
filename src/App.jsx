import React from 'react'
import studentData from './data.json'
import { Header } from './components/Header'
import { Announcement } from './components/Announcement'
import { StudentCard } from './components/StudentCard'
import { StudentList } from './components/StudentList'
import { Footer } from './components/Footer'

// console.log(studentData)
export const App = () => {
  return (
    <>
      <Header />
      <Announcement />
      <StudentCard student={studentData} />
      <div className="my-4">
        <h1 className='text-center font-bold uppercase text-3xl text-blue-500 mb-4'>from student list</h1>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 max-w-[1550px] place-items-center m-auto px-4">
          <StudentList student={studentData} />
        </div>
      </div>
      <Footer/>
    </>
  )
}
