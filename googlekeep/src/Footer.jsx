import React from 'react'

const Footer = () => {
    let year = new Date().getFullYear();
  return (
    <div>
    <footer>
        <p className='foot'>Copyright © {year}</p>
    </footer>
      
    </div>
  )
}

export default Footer
