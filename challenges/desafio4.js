db.produtos.updateOne(
  { nome: { $eq: "Big Mac" } },
  { $currentDate: { ultimaModificacao: true } },
  { upsert: true },
);

db.produtos.find({ ultimaModificacao: { $exists: true } }, { _id: 0, nome: 1 });
