const form = document.querySelector(".form");

const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const regularExpressions = {
    regEmail: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    
    // Contraseña: mínimo 8 caracteres, al menos una mayúscula, una minúscula, un número y un símbolo
    regPassword: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/
  };

  const emailValue = inputEmail.value.trim();
  const passwordValue = inputPassword.value.trim();

  if (!regularExpressions.regEmail.test(emailValue)) {
    alert("El email no es válido");
    return;
  }

  if (!regularExpressions.regPassword.test(passwordValue)) {
    alert(
      "La contraseña no es válida.\nDebe tener mínimo 8 caracteres, incluir mayúscula, minúscula, número y símbolo."
    );
    return;
  }

  alert("Registrado correctamente");


});
