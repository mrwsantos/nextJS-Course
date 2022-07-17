import React from 'react'

function acao1(){
    console.log('acao1');
}

const botao = () => {
  return (
    <button onClick={acao1}>botao</button>
  )
}

export default botao