// Publication list filtering (progressive enhancement).
// Markup: themes/mcf/layouts/_partials/publications/list.html
(function () {
  "use strict";

  function norm(s) {
    s = (s || "").toLowerCase();
    return s.normalize ? s.normalize("NFD").replace(/[̀-ͯ]/g, "") : s;
  }

  function init(root) {
    var form = root.querySelector(".pubs-controls");
    if (!form) return;
    var q = form.querySelector(".pubs-q");
    var type = form.querySelector(".pubs-type");
    var status = form.querySelector(".pubs-status");
    var empty = root.querySelector(".pubs-empty");
    var items = Array.prototype.slice.call(root.querySelectorAll(".pub-item"));
    var years = Array.prototype.slice.call(root.querySelectorAll(".pubs-year"));
    var links = {};
    Array.prototype.forEach.call(root.querySelectorAll(".pubs-years a"), function (a) {
      links[a.getAttribute("data-year")] = a;
    });
    items.forEach(function (li) {
      li._search = norm(li.getAttribute("data-search"));
    });

    // Restore state from the URL (?q=...&type=...)
    var params = new URLSearchParams(window.location.search);
    if (params.get("q")) q.value = params.get("q");
    if (type && params.get("type")) type.value = params.get("type");

    function apply() {
      var words = norm(q.value).split(/\s+/).filter(Boolean);
      var t = type ? type.value : "";
      var shown = 0;
      items.forEach(function (li) {
        var ok = (!t || li.getAttribute("data-type") === t) &&
          words.every(function (w) { return li._search.indexOf(w) !== -1; });
        li.hidden = !ok;
        if (ok) shown++;
      });
      years.forEach(function (sec) {
        var shownItems = sec.querySelectorAll(".pub-item:not([hidden])");
        var visible = shownItems.length;
        Array.prototype.forEach.call(sec.querySelectorAll(".pub-item"), function (li) {
          li.classList.toggle("pub-first", li === shownItems[0]);
        });
        sec.hidden = visible === 0;
        var count = sec.querySelector(".pubs-year-count");
        if (count) {
          count.textContent = visible;
          count.title = visible + (visible === 1 ? " publication" : " publications");
        }
        var link = links[sec.getAttribute("data-year")];
        if (link) link.hidden = visible === 0;
      });
      var filtering = words.length > 0 || t;
      status.textContent = filtering ? "Showing " + shown + " of " + items.length : "";
      if (empty) empty.hidden = shown > 0;

      if (window.history && history.replaceState) {
        var p = new URLSearchParams(window.location.search);
        if (q.value.trim()) p.set("q", q.value.trim()); else p.delete("q");
        if (t) p.set("type", t); else p.delete("type");
        var s = p.toString();
        history.replaceState(null, "", window.location.pathname + (s ? "?" + s : "") + window.location.hash);
      }
    }

    q.addEventListener("input", apply);
    if (type) type.addEventListener("change", apply);
    form.hidden = false;
    if (q.value || (type && type.value)) apply();
  }

  function start() {
    Array.prototype.forEach.call(document.querySelectorAll("[data-pubs]"), init);
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
