// ===========================
// MENU MOBILE
// ===========================

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");
const overlay = document.querySelector(".menu-overlay");
const body = document.body;

if (menuToggle && navigation && overlay) {

    function openMenu() {

        navigation.classList.add("active");
        menuToggle.classList.add("active");
        overlay.classList.add("active");

        body.style.overflow = "hidden";

        menuToggle.setAttribute("aria-expanded", "true");

    }

    function closeMenu() {

        navigation.classList.remove("active");
        menuToggle.classList.remove("active");
        overlay.classList.remove("active");

        body.style.overflow = "";

        menuToggle.setAttribute("aria-expanded", "false");

    }

    menuToggle.addEventListener("click", () => {

        if (navigation.classList.contains("active")) {
            closeMenu();
        } else {
            openMenu();
        }

    });

    overlay.addEventListener("click", closeMenu);

    document.querySelectorAll(".navigation a").forEach(link => {

        link.addEventListener("click", closeMenu);

    });

    window.addEventListener("resize", () => {

        if (window.innerWidth > 900) {
            closeMenu();
        }

    });

}
