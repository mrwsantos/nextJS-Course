import React from 'react'
import Filho from '../indireta1/Filho'

const Pai = (props) => {
  return (
    <div>Pai
        <Filho/>
    </div>
  )
}

export default Pai