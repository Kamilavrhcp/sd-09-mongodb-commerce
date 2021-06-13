db.produtos.updateMany({}, {
  $set: {
//    criadoPor: "Tonhao T9",
    criadoPor: "Ronald McDonald",
  },
});

db.produtos.find({}, {
  _id: false, nome: true, criadoPor: true,
});
