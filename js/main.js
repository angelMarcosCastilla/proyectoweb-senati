const frases = [
  {
    frase: "Los perros no son toda tu vida, pero hacen tu vida completa",
    autor: "Roger Caras",
  },
  {
    frase:
      "Un perro es la única cosa en la Tierra que te amará más de lo que tú te amas a ti mismo",
    autor: "Josh Billings",
  },
  {
    frase:
      "La grandeza de una nación y su progreso moral puede ser juzgado por la forma en que sus animales son tratados.",
    autor: "Gandhi",
  },
  {
    frase:
      "El mundo sería un lugar más agradable si todos tuvieran la capacidad de amar tan incondicionalmente como un perro",
    autor: "M.K. Clinton",
  },
];

let i = 0;

$("#frase").html(`"${frases[i].frase}"`);
$("#autor").html(` - ${frases[i].autor}`);
i++;

setInterval(() => {
  if (i == frases.length) i = 0;

  $("#frase").html(`"${frases[i].frase}"`);
  $("#autor").html(` - ${frases[i].autor}`);

  i++;
}, 6000);
