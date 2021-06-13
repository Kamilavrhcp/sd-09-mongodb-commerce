/*
Crie uma query que faça a remoção do campo curtidas do item Big Mac.
Crie uma query que retorne o nome e curtidas de todos os documentos.
*/

db.produtos.updateOne({ nome: "Big Mac" }, { $unset: { curtidas: "" } });

db.produtos.find({}, { _id: false, nome: true, curtidas: true });