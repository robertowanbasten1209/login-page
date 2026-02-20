//pegando elementos do html
const email = document.querySelector("#email")
const senha = document.querySelector("#senha")
const botão = document.querySelector("#btnLogin")
const msg = document.querySelector("#mensagem")

//quando clicar no botao
botão.addEventListener("click", function () {
  //se estivar vazio
  if (email.value === "" || senha.value === "") {
    msg.innerText = "Preencha todos os campos !"
    msg.style.color = "red"
  }
  //se tiver preenchido
  else {
    msg.innerText = "Login realizado com sucesso !"
    msg.style.color = "green"
  }
})
