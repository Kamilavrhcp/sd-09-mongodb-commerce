db.produtos.updateMany(
  { nome: { $eq: "Big Mac" } },
  { $unset: { curtidas: "" } },
);

db.produtos.find({}, { _id: 0, nome: 1, curtidas: 1 }).pretty();
