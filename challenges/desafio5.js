// use('commerce');
db.produtos.updateMany({ nome: { $ne: "McChicken" } }, { $addToSet: { ingredientes: "ketchup" } });
// use('commerce');
db.produtos.find({}, { _id: 0, nome: 1, ingredientes: 1 });
