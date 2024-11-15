const apiURL = "https://f1234-7a59.restdb.io/rest/acessocandidato?max=2";
const headers = { "x-apikey": "671fb8e5b0c910dad08f7b43", "Content-Type": "application/json" };

// Cadastro
document.getElementById("btnCadastro").addEventListener("click", async () => {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("cadEmail").value;
  const senha = document.getElementById("cadSenha").value;

  const response = await fetch(apiURL, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ nome, email, senha }),
  });

  if (response.ok) alert("Cadastro realizado com sucesso!");
  else alert("Erro no cadastro!");
});

// Login
document.getElementById("btnLogin").addEventListener("click", async () => {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  const response = await fetch(`${apiURL}?q={"email":"${email}","senha":"${senha}"}`, {
    headers: headers,
  });

  const data = await response.json();
  if (data.length > 0) {
    localStorage.setItem("candidatoLogado", JSON.stringify(data[0]));
    window.location.href = "centraldocandidato.html";
  } else {
    alert("Email ou senha inválidos!");
  }
});
