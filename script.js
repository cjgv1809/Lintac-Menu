document.addEventListener("DOMContentLoaded", function () {
  const menuItems = [
    "nuestro-adn",
    "la-vida-en-lintac",
    "proyecto-educativo",
    "formacion-valorica",
    "cv-internacionales",
    "diversidad",
    "zona-alumnos",
    "herramientas-vida-escolar",
    "talleres",
    "deportes",
    "reglamento",
    "sedes",
    "noticias",
    "comunidad",
  ];

  const nuestroAdnImage = document.querySelector("#main-image-menu");
  const megaMenuListBackgroundImage = document.querySelector("#mega-menu-list");

  const itemImageMap = {
    "nuestro-adn": "images/IMAGEN 1 DE LA PANTALLA 1.webp",
    "la-vida-en-lintac": "images/IMAGEN 2 PANTALLA 2.webp",
    "proyecto-educativo": "images/IMAGEN 2 PANTALLA 2.webp",
    "formacion-valorica": "images/IMAGEN 3 PANTALLA 3.webp",
    "cv-internacionales": "images/IMAGEN 4 PANTALLA 4.webp",
    diversidad: "images/IMAGEN 5 PANTALLA 5.webp",
    "zona-alumnos": "images/IMAGEN 6 DE LA PANTALLA 6.webp",
    "herramientas-vida-escolar": "images/IMAGEN 6 DE LA PANTALLA 6.webp",
    talleres: "images/IMAGEN 7 DE LA PANTALLA 7.webp",
    deportes: "images/IMAGEN 8 DE LA PANTALLA 8.webp",
    reglamento: "images/IMAGEN 9 DE LA PANTALLA 9.webp",
    sedes: "images/IMAGEN 10 DE LA PANTALLA 10.webp",
    noticias: "images/IMAGEN 11 DE LA PANTALLA 11.webp",
    comunidad: "images/IMAGEN 12 DE LA PANTALLA 12.webp",
  };

  const backgroundImageMap = {
    "nuestro-adn": "images/IMAGEN FONDO PANTALLA 1.webp",
    "la-vida-en-lintac": "images/IMAGEN FONDO PANTALLA 1.webp",
    "proyecto-educativo": "images/IMAGEN FONDO PANTALLA 1.webp",
    "formacion-valorica": "images/IMAGEN FONDO PANTALLA 1.webp",
    "cv-internacionales": "images/IMAGEN FONDO PANTALLA 4.webp",
    diversidad: "images/IMAGEN FONDO PANTALLA 5.webp",
    "zona-alumnos": "images/IMAGEN FONDO PANTALLA 5.webp",
    "herramientas-vida-escolar": "images/IMAGEN FONDO PANTALLA 1.webp",
    talleres: "images/IMAGEN FONDO PANTALLA 7.webp",
    deportes: "images/IMAGEN FONDO PANTALLA 8.webp",
    reglamento: "images/IMAGEN FONDO PANTALLA 9.webp",
    sedes: "images/IMAGEN FONDO PANTALLA 9.webp",
    noticias: "images/IMAGEN FONDO PANTALLA 11.webp",
    comunidad: "images/IMAGEN FONDO PANTALLA 12.webp",
  };

  function handleMenuItemHover(item) {
    const imagePath =
      itemImageMap[item] || "images/IMAGEN 1 DE LA PANTALLA 1.webp";
    const backgroundImagePath =
      backgroundImageMap[item] || "images/IMAGEN FONDO PANTALLA 1.webp";

    nuestroAdnImage.src = imagePath;
    nuestroAdnImage.animate(
      [
        { opacity: 0, transform: "translateX(-100%)", pointerEvents: "none" },
        { opacity: 1, transform: "translateX(0)", pointerEvents: "auto" },
      ],
      {
        duration: 500,
        fill: "forwards",
        easing: "ease-out",
      }
    );

    megaMenuListBackgroundImage.style.backgroundImage = `url('${backgroundImagePath}')`;

    const menuItem = document.querySelector(`#${item}`);
    menuItem.classList.add("activeClass");
  }

  function handleMenuItemHoverEnd(item) {
    const menuItem = document.querySelector(`#${item}`);
    menuItem.classList.remove("activeClass");
  }

  menuItems.forEach((item) => {
    const menuItem = document.querySelector(`#${item}`);
    menuItem.addEventListener("mouseenter", () => handleMenuItemHover(item));
    menuItem.addEventListener("mouseleave", () => handleMenuItemHoverEnd(item));
  });
});
