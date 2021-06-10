db.produtos.updateMany({ }, { $set: { valorUnitario: 0 } });
db.produtos.find({}, { nome: 1, valorUnitario: 1, _id: 0 });