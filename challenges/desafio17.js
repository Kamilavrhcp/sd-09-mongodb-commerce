db.produtos.createIndex({ ingredientes: "text" });

db.produtos.countDocuments({ 
  $text: {
    $search: "frango hamburguer",
    $language: "pt",
  },
});