function validateLogin() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var errorMessage = document.getElementById("error-message");

  // Simples validação de usuário e senha (pode ser feito no servidor em uma aplicação real)
  if (username === "usuario" && password === "senha") {
      errorMessage.innerHTML = "Login bem-sucedido!";
      errorMessage.style.color = "green";

      // Redirecionar para o site desejado
      window.location.href = "main.html";
  } else {
      errorMessage.innerHTML = "Usuário ou senha incorretos. Tente novamente.";
      errorMessage.style.color = "red";
  }
}
