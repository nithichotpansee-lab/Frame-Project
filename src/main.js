import "./style.css";
import { Home } from "./pages/home.js";
import { About } from "./pages/about.js";
import { Contact } from "./pages/contact.js";
import { Admin } from "./pages/admin.js";

const routes = {
  "/": Home,
  "/about": About,
  "/contact": Contact,
  "/admin": Admin,
};

function render() {
  const path = location.hash.slice(1) || "/";
  const page = routes[path];
  const app = document.getElementById("app");

  if (page) {
    app.innerHTML = page();
  } else {
    app.innerHTML = "<h1>ไม่พบหน้านี้</h1>";
  }
}

window.addEventListener("hashchange", render);
render();