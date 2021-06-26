db.produtos.updateMany(
  { valoresNutricionais: 
    { $elemMatch: { tipo: { $eq: "sódio" }, percentual: { $gt: 20, $lt: 40 } } } },
  { $push: { tags: "muito sódio" } }, 
  { upsert: true },
);
db.produtos.find({}, { _id: 0, nome: 1, tags: 1 });