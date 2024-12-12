import React, {useState, useEffect} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFloppyDisk, faMagicWandSparkles, faPlusCircle, faWarning} from '@fortawesome/free-solid-svg-icons'


const Record = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [recordName, setRecordName] = useState('');
  const [artist, setArtist] = useState('');
  const [rating, setRating] = useState('');
  const [releaseYear, setReleaseYear] = useState('');

  useEffect(() => {
    setRecordName(props.record.recordName);
    setArtist(props.record.artist);
    setRating(props.record.rating);
    setReleaseYear(props.record.releaseYear);
  }, [])

  const saveRecord = () => {
    setEditMode(false);
    const updatedRecord = {recordName: recordName, artist: artist, rating: rating, releaseYear: releaseYear, id: props.record.id, image: props.record.image};
    props.updateRecord(updatedRecord)
  }
  return (
       <div className='card'>
        <img src={props.record.image} alt='Our Student' className='card-image-top mx-auto'/>
        { !editMode && <ul className='list-group list-group-flush'>
          <li className='list-group-item text-center'>{props.record.recordName}</li>
          <li className='list-group-item text-center'>{props.record.artist}</li>
          <li className='list-group-item text-center'>{props.record.rating}</li>
          <li className='list-group-item text-center'>{props.record.releaseYear}</li>
          <button type='button' className='btn btn-danger' onClick={() => props.removeRecord(props.record)}>Delete Album <FontAwesomeIcon icon={faWarning}/></button>
          <button type='button' className='btn btn-warning' onClick={() => setEditMode(true)}>Edit Album <FontAwesomeIcon icon={faMagicWandSparkles}/></button>
        </ul>
        }
        { editMode && <ul className='list-group list-group-flush'>
          <li className='list-group-item text-center'><input type='text' className='form-control' value={recordName} onChange={(e) => setRecordName(e.currentTarget.value)} /></li>
          <li className='list-group-item text-center'><input type='text' className='form-control' value={artist} onChange={(e) => setArtist(e.currentTarget.value)} /></li>
          <li className='list-group-item text-center'><input type='text' className='form-control' value={rating} onChange={(e) => setRating(e.currentTarget.value)} /></li>
          <li className='list-group-item text-center'><input type='text' className='form-control' value={releaseYear} onChange={(e) => setReleaseYear(e.currentTarget.value)} /></li>
          <li className='list-group-item text-center'><button type='button' className='btn btn-secondary' onClick={saveRecord}>Save <FontAwesomeIcon icon={faFloppyDisk}/></button></li>
        </ul>
        }
        
        </div>
  )
}

export default Record
