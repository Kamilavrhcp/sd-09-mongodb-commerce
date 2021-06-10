db.produtos.updateMany({
  valorUnitario: { $exists: false } }, { $set: { avaliacao: NumberInt(0) } });
db.produtos.find({}, { nome: 1, valorUnitario: 1, _id: 0 });