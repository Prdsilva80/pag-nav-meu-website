const nav = document.querySelector(".nav");

        const fixNav = () => {
            if(window.scrollY > nav.offsetHeigth + 150) nav.classList.add("active");
            else nav.classList.remove("active");
        };

        window.addEventListener("scoll", fixNav);