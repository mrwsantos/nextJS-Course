import React from "react";

const questao = (req, res) => {
  if (req.method === "GET") {
    get(req, res);
  } else {
    req.status(405).send();
  }

  function get(req, res){
    const id = req.query.id;

    res.status(200).json({
      id,
      enunciado: "What is your favorite color?",
      respostas: ["Red", "Blue", "Black", "Red", "Pink"],
    });
  }

  return <div>questao</div>;
};

export default questao;
