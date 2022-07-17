import React from 'react'

interface PessoaProps{
    nome: String
    idade?: Number
}

const Pessoa = (props: PessoaProps) => {
  return (
    <div>
        <div>Nome: {props.nome}</div>
        <div>Idade: {props.idade ?? 'Nao informada'}</div>
        <hr />
    </div>
  )
}

export default Pessoa