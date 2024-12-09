import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {nanoid} from 'nanoid'
import AddStudent from './assets/AddStudent'

function App() {
  const [allStudents, setAllStudents] = useState(null);

  const students = [{
    id: nanoid(),
    firstName: "Brittan",
    lastName: "Vlasenkov",
    email: "bvlasenkov0@hatena.ne.jp",
    image: 'student1.jpg'
  }, {
    id: nanoid(),
    firstName: "Gibbie",
    lastName: "Billingham",
    email: "gbillingham1@addtoany.com",
    image: 'student2.jpg'
  }, {
    id: nanoid(),
    firstName: "Dalt",
    lastName: "Fiddiman",
    email: "dfiddiman2@meetup.com",
    image: 'student3.jpg'
  }, {
    id: nanoid(),
    firstName: "Veda",
    lastName: "Pringle",
    email: "vpringle3@independent.co.uk",
    image: 'student4.jpg'
  }, {
    id: nanoid(),
    firstName: "Hagen",
    lastName: "Bottoner",
    email: "hbottoner4@multiply.com",
    image: 'student5.jpg'
  }, {
    id: nanoid(),
    firstName: "Frank",
    lastName: "Chitty",
    email: "fchitty5@ask.com",
    image: 'student6.jpg'
  }, {
    id: nanoid(),
    firstName: "Alvinia",
    lastName: "Shalders",
    email: "ashalders6@yellowpages.com",
    image: 'student7.jpg'
  }, {
    id: nanoid(),
    firstName: "Bruno",
    lastName: "Shyres",
    email: "bshyres7@naver.com",
    image: 'student8.jpg'
  }, {
    id: nanoid(),
    firstName: "Freida",
    lastName: "Lewerenz",
    email: "flewerenz8@netvibes.com",
    image: 'student9.jpg'
  }, {
    id: nanoid(),
    firstName: "Tanney",
    lastName: "Salatino",
    email: "tsalatino9@typepad.com",
    image: 'student10.jpg'
  }]

  const addStudent = (newStudent) => {
    const updatedStudents = [...allStudents, newStudent]
    saveStudents(updatedStudents)
  }

  return (
    <div className='container'>
    <div className='row'>
      {allStudents && allStudents.map((student) => (
      <div className='col-lg-2' key={student.id}>
        <div className='card'>
        <img src={student.image} alt='Our Student' />
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>{student.firstName}</li>
          <li className='list-group-item'>{student.lastName}</li>
          <li className='list-group-item'>{student.email}</li>
        </ul>
        </div>
      </div>)
  )}
    </div>

    {!allStudents && <button type='button' className='btn btn-lg btn-success' onClick={() => setAllStudents(students)}>Save Students</button>}
    <AddStudent addStudent={addStudent}/>
  </div>

  )
}

export default App
