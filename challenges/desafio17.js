db.produtos.count(
  {
    $text: {
      $search: "frango hamburguer",
      $caseSensitive: false,
    },
  },
  {},
);
