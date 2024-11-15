const apiURLAdmin = "https://f1234-7a59.restdb.io/rest/acessoadmin?max=2";
const headers = { "x-apikey": "671fb8e5b0c910dad08f7b43", "Content-Type": "application/json" };

document.getElementById("btnLoginAdmin").addEventListener("click", async () => {
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senhaAdm").value;

  const response = await fetch(`${apiURLAdmin}?q={"usuario":"${usuario}","senha":"${senha}"}`, {
    headers: headers,
  });

  const data = await response.json();
  if (data.length > 0) {
    localStorage.setItem("adminLogado", JSON.stringify(data[0]));
    window.location.href = "centraldoadmin.html";
  } else {
    alert("Usuário ou senha inválidos!");
  }
});
