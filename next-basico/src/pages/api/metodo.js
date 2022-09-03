import React from 'react'

export default (req, res) => {
  console.log(res);
  if(req.method === "GET"){
    res.status(200).json({
      nome: "Dudu"
    })
    
  }else{
    res.status(200).json({
      nome: "Diolandia"
    })
  }
}