db.produtos.updateMany({ valorUnitario: { $exists: false } },
  { $set: { valorUnitario: 0.00, "valorUnitario.tipo": "NumberDecimal" } });

db.produtos.find({}, { _id: 0, nome: 1, valorUnitario: 1 });
