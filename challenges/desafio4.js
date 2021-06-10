db.produtos.updateOne({ nome: "Big Mac" }, { $currentDate: { ultimaModificao: true } });
db.produtos.find({ ultimaModificao: { $exists: true } });