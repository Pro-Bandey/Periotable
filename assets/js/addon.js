function Fonts() {
  var e = document.getElementById("1").offsetWidth;
  (document.querySelectorAll(".Letter").forEach(function (t) {
    t.style.setProperty("font-size", "min(" + e / 3 + "px, 20pt)");
  }),
    document.querySelectorAll(".Name").forEach(function (t) {
      t.style.setProperty("font-size", "min(" + e / 7 + "px, 10pt)");
    }),
    document.querySelectorAll(".Number").forEach(function (t) {
      t.style.setProperty("font-size", "min(" + e / 7 + "px, 8pt)");
    }),
    document.querySelectorAll(".Mass").forEach(function (t) {
      t.style.setProperty("font-size", "min(" + e / 7 + "px, 8pt)");
    }));
}
(document.querySelector("#overlay").addEventListener("click", function (e) {
  (this.hasAttribute("data-toclose")
    ? OpenCloseMenu(Overlay.getAttribute("data-toclose"), !1)
    : Close(),
    Blur(!1));
}),
  document
    .querySelector(".dropdown__items")
    .addEventListener("click", function (e) {
      if (e.target.classList.contains("Filterbutton")) {
        let a = e.target;
        var t = a.getAttribute("data-filter"),
          s = a.getAttribute("data-sort");
        ((BigInfo.style.display = "grid-item" == t ? "flex" : "none"),
          "Fusion" == s
            ? Tableau.classList.add("FiltredFusion")
            : Tableau.classList.remove("FiltredFusion"),
          (document.getElementById("dropdown").checked = !1),
          (document.querySelector(".dropdown__text").textContent =
            a.textContent),
          iso.arrange({
            filter: "." + t,
            sortBy: s,
            transitionDuration: Speed,
          }));
      }
    }),
  window.addEventListener("resize", function (e) {
    window.requestAnimationFrame(Fonts);
  }));
for (var An = 1; An < 18; An++) {
  var SVGElementVertical =
    '<svg class="IsSvg lineanimationVerticalAbsolute" id="VAn' +
    An +
    '" xmlns="http://www.w3.org/2000/svg">      <line id="Confort" class="animation" x1="0" y1="0" x2="0" y2="0%">          <animate attributeName="y2" from="0%" to="100%" begin="' +
    An / 22 +
    's" dur="0.4s" fill="freeze" />           <unanimate attributeName="y1" from="0%" to="100%" begin="' +
    (0.8 + An / 22) +
    's" dur="0.4s" fill="freeze" />      </line>    </svg>';
  if (An < 10) {
    var SVGElementHorizontal =
      '<svg class="IsSvg lineanimationHorizontalAbsolute" id="HAn' +
      An +
      '" xmlns="http://www.w3.org/2000/svg">        <line id="Confort" class="animation" x1="0" y1="0" x2="0" y2="0%">            <animate attributeName="x2" from="0%" to="100%" begin="' +
      An / 22 +
      's" dur="0.4s" fill="freeze" />             <unanimate attributeName="x1" from="0%" to="100%" begin="' +
      (0.8 + An / 22) +
      's" dur="0.4s" fill="freeze" />        </line>      </svg>';
    Tableau.insertAdjacentHTML("afterbegin", SVGElementHorizontal);
  }
  Tableau.insertAdjacentHTML("afterbegin", SVGElementVertical);
}
function Blur(e) {
  1 == e
    ? (Overlay.classList.add("isBlurBack"),
      document.querySelectorAll(".ToBlur").forEach((e) => {
        e.classList.add("isBlur", "transition");
      }))
    : (Overlay.classList.remove("isBlurBack"),
      Overlay.classList.remove("FadeIn"),
      document.querySelectorAll(".ToBlur").forEach((e) => {
        (e.classList.remove("isBlur"),
          setTimeout(() => {
            e.classList.remove("transition");
          }, Speed));
      }));
}
function OpenCloseMenu(e, t) {
  var s = document.querySelector(e);
  1 == t
    ? (s.classList.add("FadeIn"),
      Overlay.classList.add("FadeIn"),
      Overlay.setAttribute("data-toclose", e),
      Blur(!0))
    : (s.classList.add("FadeOut"),
      Overlay.classList.add("FadeOut"),
      Overlay.removeAttribute("data-toclose"),
      Blur(!1),
      setTimeout(function () {
        (s.classList.remove("FadeIn", "FadeOut"),
          Overlay.classList.remove("FadeIn", "FadeOut"));
      }, Speed));
}
(document.querySelector(".Informations").addEventListener("click", function () {
  OpenCloseMenu(".MessageInfo", !0);
}),
  document
    .querySelector(".MessageInfo")
    .addEventListener("click", function (e) {
      if (e.target.classList.contains("ParametersClick")) {
        let s = e.target;
        var t = s.getAttribute("data-parameter");
        ("minimalist" == t &&
          (Tableau.classList.add("minimalist"),
          List.classList.add("minimalist"),
          Doc.classList.add("minimalist")),
          "classic" == t &&
            (Tableau.classList.remove("minimalist"),
            List.classList.remove("minimalist"),
            Doc.classList.remove("minimalist")),
          "GridVisibility" == s.id &&
            ("true" == t
              ? (s.setAttribute("data-parameter", "false"),
                s.classList.add("unchecked"),
                (s.textContent = "Grille invisible"),
                document.querySelectorAll(".IsSvg").forEach(function (e) {
                  e.classList.add("FadeOut");
                }),
                document
                  .querySelectorAll(".SelectorGrid")
                  .forEach(function (e) {
                    e.classList.add("FadeOut");
                  }))
              : (s.setAttribute("data-parameter", "true"),
                s.classList.remove("unchecked"),
                (s.textContent = "Grille visible"),
                document.querySelectorAll(".IsSvg").forEach(function (e) {
                  e.classList.remove("FadeOut");
                }),
                document
                  .querySelectorAll(".SelectorGrid")
                  .forEach(function (e) {
                    e.classList.remove("FadeOut");
                  }))),
          "Responsivity" == s.id &&
            ("true" == t
              ? (s.setAttribute("data-parameter", "false"),
                s.classList.add("unchecked"),
                (s.textContent = "Reponsive désactivé"),
                Tableau.classList.remove("TableauResponsive"),
                (iso.modes.masonry.options.fitWidth = !1),
                BigInfo.classList.remove("FadeOutFlex"),
                iso.arrange({ sortBy: "Initial" }))
              : (s.setAttribute("data-parameter", "true"),
                s.classList.remove("unchecked"),
                (s.textContent = "Reponsive activé"),
                Tableau.classList.add("TableauResponsive"),
                (iso.modes.masonry.options.fitWidth = !0),
                BigInfo.classList.add("FadeOutFlex"),
                iso.arrange({ sortBy: "Number" }))));
      }
    }));
