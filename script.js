document.getElementById("year").textContent = String(new Date().getFullYear());

const root = document.documentElement;
const themeToggle = document.getElementById("themeToggle");

function setTheme(theme) {
  const next = theme === "light" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  try {
    localStorage.setItem("absavto-theme", next);
  } catch (e) {}
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const current = root.getAttribute("data-theme") === "light" ? "light" : "dark";
    setTheme(current === "light" ? "dark" : "light");
  });
}

const form = document.querySelector(".order-form");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const phone = form.querySelector('input[name="phone"]');
    if (!phone || !phone.value.trim()) {
      phone?.focus();
      return;
    }
    alert("Это превью нового сайта.\nНа боевом сайте номер уйдёт диспетчеру.\nСейчас можно просто позвонить: +7 (3532) 29-22-22");
  });
}
