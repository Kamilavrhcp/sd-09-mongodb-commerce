db.produtos.updateMany(
  { $or: [{ nome: { $ne: "McChicken" }, ingredientes: { $ne: "ketchup" } }] },
  { $push: { ingredientes: { $each: ["ketchup"] } } },
);

db.produtos.find(
  {},
  { nome: true, ingredientes: true, _id: false },
);