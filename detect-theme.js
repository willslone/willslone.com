(function(){
  try {
    var t = localStorage.getItem("ws-theme") || "system";
    document.documentElement.setAttribute("data-theme", t);
    var dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.setAttribute("data-os", dark ? "dark" : "light");
  } catch(e){}
})();
