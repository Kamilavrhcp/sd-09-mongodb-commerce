db.produtos.updateMany({ valoresNutricionais: { $elemMatch: { $and: [{ percentual: { $gte: 40 } },
    { tipo: "sódio" }] } } }, { $push: { tags: "muito sódio" } });
db.produtos.find({}, { _id: false, nome: true, tags: true });
