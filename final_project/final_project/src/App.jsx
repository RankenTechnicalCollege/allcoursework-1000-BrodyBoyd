import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {nanoid} from 'nanoid';
import AddStudent from './assets/AddStudent';
import _ from 'lodash';
import Student from './Student';

function App() {
  const [allStudents, setAllStudents] = useState(null);
  const [searchResults, setSearchResults] = useState(null);
  const [keywords, setKeywords] = useState('');
  const [gradYear, setGradYear] = useState('');

  useEffect (() => {
    saveStudents(students);
  }, [])

  const students = [{
    id: nanoid(),
    firstName: "Brittan",
    lastName: "Vlasenkov",
    email: "bvlasenkov0@hatena.ne.jp",
    image: 'student1.jpg',
    gradYear: 2024
  }, {
    id: nanoid(),
    firstName: "Gibbie",
    lastName: "Billingham",
    email: "gbillingham1@addtoany.com",
    image: 'student2.jpg',
    gradYear: 2024
  }, {
    id: nanoid(),
    firstName: "Dalt",
    lastName: "Fiddiman",
    email: "dfiddiman2@meetup.com",
    image: 'student3.jpg',
    gradYear: 2024
  }, {
    id: nanoid(),
    firstName: "Veda",
    lastName: "Pringle",
    email: "vpringle3@independent.co.uk",
    image: 'student4.jpg',
    gradYear: 2024
  }, {
    id: nanoid(),
    firstName: "Hagen",
    lastName: "Bottoner",
    email: "hbottoner4@multiply.com",
    image: 'student5.jpg',
    gradYear: 2024
  }, {
    id: nanoid(),
    firstName: "Frank",
    lastName: "Chitty",
    email: "fchitty5@ask.com",
    image: 'student6.jpg',
    gradYear: 18
  }, {
    id: nanoid(),
    firstName: "Alvinia",
    lastName: "Shalders",
    email: "ashalders6@yellowpages.com",
    image: 'student7.jpg',
    gradYear: 2021
  }, {
    id: nanoid(),
    firstName: "Bruno",
    lastName: "Shyres",
    email: "bshyres7@naver.com",
    image: 'student8.jpg',
    gradYear: 2024
  }, {
    id: nanoid(),
    firstName: "Freida",
    lastName: "Lewerenz",
    email: "flewerenz8@netvibes.com",
    image: 'student9.jpg',
    gradYear: 2023
  }, {
    id: nanoid(),
    firstName: "Tanney",
    lastName: "Salatino",
    email: "tsalatino9@typepad.com",
    image: 'student10.jpg',
    gradYear: 2024
  }]

  const saveStudents = students => {
    setAllStudents(students);
    setSearchResults(students);
  }

  const addStudent = (newStudent) => {
    const updatedStudents = [...allStudents, newStudent]
    saveStudents(updatedStudents)
  }

  const removeStudent = (studentToDelete) => {
    console.table{studentToDelete};
  }

  const searchStudents = () => {
    let keywordsArray = []

    if (keywords) {
      keywordsArray = keywords.toLowerCase().split(' ');
    }

    if (gradYear) {
      keywordsArray.push(gradYear.toString())
    }

    if (keywordsArray.length > 0) {
      const searchResults = allStudents.filter(student => {
        for (const word of keywordsArray) {
          if (student.firstName.toLowerCase().includes(word) || 
              student.lastName.toLowerCase().includes(word) ||
              student.gradYear === parseInt(word)) {
                return true;
              }
        }
        return false;
      });
      setSearchResults(searchResults);
    } else {
      setSearchResults(allStudents)
    }
  }

  return (
    <div className='container'>
    <div className='row'>
      {searchResults && searchResults.map((student) => (
      <div className='col-lg-2' key={student.id}>
       
      </div>)
  )}
    </div>

    {/* {!allStudents && <button type='button' className='btn btn-lg btn-success' onClick={() => setAllStudents(students)}>Save Students</button>} */}
    {<AddStudent addStudent={addStudent}/>}
    <div className='row mt-4'>
      <div className='col-md-4'>
        <label htmlFor='txtKeywords'>Search by First or Last Name</label>
        <input type='text' className='form-control' placeholder='Search First or Last Name' onChange={e => setKeywords(e.currentTarget.value)} value={keywords}/>
      </div>
      <div className='col-md-4' >
        <select className='form-select' value={gradYear} onChange={e => setGradYear(e.currentTarget.value)}>
          <option value=''>Select Year</option>
          {_(allStudents).map(student => student.gradYear).sort().uniq().map(year => <option key={year} value={year}>{year}</option>).value()}
        </select>
      </div>
      <div className='col-md-4'>
        <button type='button' className='btn btn-lg btn-primary' onClick={searchStudents}>Search</button>
      </div>
    </div>
  </div>

  )
}

export default App
