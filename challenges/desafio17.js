// referência:
// exemplo do default language: https://stackoverflow.com/questions/33879398/create-a-mongodb-text-index-with-no-default-language
db.produtos.createIndex(
  { descricao: "text" },
  { default_language: "portuguese" },
);

db.produtos.countDocuments({ $text: { $search: "frango hamburguer" } });