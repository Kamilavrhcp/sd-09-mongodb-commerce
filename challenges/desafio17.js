db.produtos.createIndex(
  { descricao: "text" },
);
db.produtos.countDocuments(
  {
    descricao: {
      $search: "frango hambuguer",
      $language: "pt",
    },
  },
);
