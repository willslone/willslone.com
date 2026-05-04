/**
 * willslone.com — theme switcher
 * Reads/writes data-theme on <html> and persists to localStorage.
 * No dependencies. ~30 lines.
 */
(function () {
  var root = document.documentElement;
  var mq   = window.matchMedia("(prefers-color-scheme: dark)");

  function applyOS() {
    root.setAttribute("data-os", mq.matches ? "dark" : "light");
  }

  function setTheme(t) {
    root.setAttribute("data-theme", t);
    applyOS();
    try { localStorage.setItem("ws-theme", t); } catch (e) {}
    document.querySelectorAll('input[name="theme"]').forEach(function (radio) {
      radio.checked = (radio.value === t);
    });
  }

  // Sync radios to current theme on load
  var current = root.getAttribute("data-theme") || "system";
  setTheme(current);

  // Handle radio changes
  document.querySelectorAll('input[name="theme"]').forEach(function (radio) {
    radio.addEventListener("change", function () {
      if (this.checked) setTheme(this.value);
    });
  });

  // Respond to OS preference changes while on "system"
  mq.addEventListener("change", function () {
    if (root.getAttribute("data-theme") === "system") applyOS();
  });
})();
