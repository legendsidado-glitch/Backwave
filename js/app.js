const PASSWORD = "backwave2026";

const passwordOverlay = document.getElementById("passwordOverlay");
const passwordForm = document.getElementById("passwordForm");
const passwordInput = document.getElementById("passwordInput");
const passwordError = document.getElementById("passwordError");
const app = document.getElementById("app");

function unlockApp() {
  passwordOverlay.classList.add("hidden");
  app.classList.remove("hidden");
  app.setAttribute("aria-hidden", "false");
}

function handlePasswordSubmit(event) {
  event.preventDefault();

  if (passwordInput.value === PASSWORD) {
    passwordError.textContent = "";
    unlockApp();
    return;
  }

  passwordError.textContent = "Wrong password. Try again.";
  passwordInput.value = "";
  passwordInput.focus();
}

passwordForm.addEventListener("submit", handlePasswordSubmit);
