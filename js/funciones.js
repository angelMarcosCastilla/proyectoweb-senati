

const removeClass = () => {
  $filterItem.forEach((el) => el.classList.remove("filter-item--active"));
};

function filtrarBusqueda() {
  removeClass();
  this.classList.add("filter-item--active");
  let filterName = this.textContent;

  $card.forEach((card) => {
    let especie = card.dataset.especie;

    if (filterName === "todos") {
      card.classList.remove("card--hidden");
    } else {
      if (filterName !== especie) {
        card.classList.add("card--hidden");
      } else {
        card.classList.remove("card--hidden");
      }
    }
  });
}

const alertMensaje = (clase, mensaje) => {
  const $alert = document.getElementById("alert");
  $alert.classList.add("alert--ative")
  $alert.classList.add(clase)
  $alert.textContent = mensaje
  setTimeout(() => {
    $alert.classList.remove("alert--ative")
    $alert.classList.remove(clase)
  }, 2000);
};
