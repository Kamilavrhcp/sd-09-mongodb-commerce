db.produtos.updateMany(
  {},
  { $set: { avaliacao: NumberInt("0") } },
);

db.produtos.updateMany(
  { tags: "bovino" },
  { $inc: { avaliacao: 5 } },
);

db.produtos.updateMany(
  { tags: "ave" },
  { $inc: { avaliacao: 3 } },
);
