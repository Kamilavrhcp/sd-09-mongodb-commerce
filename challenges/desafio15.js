// referências sobre expressões regulares do regex:
// pesquisado expressões regulares em: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions
// expemplo de uso específico para o solicitado no requisito: https://github.com/tryber/sd-09-mongodb-commerce/pull/56/files
db.produtos.countDocuments({ nome: { $regex: /.*Mc.*/i } });