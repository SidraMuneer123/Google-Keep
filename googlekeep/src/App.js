import React, { useState } from 'react'
import Header from './Header'
import './googlekeep.css';
import Footer from './Footer';
import Createnote from './Createnote';
import Note from './Note';

const App = () => {
  const [arr,setArr] = useState([])
  const press = (state)=>{
    // alert('hellomoto')
    setArr((pre)=>{
      return[
        ...pre,
        state
      ]
    })
  }
  const deleteitem  = (id)=>{
    // alert('tu nai kamzor a laga la zor');
    setArr((pres)=>
      pres.filter((current , indx)=>{
        return indx !== id;
      })
    )

    }
  return (
    <div>
    <Header />
    <Footer />
    <Createnote clicked = {press}/>
    {/* <Note /> */}
    <div className="main-div">
    <div className="ist">


    {arr.map((val , index)=>{
      return <Note 
        key={index}
        id = {index}
        title = {val.title}
        content = {val.content}
        delete = {deleteitem}
      />
    })}
    </div>
    </div>
      
    </div>
  )
}

export default App
