// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
document.addEventListener("DOMContentLoaded", () => {
  const inputAmigo = document.getElementById("amigo");
  const listaAmigos = document.getElementById("listaAmigos");
  const resultadoLista = document.getElementById("resultado");
  inputAmigo.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      agregarAmigo();
    }
  });
  

  let amigos = [];

  window.agregarAmigo = function () {
    const nombre = inputAmigo.value.trim();

    if (nombre === "") {
      alert("⚠️ Por favor, inserte un nombre.");
      return;
    }

    if (amigos.includes(nombre)) {
      alert("⚠️ Este nombre ya está en la lista.");
      return;
    }

    amigos.push(nombre);

    actualizarLista();

    inputAmigo.value = "";
    inputAmigo.focus();
  };

  function actualizarLista() {
    listaAmigos.innerHTML = "";

    amigos.forEach((amigo, index) => {
      const li = document.createElement("li");
      li.textContent = amigo;
      li.classList.add("name-item");

      const btnEliminar = document.createElement("button");
      btnEliminar.textContent = "❌";
      btnEliminar.classList.add("delete-button");
      btnEliminar.onclick = () => eliminarAmigo(index);

      li.appendChild(btnEliminar);
      listaAmigos.appendChild(li);
    });
  }

  function eliminarAmigo(index) {
    amigos.splice(index, 1);
    actualizarLista();
  }

  window.sortearAmigo = function () {
    if (amigos.length === 0) {
      alert(
        "⚠️ No hay amigos en la lista. Agrega al menos uno antes de sortear."
      );
      return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    const amigoSorteado = amigos[indiceAleatorio];

    mostrarResultado(amigoSorteado);
  };

  function mostrarResultado(amigoSorteado) {
    resultadoLista.innerHTML = `🎉 ¡El amigo secreto es: <strong>${amigoSorteado}</strong>! 🎁`;
    resultadoLista.classList.add("result-item");
  }
});
