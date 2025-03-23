// background
    document.addEventListener("DOMContentLoaded", function() {
        let page = window.location.pathname.split("/").pop();

        let backgrounds = {
            "index.html": "url('../Resources/Media/occhioDellaMadre.jpg')",
            "cartoon.html": "url('../Resources/Media/Goku.jpg')",
            "pencil.html": "url('../Resources/Media/sedh.jpg')",
            "fabio.html": "url('../Resources/Media/fabio.jpg')"
        };

        if (backgrounds[page]) {
            document.body.style.backgroundImage = "linear-gradient(rgba(250, 248, 248, 0.9), rgba(244, 238, 238, 0.7)), " + backgrounds[page];
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundPosition = "center";
            document.body.style.backgroundRepeat = "no-repeat";
            document.body.style.backgroundAttachment = "fixed";
        }
    });

    // link attivo della pagina nella navbar
    document.addEventListener("DOMContentLoaded", function() {
        let links = document.querySelectorAll(".navbar-nav .nav-link"); // Seleziona tutti i link della navbar
        let currentPage = window.location.pathname.split("/").pop(); // Ottiene il nome della pagina

        links.forEach(link => {
            if (link.getAttribute("href") === currentPage) {
                link.classList.add("active"); // Aggiunge la classe active al link della pagina attuale
            }
        });
    });
