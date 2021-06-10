db.produtos.count(
  {
    $text: {
      $search: "\"feito com\"",
      $caseSensitive: false,
    },
  },
  {},
);
