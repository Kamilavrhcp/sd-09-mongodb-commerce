// use('commerce');
db.produtos.updateMany(
  {},
  { $set: { avaliacao: 0 } },
);

// use('commerce');
db.produtos.updateMany(
  { tags: { $all: ["bovino"] } },
  { $inc: { avaliacao: 5 } },
);

// use('commerce');
db.produtos.updateMany(
  { tags: { $all: ["ave"] } },
  { $inc: { avaliacao: 3 } },
);

// use('commerce');
db.produtos.find(
  {},
  { _id: 0, nome: 1, avaliacao: 1 },
);
