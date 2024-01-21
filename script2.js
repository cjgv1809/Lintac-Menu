document.addEventListener("DOMContentLoaded", function () {
  const firstLevelItems = document.querySelectorAll(".first-level-item");

  firstLevelItems.forEach((parentItem) => {
    const firstLevelMenu = parentItem.querySelector(".first-level-submenu");

    parentItem.addEventListener("mouseenter", () => {
      firstLevelMenu.style.visibility = "visible"; // Show the menu
      firstLevelMenu.animate(
        [
          { opacity: 0, transform: "translateX(100%)" },
          { opacity: 1, transform: "translateX(0)" },
        ],
        {
          duration: 500,
          fill: "forwards",
          easing: "ease-out",
        }
      );
    });

    parentItem.addEventListener("mouseleave", (e) => {
      const relatedTarget = e.relatedTarget || e.toElement;

      if (!parentItem.contains(relatedTarget)) {
        firstLevelMenu.animate(
          [
            { opacity: 1, transform: "translateX(0)" },
            { opacity: 0, transform: "translateX(100%)" },
          ],
          {
            duration: 500,
            fill: "forwards",
            easing: "ease-out",
          }
        ).onfinish = () => {
          firstLevelMenu.style.visibility = "hidden"; // Hide the menu after animation
        };
      }
    });

    parentItem.querySelectorAll(".second-level-item").forEach((item) => {
      const secondLevelMenu = item.querySelector(".second-level-submenu");

      item.addEventListener("mouseenter", () => {
        if (secondLevelMenu) {
          secondLevelMenu.style.visibility = "visible"; // Show the menu
          secondLevelMenu.animate(
            [
              { opacity: 0, transform: "translateX(100%)" },
              { opacity: 1, transform: "translateX(0)" },
            ],
            {
              duration: 500,
              fill: "forwards",
              easing: "ease-out",
            }
          );
        }
      });

      item.addEventListener("mouseleave", (e) => {
        const relatedTarget = e.relatedTarget || e.toElement;

        if (!item.contains(relatedTarget)) {
          secondLevelMenu.animate(
            [
              { opacity: 1, transform: "translateX(0)" },
              { opacity: 0, transform: "translateX(100%)" },
            ],
            {
              duration: 500,
              fill: "forwards",
              easing: "ease-out",
            }
          ).onfinish = () => {
            secondLevelMenu.style.visibility = "hidden"; // Hide the menu after animation
          };
        }
      });
    });
  });
});
