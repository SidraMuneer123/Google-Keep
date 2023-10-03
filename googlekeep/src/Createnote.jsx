import React  from 'react';
import { useState } from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const Createnote = (props) => {
  const [state , setState] =  useState({
    title:'',
    content:''

  })
  const change = (event) =>{
    const {name , value} = event.target;
    setState((olddata)=>{
      return{
        ...olddata,
        [name]: value
      }
    })
   
    

  }
  const click = ()=>{
    props.clicked(state)
    setState({
      title:'',
      content:''
  
    });

  };
  return (
    <div className='box'>
    <div className="boxx">
        <input onChange={change} value={state.title} type="text" name='title' id="" placeholder='Title' />
        <textarea onChange={change} value = {state.content} placeholder='Write the text here...' name='content' id="" cols="30" rows="3"></textarea>
        <div onClick={click} className="button">

        <AddCircleOutlineIcon  className='ok'/>
        </div>
    </div>

      
    </div>
  )
}

export default Createnote
