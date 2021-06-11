// use('commerce');
db.produtos.updateMany({}, { $set: { vendasPorDia: [0, 0, 0, 0, 0, 0, 0] } });
// use('commerce');
db.produtos.updateOne({ nome: "Big Mac" }, { $inc: { "vendasPorDia.3": 60 } });
// use('commerce');
db.produtos.updateOne({ tags: { $in: ["bovino", "pão"] } }, { $inc: { "vendasPorDia.7": 120 } });
// use('commerce');
db.produtos.find({}, { _id: 0, nome: 1, vendasPorDia: 1 });
