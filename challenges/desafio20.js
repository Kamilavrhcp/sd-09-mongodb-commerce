// use('commerce');
db.produtos.updateOne({ nome: "Big Mac" }, { $unset: { curtidas: "" } });
// use('commerce');
db.produtos.find({}, { _id: 0, nome: 1, curtidas: 1 });
