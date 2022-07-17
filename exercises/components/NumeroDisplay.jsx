import React from 'react'

const NumeroDisplay = (props) => {
  return (
    <div style={{
        height: '50px',
        lineHeight: '50px',
        width: '50px',
        borderRadius: '100px',
        backgroundColor: '#222',
        color: '#fff',
        textAlign: 'center',
        display: 'block',
        fontSize: '1.5rem', 
        margin: '15px'
    }}>{props.numero}</div>
  )
}

export default NumeroDisplay