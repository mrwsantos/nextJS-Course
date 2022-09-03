import React from "react";

const usuarios = [];
const form = (req, res) => {
  if (req.method === "POST") {
    post(req, res);
  } else if (req.method === "GET") {
    get(req, res);
  }else{
      res.status(405).send()
  }

  res.status(200).json({
    dados: JSON.parse(req.body),
  });
};

function post(req, res) {
  const usuario = JSON.parse(req.body);
  usuarios.push(usuario);

  res.status(200).send();
}
function get(req, res) {
  res.status(200).json(usuarios);
}

export default form;
