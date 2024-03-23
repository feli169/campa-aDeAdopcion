import React from 'react'
import Badge from 'react-bootstrap/esm/Badge'

const Tags = ({fondo , colorTex}) => {
  return (
    <div>
      <h5 className="text-center "><Badge className='border border-black' pill bg={fondo} text = {colorTex}>Adoptame</Badge></h5>
    </div>
  )
}

export default Tags