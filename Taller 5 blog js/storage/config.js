export default{
    dataMyHeader(){
        localStorage.setItem("myHeader", JSON.stringify({
        title: {
                name: "Adele",
                href: "#"
        },
        company: [
            {
                name: "19",
                href: "#"
            },
            {
                name: "21",
                href: "#"
            },
            {
                name: "25",
                href: "#"
            },
            {
                name: "30",
                href: "#"
            },
        ],
        }))
    },
    dataMyBanner(){
        localStorage.setItem("myBanner", JSON.stringify({
            imagen: "img/banner-adelle.png",
            showImage(){
                document.querySelector(".Style-img").style.backgroundImage = `url(${this.imagen})`;
            },

            ContentBanner: {
                    title: "Adele Laurie Blue Adkins",
                    content: "Es una cantautora y multinstrumentista británica, es una de las artistas musicales con mayores ventas del mundo, con más de 120 millones de ventas entre discos y sencillos.​ ",
                    name:"Continuar...",
                    href:"https://es.wikipedia.org/wiki/Adele"
            },
        }))
    },
    dataMyPost(){
        localStorage.setItem("myHeader", JSON.stringify({

        }))
    },
    dataMyAside(){
        localStorage.setItem("myHeader", JSON.stringify({

        }))
    },
    dataMySeccion(){
        localStorage.setItem("myHeader", JSON.stringify({

        }))
    },
    dataMyFooter(){
        localStorage.setItem("myHeader", JSON.stringify({

        }))
    }
}