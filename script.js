const menuButton = document.getElementById("menuButton");
const menuPanel = document.getElementById("menuPanel");
const infoShell = document.querySelector(".info-shell");
const revealNodes = document.querySelectorAll("[data-reveal]");

const setMenuOpen = (open) => {
  infoShell.classList.toggle("is-menu-open", open);
  menuButton.setAttribute("aria-expanded", String(open));
};

menuButton.addEventListener("click", () => {
  const next = menuButton.getAttribute("aria-expanded") !== "true";
  setMenuOpen(next);
});

menuPanel.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenuOpen(false));
});

document.addEventListener("click", (event) => {
  if (!infoShell.contains(event.target)) {
    setMenuOpen(false);
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenuOpen(false);
  }
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.18 }
);

revealNodes.forEach((node) => revealObserver.observe(node));
