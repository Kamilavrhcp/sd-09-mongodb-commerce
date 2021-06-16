db.produtos.updateMany(
  { nomes: { $nin: ["McChicken"] }},
  { $addToSet: { ingrediente: "ketchup" } },
);

db.produtos.find({}, { _id: 0, nome: 1, ingredientes: 1 })