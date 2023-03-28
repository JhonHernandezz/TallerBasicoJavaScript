export default{
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

    /* 
    ContentBanner: {
            content: "Es una cantautora y multinstrumentista británica, es una de las artistas musicales con mayores ventas del mundo, con más de 120 millones de ventas entre discos y sencillos.​ ",
    },

    btn: {
            name:"Continuar...",
            href:"https://es.wikipedia.org/wiki/Adele"
    },
    */

    // WORKER LIST 
    show(){
        const ws = new Worker("storage/wsMyBanner.js", {type: "module"});

        let id = [];

        let count = 0;

        ws.postMessage({module: "contentBanner", data: this.ContentBanner});

        id = [".TitleBanner", ".ContentBanner", ".Btn-Banner"];

            ws.addEventListener("message", (e)=>{

                let doc = new DOMParser().parseFromString(e.data, "text/html");

                document.querySelector(id[count]).append(...doc.body.children);

                (id.length-1==count) ? ws.terminate() : count++;

            })
    }
    // ----------------------------------------------------------------
}