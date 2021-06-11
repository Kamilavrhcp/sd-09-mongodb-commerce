db.produtos.updateOne({ nome: "Big Mac" }, { $set: { ultimaModificacao: Date() } });
db.produtos.find({ ultimaModificacao: { $exists: true } }, { _id: false, nome: true });
// coloquei false para que futuramente me lembre que também pode usar tanto 0, 1 para representar dados booleanos
