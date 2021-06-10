db.produtos.updateMany(
    { valorUnitario: { $exists: 0 } },
    { $set: { valorUnitario: NumberDecimal("0.00") } },
);
db.produtos.find({ valorUnitario: { $exists: 1 } });