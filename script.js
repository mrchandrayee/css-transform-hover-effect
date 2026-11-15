const toast = document.getElementById("toast");
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 1700);
}
document.querySelectorAll("[data-code]").forEach((button) => {
  button.addEventListener("click", async () => {
    const code = document.getElementById(button.dataset.code).textContent;
    try {
      await navigator.clipboard.writeText(code);
      showToast("CSS copied to clipboard");
    } catch {
      const area = document.createElement("textarea");
      area.value = code;
      area.style.position = "fixed";
      area.style.opacity = "0";
      document.body.appendChild(area);
      area.select();
      const copied = document.execCommand("copy");
      area.remove();
      showToast(copied ? "CSS copied to clipboard" : "Please copy the snippet manually");
    }
  });
});
