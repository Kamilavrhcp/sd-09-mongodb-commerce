db.produtos.updateMany(
  {
    nome: /melt/i,
  },
  {
    $pop: {
      ingredientes: 1,
    },
  },
);

db.produtos.find(
  {},
  { _id: 0, nome: 1, ingredientes: 1 },
);
