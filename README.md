# Boas vindas ao repositório do projeto de MongoDB Commerce!
---

# Sumário

- [Habilidades](#habilidades)

- [Entregáveis](#entregáveis)
  - [O que deverá ser desenvolvido](#o-que-deverá-ser-desenvolvido)
  - [Desenvolvimento](#desenvolvimento)
  - [Data de entrega](#data-de-entrega)

- [Instruções para entregar seu projeto](#instruções-para-entregar-seu-projeto)
  - [Antes de começar a desenvolver](#antes-de-começar-a-desenvolver)
  - [Durante o desenvolvimento](#durante-o-desenvolvimento)

- [Como Desenvolver](#como-desenvolver)
  - [Análise Estática](#análise-estática)
  - [Instruções para restaurar o banco de dados commerce](#instruções-para-restaurar-o-banco-de-dados-commerce)
  - [Implementações técnicas](#implementações-técnicas)
  - [Linter](#linter)

- [Requisitos do projeto](#requisitos-do-projeto)
  - [1 - Inclua o campo criadoPor em todos os documentos, colocando Ronald McDonald no valor desse campo](#1---inclua-o-campo-criadopor-em-todos-os-documentos-colocando-ronald-mcdonald-no-valor-desse-campo)
  - [2 - Inclua o campo valorUnitario em todos os documentos em que esse campo não existe e atribua a ele o valor 0.00, com o tipo NumberDecimal](#2---inclua-o-campo-valorunitario-em-todos-os-documentos-em-que-esse-campo-não-existe-e-atribua-a-ele-o-valor-0.00-com-o-tipo-numberdecimal)
  - [3 - Adicione o campo avaliacao em todos os documentos da coleção e efetue alterações nesse campo](#3---adicione-o-campo-avaliacao-em-todos-os-documentos-da-coleção-e-efetue-alterações-nesse-campo)
  - [4 - Atribua a data corrente ao campo ultimaModificacao no sanduíche Big Mac](#4---atribua-a-data-corrente-ao-campo-ultimamodificacao-no-sanduíche-big-mac)
  - [5 - Adicione ketchup aos ingredientes para todos os sanduíches menos o McChicken, garantindo que não haja duplicidade nos ingredientes](#5---adicione-ketchup-aos-ingredientes-para-todos-os-sanduíches-menos-o-mcchicken-garantindo-que-não-haja-duplicidade-nos-ingredientes)
  - [6 - Inclua bacon no final da lista de ingredientes dos sanduíches Big Mac e Quarteirão com Queijo](#6---inclua-bacon-no-final-da-lista-de-ingredientes-dos-sanduíches-big-mac-e-quarteirão-com-queijo)
  - [7 - Remova o item cebola de todos os sanduíches](#7---remova-o-item-cebola-de-todos-os-sanduíches)
  - [8 - Remova o primeiro ingrediente do sanduíche Quarteirão com Queijo](#8---remova-o-primeiro-ingrediente-do-sanduíche-quarteirão-com-queijo)
  - [9 - Remova o último ingrediente do sanduíche Cheddar McMelt](#9---remova-o-último-ingrediente-do-sanduíche-cheddar-mcmelt)
  - [10 - Adicione a quantidade de vendas dos sanduíches por dia da semana](#10---adicione-a-quantidade-de-vendas-dos-sanduíches-por-dia-da-semana)
  - [11 - Insira os elementos combo e tasty no _array_ tags de todos os sanduíches e aproveite para deixar os elementos em ordem alfabética ascendente](#11---insira-os-elementos-combo-e-tasty-no-_array_-tags-de-todos-os-sanduíches-e-aproveite-para-deixar-os-elementos-em-ordem-alfabética-ascendente)
  - [12 - Ordene em todos os documentos os elementos do _array_ valoresNutricionais pelo campo percentual de forma descendente](#12---ordene-em-todos-os-documentos-os-elementos-do-_array_-valoresnutricionais-pelo-campo-percentual-de-forma-descendente)
  - [13 - Adicione o elemento muito sódio ao final do _array_ tags nos produtos em que o percentual de sódio seja maior ou igual a 40](#13---adicione-o-elemento-muito-sódio-ao-final-do-_array_-tags-nos-produtos-em-que-o-percentual-de-sódio-seja-maior-ou-igual-a-40)
  - [14 - Adicione o elemento contém sódio ao final do _array_ tags nos produtos em que o percentual de sódio seja maior do que 20 e menor do que 40](#14---adicione-o-elemento-contém-sódio-ao-final-do-_array_-tags-nos-produtos-em-que-o-percentual-de-sódio-seja-maior-do-que-20-e-menor-do-que-40)
  - [15 - Conte quantos produtos contêm Mc no nome, sem considerar letras maiúsculas ou minúsculas](#15---conte-quantos-produtos-contêm-mc-no-nome-sem-considerar-letras-maiúsculas-ou-minúsculas)
  - [16 - Conte quantos produtos têm 4 ingredientes](#16---conte-quantos-produtos-têm-4-ingredientes)
  - [17 - Conte quantos documentos contêm as palavras frango e hamburguer utilizando o operador $text](#17---conte-quantos-documentos-contêm-as-palavras-frango-e-hamburguer-utilizando-o-operador-text)
  - [18 - Conte quantos documentos contêm a expressão feito com utilizando o operador $text](#18---conte-quantos-documentos-contêm-a-expressão-feito-com-utilizando-o-operador-text)
  - [19 - Renomeie o campo descricao para descricaoSite em todos os documentos](#19---renomeie-o-campo-descricao-para-descricaosite-em-todos-os-documentos)
  - [20 - Remova o campo curtidas do item Big Mac](#20---remova-o-campo-curtidas-do-item-big-mac)
  - [21 - Retorne o nome dos sanduíches em que o número de curtidas é maior que o número de sanduíches vendidos](#21---retorne-o-nome-dos-sanduíches-em-que-o-número-de-curtidas-é-maior-que-o-número-de-sanduíches-vendidos)
  - [22 - Retorne o nome e a quantidade de vendas (vendidos) dos sanduíches em que o número de vendas é múltiplo de 5](#22---retorne-o-nome-e-a-quantidade-de-vendas-vendidos-dos-sanduíches-em-que-o-número-de-vendas-é-múltiplo-de-5)

- [Depois de terminar o desenvolvimento (opcional)](#depois-de-terminar-o-desenvolvimento-opcional)
- [Revisando um pull request](#revisando-um-pull-request)
- [Avisos Finais](#avisos-finais)

---

# Habilidades
Neste projeto, eu fui capaz de:

  * Utilizar o método `updateOne()` e `updateMany()`

  * Utilizar os operadores `$set`, `$mul`, `$inc`, `$min`, `$max` e `$currentDate`

  * Renomear campos e remover campos

  * Incorporar dados aos documentos através de arrays

  * Utilizar os operadores `$pop`, `$pull` e `$push`
  
  * Utilizar o operador `$addToSet`

  * Utilizar os operadores `$each`, `$slice` e `$sort`

  * Utilizar o operador `$all` para filtrar documentos

  * Utilizar o operador `$elemMatch` para filtrar documentos

  * Utilizar o operador `$size` para filtrar documentos pelo tamanho de arrays

  * Utilizar o operador `$expr` para criar expressões de agregação

  * Utilizar expressões regulares e o operador `$regex` para buscar documentos

  * Utilizar o índice textual e o operador `$text`

  * Utilizar o operador `$mod`

---

## O que foi desenvolvido

Neste projeto, pude praticar todos os conceitos de **MongoDB** já ensinados até aqui pela Trybe.


A ideia foi trabalhar com o banco de dados `commerce`, que contém dados do cardápio do **McDonald's**, como ingredientes, valores nutricionais e dados fictícios de vendas. As instruções de como restaurar o banco podem ser lidas a seguir.

---

## Desenvolvimento

Temos, neste projeto, uma série de desafios com diferentes níveis de complexidade. Cada desafio foi resolvido em seu arquivo próprio.

1. Leia a pergunta e crie no diretório `challenges` um arquivo chamado `desafioN.js`, em que N é o número do desafio.

2. O arquivo há apenas o código MQL (_Mongo Query Language_) do desafio resolvido. Como no exemplo a seguir:

   ```js
   db.produtos.find();
   ```

   ⚠️ **Restrições** ⚠️:

   - **Não se deve usar aspas simples** para especificar campos e/ou valores. Quando for necessário usar aspas, **use somente aspas duplas**;
   - **Não se esquecer do ponto e vírgula (;)** no final das querys;

---

# Como Desenvolver

### Análise Estática

Foi usado o [ESLint](https://eslint.org/) para fazer a análise estática do código.

Para poder rodar os `ESLint` em um projeto basta executar o comando `npm install` dentro do projeto e depois `npm run lint`. Se a análise do `ESLint` encontrar problemas no código, tais problemas serão mostrados no seu terminal. Se não houver problema no seu código, nada será impresso no seu terminal.

Para instalar o plugin do `ESLint` no `VSCode`, bastar ir em extensions e baixar o [plugin `ESLint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

---

### Implementações técnicas

Para executar localmente os testes, é preciso escrever o seguinte no seu terminal, estando na raiz do diretório do projeto:

```sh
./scripts/evaluate.sh
```

Esse script passará por **todos os desafios** e imprimirá um relatório indicando se passou ou não para cada desafio. Como a execução do script **envolve restauração da base de dados `commerce`** de um teste para outro, recomenda-se esperar pela sua execução completa.

Para executar somente o teste de um desafio, execute o comando abaixo, substituindo N pelo númedo do desafio

```sh
./scripts/evaluate.sh desafioN
```

⚠️ Como na avaliação o banco de dados `commerce` é restaurado de um teste para outro, **se atente a fazer uso do banco restaurado na hora de fazer um desafio**. ⚠️

---
