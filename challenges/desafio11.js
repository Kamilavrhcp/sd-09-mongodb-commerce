db.produtos.updateMany(
  {},
  {
    $push: {
      tags: {
        $each: ["combo", "tasty"],
        $sort: true,
      },
    },
  },
);

db.produtos.find({}, { _id: false, nome: true, tags: true });
