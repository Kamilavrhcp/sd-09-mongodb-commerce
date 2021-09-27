// use('commerce');
db.produtos.updateMany({},
  { $push: { valoresNutricionais: { $each: [], $sort: { percentual: -1 } } } });
// array vazio, pois não será necessário acrescentar nenhum valor, pois o requisito pede apenas para ordernar.
// use('commerce');
db.produtos.find({}, { _id: 0, nome: 1, valoresNutricionais: 1 });