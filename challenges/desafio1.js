db.produtos.updateMany({}, { $set: { criadoPor: "RonaldMcDonald" } });
db.produtos.find({}, { criadoPor: 1, nome: 1, _id: 0 });