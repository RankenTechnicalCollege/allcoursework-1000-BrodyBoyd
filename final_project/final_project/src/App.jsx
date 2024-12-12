import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {nanoid} from 'nanoid';
import AddRecord from './component/AddRecord';
import _ from 'lodash';
import Record from './component/Records';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlusCircle, faSearch} from '@fortawesome/free-solid-svg-icons'


function App() {
  const [allRecords, setAllRecords] = useState(null);
  const [searchResults, setSearchResults] = useState(null);
  const [keywords, setKeywords] = useState('');
  const [releaseYear, setReleaseYear] = useState('');

  useEffect (() => {
    if(localStorage) {
      const recordsLocalStorage = JSON.parse(localStorage.getItem('records'));

      if(recordsLocalStorage) {
        saveRecords(recordsLocalStorage);
      }
      else {
        saveRecords(records)
      }
    }
    ;
  }, [])

  const records = [{
    id: nanoid(),
    recordName: "Bewitched: The Godess Edition",
    artist: "Laufey",
    rating: "10/10",
    image: 'Bewitched.jpg',
    releaseYear: 2024
  }, 
  {
    id: nanoid(),
    recordName: "Everything I know about love",
    artist: "Laufey",
    rating: "10/10",
    image: 'everythingIKnowAboutLove.jpg',
    releaseYear: 2022
  }, 
  {
    id: nanoid(),
    recordName: "Typical of Me",
    artist: "Laufey",
    rating: "9.5/10",
    image: 'typicalOfMe.jpg',
    releaseYear: 2021
  },]

  const saveRecords = records => {
    setAllRecords(records);
    setSearchResults(records);
    if(localStorage) {
      localStorage.setItem('records', JSON.stringify(records));
      console.log('saved to local storage');
    }
  }

  const addRecord = (newRecord) => {
    const updatedRecords = [...allRecords, newRecord]
    saveRecords(updatedRecords)
  }

  const removeRecord = (recordToDelete) => {
    // console.table(studentToDelete);
    const updatedRecordArray = allRecords.filter(record => record.id !== recordToDelete.id)
    saveRecords(updatedRecordArray);
  }

  const updateRecord = (updatedRecord) => {
    // console.table(updatedStudent)
    const updatedRecordArray = allRecords.map(record => record.id === updatedRecord.id ? {...record, ...updatedRecord} : record)
    saveRecords(updatedRecordArray)
      }

  const searchRecords = () => {
    let keywordsArray = []

    if (keywords) {
      keywordsArray = keywords.toLowerCase().split(' ');
    }

    if (releaseYear) {
      keywordsArray.push(releaseYear.toString())
    }

    if (keywordsArray.length > 0) {
      const searchResults = allRecords.filter(record => {
        for (const word of keywordsArray) {
          if (record.recordName.toLowerCase().includes(word) || 
              record.artist.toLowerCase().includes(word) ||
              record.releaseYear === parseInt(word)) {
                return true;
              }
        }
        return false;
      });
      setSearchResults(searchResults);
    } else {
      setSearchResults(allRecords)
    }
  }

  return (
    <div className='container'>
    <div className='row' id='allRecords'>
      <h3>Records Owned</h3>
      {searchResults && searchResults.map((record) => (
      <div className='col-lg-2' key={record.id}>
        <Record record={record} removeRecord={removeRecord} updateRecord={updateRecord}/>       
      </div>)
  )}
    </div>

    {/* {!allStudents && <button type='button' className='btn btn-lg btn-success' onClick={() => setAllStudents(students)}>Save Students</button>} */}
    {<AddRecord addRecord={addRecord}/>}
    <div className='row mt-4' id='searchRecords'>
      <h3>Search For a Record</h3>
      <div className='col-md-4'>
        <label htmlFor='txtKeywords'>Search by Album or Artist Name</label>
        <input type='text' className='form-control' placeholder='Search Album or Artist Name' onChange={e => setKeywords(e.currentTarget.value)} value={keywords}/>
      </div>
      <div className='col-md-4' >
        <label htmlFor='select'>Search by Release Year</label>
        <select className='form-select' value={releaseYear} onChange={e => setReleaseYear(e.currentTarget.value)}>
          <option value=''>Select Year</option>
          {_(allRecords).map(record => record.releaseYear).sort().uniq().map(year => <option key={year} value={year}>{year}</option>).value()}
        </select>
      </div>
      <div className='col-md-4 mt-3'>
        <div></div>
        <button type='button' className='btn btn-lg btn-primary' onClick={searchRecords}>Search Records <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></button>
      </div>
    </div>
  </div>

  )
}

export default App
