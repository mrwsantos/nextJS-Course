import React from 'react'

export function getServerSideProps(){
  console.log('[SERVER] gerando props para o componente');

    return {
        props:{
            numero: Math.random()
        }
    }
}

const dinamico1 = (props) => {
  return (
    <div>
        <h1>DINAMICO</h1>
        <h2>{props.numero}</h2>
    </div>
  )
}

export default dinamico1