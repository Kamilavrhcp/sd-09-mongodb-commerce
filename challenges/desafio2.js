db.produtos.updateMany({ valorUnitario: { $exists: false } },
  { $set: { valorUnitario: { valor: 0.00, tipo: "NumberDecimal" } } });

db.produtos.find({}, { _id: 0, nome: 1, valorUnitario: 1 });
