db.produtos.updateMany({}, { $set: { valorUnitario: NumberDecimal("0.0") } });
db.produtos.find({}, { _id: 0, nome: 1, valorUnitario: 1 });
