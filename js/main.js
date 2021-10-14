
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

const $frase = document.getElementById("frase");
const $autor = document.getElementById("autor");
const $filterItem = document.querySelectorAll(".filter-item");
const $card = document.querySelectorAll(".card");
const $form = document.getElementById("form");
const expresiones = {
  email: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/
}
let i = 0;

$frase.textContent = `"${frases[i].frase}"`;
$autor.textContent = ` - ${frases[i].autor}`;

i++;
setInterval(() => {
  if (i === frases.length) i = 0;

  $frase.textContent = `"${frases[i].frase}"`;
  $autor.textContent = ` - ${frases[i].autor}`;

  i++;
}, 6000);

$filterItem.forEach((el) => {
  el.addEventListener("click", filtrarBusqueda);
});

$form.addEventListener("submit", (e) => {
  e.preventDefault();
  const correo = $form["email"].value.trim();
  const mensaje = $form["mensaje"].value.trim();

  if (mensaje === "" || correo === "") {
    alertMensaje("warning", "hay campos vacios");
  }else{
    if(!expresiones.email.test(correo)){
      alertMensaje("error", "Correo no valido");
    }else{
      alertMensaje("success", "Se envio correctamente su mensaje");
    }
  }

});
