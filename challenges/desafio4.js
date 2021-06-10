db.produtos.updateOne(
  { nome: /big/i },
  {
    $currentDate: {
      ultimaModificacao: true,
    },
  },
);

db.produtos.find(
  {
    ultimaModificacao: {
      $exists: 1,
    },
  },
  { nome: 1, _id: 0 },
);
