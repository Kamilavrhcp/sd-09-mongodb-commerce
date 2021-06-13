db.produtos.updateMany({}, {
  $push: {
    tags: {
      $each: ["combo", "tasty"], $sort: 1 },
//      $each: ["combo", "tasty"]},
  },
});

db.produtos.find({}, { _id: false, nome: true, tags: true });
