db.produtos.updateOne(
  { nome: "Big Mac" },
  { $currentDate: { ultimaMoficacao: true } }
);

db.produtos.find({ ultimaModificacao: { $exists: true } }, { _id: 0, nome: 1 });