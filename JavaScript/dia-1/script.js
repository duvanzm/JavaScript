var mypassword = "password";
var email = "user@gmail.com";

let button = document.getElementById("button");
let option = document.getElementById("theme");
let email_user = document.getElementById("email");
let password_user = document.getElementById("password");

button.addEventListener("click", function () {
  if (mypassword == password_user.value && email_user.value == email) {
    window.location = "./home.html";
  } else {
    /*document.getElementById("alert-danger").innerText =
      "Erro de autenticacion\n Vuelve a intentar";*/
    document.getElementById("alert-danger").innerHTML = `
      <div class=" alert-danger p-1 mt-2 text-center">
        Erro de autenticacion\n Vuelve a intentar
      </div>
    `;
    email_user.classList.add("is-invalid");
    password_user.classList.add("is-invalid");
    password_user.value = "";
  }
});

option.addEventListener("change", function () {
  const tema = document.getElementById("theme").value;
  document.documentElement.setAttribute("data-bs-theme", tema);
});
