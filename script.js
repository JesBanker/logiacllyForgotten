fetch("/menu.html")
  .then(res => res.text())
  .then(html => {
    document.body.insertAdjacentHTML("afterbegin", html);
});
  
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("hidden");
}