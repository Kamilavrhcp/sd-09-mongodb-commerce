db.produtos.updateMany(
  { $set: { vendasPorDia: { $each: [0, 0, 0, 0, 0, 0, 0] } } },
);

db.produtos.updateOne(
  { nome: "Big Mac" },
  { $push: { $each: [{ $inc: { vendasPorDia: 60 } }], $position: 4 } },
);

db.produtos.updateOne(
  { $all: { tags: { $in: ["bovino", "pão"] } } },
  { $push: { $each: [{ $inc: { vendasPorDia: 120 } }], $position: 7 } },
);

db.produtos.find({}, { _id: 0, nome: 1, vendasPorDia: 1 });