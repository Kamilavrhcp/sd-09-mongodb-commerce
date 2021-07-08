db.produtos.updateMany({}, { $push: { vendasPorDia: { $each: [0, 0, 0, 0, 0, 0, 0] } } }); // NumberInt("0") talvez, tb nao sei se faria diferenca
// db.produtos.updateMany( {}, { $set: { vendasPorDia: [0, 0, 0, 0, 0, 0, 0] } }); | diferenca? nao faco a minima ideia...

db.produtos.updateMany({ nome: "Big Mac" }, { $set: { "vendasPorDia.3": 60 } });
// '.updateOne()' talvez seria melhor aki, mas como o collection é pequena, noa importa muito

db.produtos.updateMany({ tags: { $in: ["bovino", "pão"] } }, { $set: { "vendasPorDia.6": 120 } });

db.produtos.find({}, { _id: 0, nome: 1, vendasPorDia: 1 });