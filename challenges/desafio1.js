db.produtos.updateMany({}, { $set: { criadoPor: "Ronald MacDolnald" } });
db.produtos.find({}, { _id: 0, criadoPor: 1 });
