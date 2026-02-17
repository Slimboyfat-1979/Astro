document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu");
  const navLinks = document.querySelector(".nav-links");
  if (!menu || !navLinks) return;
  menu.addEventListener("click", () => {
    const isExpanded = menu.getAttribute("aria-expanded") === "true";
    menu.setAttribute("aria-expanded", `${!isExpanded}`);
  });
});
