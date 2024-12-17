import React, {useState} from 'react'
import { nanoid } from 'nanoid'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons'
import './AddRecord.css'

const $ = selector => document.querySelector(selector); 

const AddRecord = (props) => {
  const [recordName, setRecordName] = useState('')
  const [artist, setArtist] = useState('')
  const [rating, setRating] = useState('')
  const [releaseYear, setReleaseYear] = useState('')
  const [selectedFile, setSelectedFile] = useState('')

  const doWork = () => {
    const newRecord = {
      'id': nanoid(),
      'recordName': recordName,
      'artist': artist,
      'rating': rating,
      'releaseYear': parseInt(releaseYear),
      'image': URL.createObjectURL(selectedFile)
    }
    props.addRecord(newRecord)
  }

  const imageUpdate = (event) => {
    setSelectedFile(event.target.files[0])
  }
  return (
    <div className='row addRecords' id='addRecord'>
      <h3>Add Record</h3>
      <div className='col-md-2'>
        <label htmlFor='txtRecordName' className='form-label'>Album Name</label>
        <input type='text' id='txtRecordName' placeholder='Album Name' className='form-control' onChange={(event) => setRecordName(event.currentTarget.value)} value={recordName}/>
      </div>
      <div className='col-md-2'>
        <label htmlFor='txtArtist' className='form-label'>Artist Name</label>
        <input type='text' id='txtArtist' placeholder='Artist Name' className='form-control' onChange={(event) => setArtist(event.currentTarget.value)} value={artist}/>
      </div>
      <div className='col-md-2'>
        <label htmlFor='txtRating' className='form-label'>Album Rating </label>
        <input type='text' id='txtRating' placeholder='Year Purchased ' className='form-control' onChange={(event) => setRating(event.currentTarget.value)} value={rating}/>
      </div>
      <div className='col-md-2'>
        <label htmlFor='txtReleaseYear' className='form-label'>Release Year</label>
        <input type='text' id='txtReleaseYear' placeholder='2025' className='form-control' onChange={(event) => setReleaseYear(event.currentTarget.value)} value={releaseYear}/>
      </div>
      <div className='col-md-2'>
        <label htmlFor='fileUpload' className='form-label'>Album Cover</label>
        <input type='file' id='fileUpload' placeholder='Upload' className='form-control' onChange={imageUpdate}/>
      </div>
      <div className='col-md-2'>
        <button type='button' className='btn btn-success btn-lg' id='btnAdd' onClick={doWork}>Add Record <FontAwesomeIcon icon={faPlusCircle}/></button>
      </div>
      
    </div>
  )
}

export default AddRecord
