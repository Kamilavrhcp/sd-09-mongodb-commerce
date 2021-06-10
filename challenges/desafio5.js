db.produtos.updateMany(
  {
    nome: { $ne: "McChicken" },
    ingredientes: { $elemMatch: { $ne: "ketchup" } },
  },
  {
    $push: { ingredientes: "ketchup" },
  },
);
db.produtos.find({}, { nome: 1, ingredientes: 1, _id: 0 });
