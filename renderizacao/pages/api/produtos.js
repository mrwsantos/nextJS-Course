// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

function numeroAleatorio(min =1, max = 100000){
  return parseInt(Math.random() * (max-min)) + min
}

export default function handler(req, res) {
  res.status(200).json([
    { id:numeroAleatorio(), nome: "Caneta", preco: 5.6 },
    { id:numeroAleatorio(), nome: "Caderno", preco: 15.9 },
    { id:numeroAleatorio(), nome: "Lapis", preco: 1.2 },
    { id:numeroAleatorio(), nome: "Mapa", preco: 4.4 },
    { id:numeroAleatorio(), nome: "Tesoura", preco: 3.75 },
  ]);
}
