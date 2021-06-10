db.produtos.updateMany(
  {
    nome: {
      $in: [/big/i, /quart/i],
    },
  },
  {
    $push: {
      ingredientes: "bacon",
    },
  },
);

db.produtos.find(
  {
    
  },
  { _id: 0, nome: 1, ingredientes: 1 },
);
