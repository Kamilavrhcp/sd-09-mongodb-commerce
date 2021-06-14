db.produtos.updateMany(
  {},
  { $pull: { ingredients: { $eq: "cebola" } } },
);
db.produtos.find({}, { nome: 1, ingredientes: 1, _id: 0 });
