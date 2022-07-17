import React from 'react'
import Pessoa from '../../components/Pessoa'

const exemplo = () => {
  return (
      <div>
          <Pessoa nome="dudu" idade={30}/>
          <Pessoa nome="renan" />
      </div>
  )
}

export default exemplo