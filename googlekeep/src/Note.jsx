import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

const Note = (props) => {
  const del = ()=>{
    props.delete(props.id)
  }
  return (
    <div>
    <div className='main-div'>
        <div className='ist'>
        <div className="content">
        <h3>{props.title}</h3>
            <p>{props.content}</p>
            <br />
            <div onClick={del} className="right">

            <DeleteIcon  className='delete' />
            </div>
        </div>
        


        </div>
    </div>
      
    </div>
  )
}

export default Note
