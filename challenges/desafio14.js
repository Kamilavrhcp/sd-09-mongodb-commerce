db.produtos.updateMany(
  { "valoresNutricionais.1.percentual": { $elemMatch: { $gt: 20, $lt: 40 } } },
 { $push: { tags: "contém sódio" } },
);
db.produtos.find({}, { _id: 0, nome: 1, tags: 1 });