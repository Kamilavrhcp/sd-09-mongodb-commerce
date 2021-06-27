db.produtos.updateMany(
  {
    $addToSet: {
      tags: ["combo", "tasty"],
    },
  },
);

db.produtos.find(
  {},
  { _id: 0, nome: 1, tags: 1 },
);
