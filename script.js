document.addEventListener("DOMContentLoaded", function () {
  const menuItems = [
    {
      menuItem: document.querySelector("#nuestro-adn"),
      submenu: document.querySelector("#nuestro-adn-submenu"),
    },
    {
      menuItem: document.querySelector("#la-vida-en-lintac"),
      submenu: document.querySelector("#vida-lintac-submenu"),
    },
    {
      menuItem: document.querySelector("#proyecto-educativo"),
      submenu: document.querySelector("#proyecto-educativo-submenu"),
    },
    {
      menuItem: document.querySelector("#formacion-valorica"),
      submenu: document.querySelector("#formacion-valorica-submenu"),
    },
    {
      menuItem: document.querySelector("#cv-internacionales"),
      submenu: document.querySelector("#cv-internacionales-submenu"),
    },
    {
      menuItem: document.querySelector("#diversidad"),
      submenu: document.querySelector("#diversidad-submenu"),
    },
    {
      menuItem: document.querySelector("#zona-alumnos"),
      submenu: document.querySelector("#zona-alumnos-submenu"),
    },
    {
      menuItem: document.querySelector("#herramientas-vida-escolar"),
      submenu: document.querySelector("#herramientas-vida-escolar-submenu"),
    },
    { menuItem: document.querySelector("#talleres"), submenu: null },
    {
      menuItem: document.querySelector("#deportes"),
      submenu: document.querySelector("#deportes-submenu"),
    },
    { menuItem: document.querySelector("#reglamento"), submenu: null },
    { menuItem: document.querySelector("#sedes"), submenu: null },
    { menuItem: document.querySelector("#noticias"), submenu: null },
    {
      menuItem: document.querySelector("#comunidad"),
      submenu: document.querySelector("#comunidad-submenu"),
    },
  ];

  const nuestroAdnImage = document.querySelector(
    ".nuestro-adn-image > .wpb_wrapper > .vc_single_image-wrapper > img"
  );

  menuItems.forEach(({ menuItem, submenu }) => {
    menuItem.addEventListener("click", () => {
      // // Close all submenus
      // menuItems.forEach((item) => {
      //   if (item.submenu) {
      //     item.submenu.classList.remove("active");
      //   }
      // });

      // Toggle active class for the clicked item
      menuItem.classList.toggle("activeClass");

      // Toggle active class for the submenu (if exists)
      if (submenu) {
        submenu.classList.toggle("active");
      }

      // Set the image source based on the clicked item
      switch (menuItem.id) {
        case "nuestro-adn":
          nuestroAdnImage.src = nuestroAdnImage.srcset =
            "https://pruebas.jumpweb.cl/wp-content/uploads/2024/01/IMAGEN-1-DE-LA-PANTALLA-1.webp";
          break;
        case "la-vida-en-lintac":
          nuestroAdnImage.src = nuestroAdnImage.srcset =
            "https://pruebas.jumpweb.cl/wp-content/uploads/2024/01/IMAGEN-2-PANTALLA-2.webp";
          break;
        case "proyecto-educativo":
          nuestroAdnImage.src = nuestroAdnImage.srcset =
            "https://pruebas.jumpweb.cl/wp-content/uploads/2024/01/IMAGEN-2-PANTALLA-2.webp";
          break;
        case "formacion-valorica":
          nuestroAdnImage.src = nuestroAdnImage.srcset =
            "https://pruebas.jumpweb.cl/wp-content/uploads/2024/01/IMAGEN-3-PANTALLA-3.webp";
          break;
        case "cv-internacionales":
          nuestroAdnImage.src = nuestroAdnImage.srcset =
            "https://pruebas.jumpweb.cl/wp-content/uploads/2024/01/IMAGEN-4-PANTALLA-4.webp";
          break;
        case "diversidad":
          nuestroAdnImage.src = nuestroAdnImage.srcset =
            "https://pruebas.jumpweb.cl/wp-content/uploads/2024/01/IMAGEN-5-PANTALLA-5.webp";
          break;
        case "zona-alumnos":
          nuestroAdnImage.src = nuestroAdnImage.srcset =
            "https://pruebas.jumpweb.cl/wp-content/uploads/2024/01/IMAGEN-6-DE-LA-PANTALLA-6.webp";
          break;
        case "herramientas-vida-escolar":
          nuestroAdnImage.src = nuestroAdnImage.srcset =
            "https://pruebas.jumpweb.cl/wp-content/uploads/2024/01/IMAGEN-6-DE-LA-PANTALLA-6.webp";
          break;
        case "talleres":
          nuestroAdnImage.src = nuestroAdnImage.srcset =
            "https://pruebas.jumpweb.cl/wp-content/uploads/2024/01/IMAGEN-7-DE-LA-PANTALLA-7.webp";
          break;
        case "deportes":
          nuestroAdnImage.src = nuestroAdnImage.srcset =
            "https://pruebas.jumpweb.cl/wp-content/uploads/2024/01/IMAGEN-8-DE-LA-PANTALLA-8.webp";
          break;
        case "reglamento":
          nuestroAdnImage.src = nuestroAdnImage.srcset =
            "https://pruebas.jumpweb.cl/wp-content/uploads/2024/01/IMAGEN-9-DE-LA-PANTALLA-9.webp";
          break;
        case "sedes":
          nuestroAdnImage.src = nuestroAdnImage.srcset =
            "https://pruebas.jumpweb.cl/wp-content/uploads/2024/01/IMAGEN-10-DE-LA-PANTALLA-10.webp";
          break;
        case "noticias":
          nuestroAdnImage.src = nuestroAdnImage.srcset =
            "https://pruebas.jumpweb.cl/wp-content/uploads/2024/01/IMAGEN-11-DE-LA-PANTALLA-11.webp";
          break;
        case "comunidad":
          nuestroAdnImage.src = nuestroAdnImage.srcset =
            "https://pruebas.jumpweb.cl/wp-content/uploads/2024/01/IMAGEN-12-DE-LA-PANTALLA-12.webp";
          break;
        default:
          // Set a default image if no specific case is matched
          nuestroAdnImage.src = nuestroAdnImage.srcset =
            "https://pruebas.jumpweb.cl/wp-content/uploads/2024/01/IMAGEN-1-DE-LA-PANTALLA-1.webp";
      }
    });
  });
});
