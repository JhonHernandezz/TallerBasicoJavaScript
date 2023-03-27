export default{
    imagen: "../img/banner-adelle.png",
    showImage(){
        document.querySelector(".Style-img").style.backgroundImage = `url(${this.imagen})`;
    },

    TitleBanner: [
        {
            title: "Adele Laurie Blue Adkins",
        }
    ],

    ContentBanner: [
        {
            content: "Es una cantautora y multinstrumentista británica, es una de las artistas musicales con mayores ventas del mundo, con más de 120 millones de ventas entre discos y sencillos.​ ",
        }
    ],

    btn: [
        {
            name:"Continuar...",
            href:"https://es.wikipedia.org/wiki/Adele"
        }
    ],

    listTitleBanner(){
        let plantilla ="";
            this.TitleBanner.forEach((val, id) => {
                plantilla += `<h1 class="display-4 col-8 col-md-12 fst-italic">${val.title}</h1>`
            });
                document.querySelector(".TitleBanner").insertAdjacentHTML("beforeend", plantilla);
    },

    listContentBanner(){
        let plantilla ="";
            this.ContentBanner.forEach((val, id) => {
                plantilla += `<p class="ContentBanner my-3 col-8 col-md-12">${val.content}</p>`
            });
                document.querySelector(".ContentBanner").insertAdjacentHTML("beforeend", plantilla);
    },

    Button(){
        let plantilla ="";
            this.btn.forEach((val, id) => {
                plantilla += `<p class="lead mb-0"><a href="${val.href}" class="text-white fw-bold"> ${val.name}</a></p>`
            });
                document.querySelector(".Btn-Banner").insertAdjacentHTML("beforeend", plantilla);
    }
}