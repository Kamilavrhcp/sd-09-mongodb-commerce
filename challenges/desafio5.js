db.produtos.updateMany(
  {
    nome: { $ne: "McChicken" },
    ingredientes: { $ne: "ketchup" },
  },
  {
    $push: { ingredientes: "ketchup" },
  },
);
db.produtos.find({ ingredientes: { $elemMatch: { $ne: "ketchup" } }});
