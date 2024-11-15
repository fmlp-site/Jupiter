const apiURL = "https://<SEU-RESTDB-URL>.restdb.io/rest/candidatos";
const headers = { "x-apikey": "<SUA-API-KEY>", "Content-Type": "application/json" };

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
  if (data.length > 0) window.location.href = "centraldocandidato.html";
  else alert("Email ou senha inválidos!");
});
