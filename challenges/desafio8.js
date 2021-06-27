// https://stackoverflow.com/questions/7227890/how-to-delete-n-th-element-of-array-in-mongodb
db.produtos.updateOne(
  { nome: "Quarteirão com Queijo" },
  { $pull: { $unset: { "ingredientes.1": "" } } },
);

db.produtos.updateOne(
  { nome: "Quarteirão com Queijo" },
  { $pull: { $pull: { ingredientes: null } } },
);

db.produtos.find(
  {},
  { _id: 0, nome: 1, ingredientes: 1 },
);
