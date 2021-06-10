db.produtos.updateMany(
  {},
  { $set: { avaliacao: NumberInt("0") } },
);

db.produtos.updateMany(
  {
    tags: {
      $in: [/bov/i],
    },
  },
  {
    $inc: {
      avaliacao: 5,
    },
  },
);

db.produtos.updateMany(
  {
    tags: {
      $in: [/ave/i],
    },
  },
  {
    $inc: {
      avaliacao: 3,
    },
  },
);

db.produtos.find(
  {},
  { nome: 1, avaliacao: 1, _id: 0 },
);
