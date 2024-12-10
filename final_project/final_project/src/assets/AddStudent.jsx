import React, {useState} from 'react'
import { nanoid } from 'nanoid'

const AddStudent = (props) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [gradYear, setGradYear] = useState('')
  const [selectedFile, setSelectedFile] = useState('')

  const doWork = () => {
    const newStudent = {
      'id': nanoid(),
      'firstName': firstName,
      'lastName': lastName,
      'email': email,
      'gradYear': parseInt(gradYear),
      'image': URL.createObjectURL(selectedFile)
    }
    props.addStudent(newStudent)
  }

  const imageUpdate = (event) => {
    setSelectedFile(event.target.files[0])
  }
  return (
    <div className='row'>
      <div className='col-md-2'>
        <label htmlFor='txtFirstName' className='form-label'>First Name</label>
        <input type='text' id='txtFirstName' placeholder='First Name' className='form-control' onChange={(event) => setFirstName(event.currentTarget.value)} value={firstName}/>
      </div>
      <div className='col-md-2'>
        <label htmlFor='txtLastName' className='form-label'>Last Name</label>
        <input type='text' id='txtLastName' placeholder='Last Name' className='form-control' onChange={(event) => setLastName(event.currentTarget.value)} value={lastName}/>
      </div>
      <div className='col-md-2'>
        <label htmlFor='txtEmail' className='form-label'>Email Address</label>
        <input type='text' id='txtEmail' placeholder='Email Address' className='form-control' onChange={(event) => setEmail(event.currentTarget.value)} value={email}/>
      </div>
      <div className='col-md-2'>
        <label htmlFor='txtGradYear' className='form-label'>Graduation Year</label>
        <input type='text' id='txtGradYear' placeholder='2025' className='form-control' onChange={(event) => setGradYear(event.currentTarget.value)} value={gradYear}/>
      </div>
      <div className='col-md-2'>
        <label htmlFor='fileUpload' className='form-label'>Student Image</label>
        <input type='file' id='fileUpload' placeholder='Upload' className='form-control' onChange={imageUpdate}/>
      </div>
      <div className='col-md-2'>
        <button type='button' className='btn btn-success btn-lg' id='btnAdd' onClick={doWork}>Add Student</button>
      </div>
      
    </div>
  )
}

export default AddStudent