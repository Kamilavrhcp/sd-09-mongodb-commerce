db.produtos.updateMany({},
  { $push: { "valoresNutricionais.percentual": { $each: [], $sort: -1 } } });

db.produtos.find({}, { nome: 1, valoresNutricionais: 1, _id: 0 });
