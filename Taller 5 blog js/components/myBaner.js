export default{
    imagen: "img/banner-adelle.png",
    showImage(){
        document.querySelector(".Style-img").style.backgroundImage = `url(${this.imagen})`;
    },

    TitleBanner: {
            title: "Adele Laurie Blue Adkins",
    },

    ContentBanner: {
            content: "Es una cantautora y multinstrumentista británica, es una de las artistas musicales con mayores ventas del mundo, con más de 120 millones de ventas entre discos y sencillos.​ ",
    },

    btn: {
            name:"Continuar...",
            href:"https://es.wikipedia.org/wiki/Adele"
    },

    show(){
        const ws = new Worker("storage/wsMyBanner.js", {type: "module"});

        let id = [];

        let count = 0;

        ws.postMessage({module: "listTitleBanner", data: this.TitleBanner});
        ws.postMessage({module: "listContentBanner", data: this.ContentBanner})
        ws.postMessage({module: "Button", data: this.btn})

        id = [".TitleBanner", ".ContentBanner", ".Btn-Banner"];

            ws.addEventListener("message", (e)=>{

                let doc = new DOMParser().parseFromString(e.data, "text/html");

                document.querySelector(id[count]).append(...doc.body.children);

                (id.length-1==count) ? ws.terminate() : count++;

            })
    }
}