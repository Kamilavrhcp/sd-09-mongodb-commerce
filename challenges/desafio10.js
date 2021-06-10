db.produtos.updateMany({},
  {
    $push: { vendasPorDia: { $each: [0, 0, 0, 0, 0, 0, 0] } },
  });

  db.produtos.updateOne({
    nome: "Big Mac",
    },
    {
      $inc: { vendasPorDia: {
        $each: [60],
        $position: 3,
      },
    },
    });

    db.produtos.updateMany({
      tags: { $in: ["bovino", "pão"] },
      },
      {
        $inc: { vendasPorDia: {
          $each: [120],
          $position: 6,
        },
      },
      });

db.produtos.find({ }, { nome: 1, vendasPorDia: 1, _id: 0 });