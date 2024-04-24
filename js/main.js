const form = document.getElementById("form-estado");
const input = document.getElementById("input-estado");
const list = document.getElementById("list-estado");

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const estado = urlParams.get("input");

if (estado) {
  document.title = `Página do ${estado}`;

  const h2 = document.querySelector(`.info-estado`);
  h2.textContent = `Informações sobre ${estado}`;

  const nameToUpperCase = estado.toLowerCase();
  const estado = fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${nameToUpperCase}/municipios`);

  estado
    .then((response) => response.json())
    .then((data) => {
      const sprites = Object.values(data.sprites);
     

      });
}

const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
tasks.forEach((task) => addTaskToList(task));

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const text = input.value.trim();

  if (text !== "") {
    addTaskToList(text);
    tasks.push(text);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    input.value = "";
    input.focus();
  }
});

function addTaskToList(text) {
  const li = document.createElement("li");
  li.textContent = text;
  list.appendChild(li);
}
