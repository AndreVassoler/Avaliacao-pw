
    const list = document.getElementById("list-estado");
  const estado = fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados`);

  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => addTaskToList(task));
    
    
function pegaEstado() {
  const text = tasks.getItem(estado);


    addTaskToList(text);
    tasks.push(text);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    li.focus();

    const li = document.createElement("li");
  li.textContent = text;
  list.appendChild(li);
}

function addTaskToList(text) {
    const p = document.createElement("p");
    p.textContent = text;
    list.appendChild(p);
  }


  


  

  


