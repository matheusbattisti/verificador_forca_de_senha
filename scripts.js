const passwordInput = document.querySelector("#passwordInput");

passwordInput.addEventListener("input", function () {
  const password = this.value;
  const strengthIndicator = document.getElementById(
    "password-strength-indicator"
  );
  const strengthText = document.getElementById("password-strength-text");
  const strengths = {
    0: "Muito Fraca",
    1: "Fraca",
    2: "Moderada",
    3: "Forte",
    4: "Muito Forte",
  };

  let score = 0;

  // Incrementa a pontuação baseada na complexidade da senha
  if (password.length >= 8) score++; // tamanho mínimo de 8 caracteres
  if (password.match(/[a-z]/)) score++; // contém letra minúscula
  if (password.match(/[A-Z]/)) score++; // contém letra maiúscula
  if (password.match(/[0-9]/)) score++; // contém dígito
  if (password.match(/[^a-zA-Z0-9]/)) score++; // contém caractere especial

  // Define a largura da barra baseada na pontuação
  const width = (score / 4) * 100; // Calcula a porcentagem
  strengthIndicator.style.width = width + "%";

  // Define a cor da barra baseada na pontuação
  switch (score) {
    case 1:
      strengthIndicator.style.backgroundColor = "#e70b0b";
      break;
    case 2:
      strengthIndicator.style.backgroundColor = "#FFB74D";
      break;
    case 3:
      strengthIndicator.style.backgroundColor = "#FFF176";
      break;
    case 4:
      strengthIndicator.style.backgroundColor = "#81C784";
      break;
    default:
      strengthIndicator.style.backgroundColor = "transparent";
      break;
  }

  // Atualiza o texto descritivo da força
  if (password.length > 0) {
    strengthText.innerHTML = `Força: ${strengths[score]}`;
  } else {
    strengthText.innerHTML = "";
  }
});
