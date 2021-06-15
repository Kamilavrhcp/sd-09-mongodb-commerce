db.produtos.updateMany({}, { $set: { avaliacao: NumberInt("0") } }, { upsert: true });

db.produtos.updateMany(
  {
    tags:
    { 
      $elemMatch: { $eq: "bovino" },
    },
  }, { $set: { avaliacao: 5 } },
  );

db.produtos.updateMany(
  {
    tags:
    { 
      $elemMatch: { $eq: "ave" },
    },
  }, { $set: { avaliacao: 3 } },
  );

  db.produtos.find({}, { _id: 0, nome: 1, avaliacao: 1 });
