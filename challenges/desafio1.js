db.produtos.updateMany({}, { $set: { criadoPor: "Ronald MacDolnald" } });
db.produtos.find({}, { _id: 0, nome: 1, criadoPor: 1 });
