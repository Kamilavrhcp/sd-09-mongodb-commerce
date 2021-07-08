db.produtos.updateOne(
  { nome: "Big Mac"},
  { $currentDate: { ultimaModificacao: { $type: "date" } } },
);

db.produtos.fin(
  { ultimaModificacao: { $exists: true } },
  { nome: 1, _id: 0 },
);
