export default function handler(req, res) {
  const id = + req.query.id;

  res.status(200).json({
    id: id,
    nome: `Jao Doce ${id}`,
    email: `jaodoce${id}@gmail.com`,
  });
}
