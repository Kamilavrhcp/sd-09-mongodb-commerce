db.produtos.updateOne(
  {},
  { $pull: { "ingredientes.1": {} } },
);

db.produtos.find(
  {},
  { _id: 0, nome: 1, ingredientes: 1 },
);
