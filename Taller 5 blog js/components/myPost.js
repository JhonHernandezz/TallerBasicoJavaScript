export default {
    post: [
        {
            title: "Rolling In The Deep",
            article: "Featured post",
            date: "Dic 2010",
            paragraph: "Relata la historia de una mujer enamorada de su novio. Su amor es tan grande por él que no le permite ver la realidad y piensa que puede confiar en su pareja.",
            button: {
                name: "Continuar...",
                href: "https://es.wikipedia.org/wiki/Rolling_in_the_Deep",
            },
            image: "img/adelle-1.jpg",
        },
        {
            title: "Someone Like You",
            article: "Featured post",
            date: "Ene 2011",
            paragraph: "Narra el final de dicha relación con su exnovio, quien está casado, y sin embargo, ella menciona que la relación no ha terminado para ella.",
            button: {
                name: "Continuar...",
                href: "https://es.wikipedia.org/wiki/Someone_Like_You_(canci%C3%B3n_de_Adele)",
            },
            image: "img/adelle-2.jpeg",
        },


        {
            title: "Set Fire To The Rain",
            article: "Featured post",
            date: "Nov 2011",
            paragraph: "Narra una historia de desamor y expresa cómo se siente el dolor de un corazón roto por un engaño y una traición.",
            button: {
                name: "Continuar...",
                href: "https://en.wikipedia.org/wiki/Set_Fire_to_the_Rain",
            },
            image: "img/adelle-3.png",
        },
        {
            title: "Skyfall",
            article: "Featured post",
            date: "Oct 2012",
            paragraph: "Quedó para la historia como la primera composición victoriosa que se haya creado para una película de James Bond.",
            button: {
                name: "Continuar...",
                href: "https://es.wikipedia.org/wiki/Skyfall",
            },
            image: "img/adelle-4.jpg",
        },
        {
            title: "When We Were Young",
            article: "Featured post",
            date: "Ene 2016",
            paragraph: "Retrata el sentimiento “al ver a todos con los que alguna vez te peleaste, todos a quienes alguna vez amaste, reunidos recordando su juventud.",
            button: {
                name: "Continuar...",
                href: "https://es.wikipedia.org/wiki/When_We_Were_Young",
            },
            image: "img/adelle-5.jpg",
        },
        {
            title: "Hello",
            article: "Featured post",
            date: "Oct 2015",
            paragraph: "La canción no trata ningún individuo, “Hello es sobre reagruparme y reconectarme conmigo”.",
            button: {
                name: "Continuar...",
                href: "https://es.wikipedia.org/wiki/Hello_(canci%C3%B3n_de_Adele)",
            },
            image: "img/adelle-6.jpg",
        },
        {
            title: "Oh My God",
            article: "Featured post",
            date: "Nov 2021",
            paragraph: "Relata sobre las dificultades de una persona para salir adelante con otra relación después de una ruptura.",
            button: {
                name: "Continuar...",
                href: "https://es.wikipedia.org/wiki/Oh_My_God_(canci%C3%B3n_de_Adele)",
            },
            image: "img/adelle-7.jpg",
        }
    ],

    /* listSliderCardTitle(){
        let plantilla ="";
            this.post.forEach((val, id) => {
                plantilla += `
                            <div class="col-12 col-lg-6 me-lg-2">
                                <div class="row g-0 border overflow-hidden flex-md-row mb-4 position-relative">
                                    <div class="col px-4 px-lg-4 pt-0 pt-md-0 d-flex flex-column position-static">
                                        <strong class="py-2 py-sm-3 py-lg-0 py-xl-3 d-inline-block mb-2">${val.article}</strong>
                                        <h3 class="mb-0">${val.title}</h3>
                                        <div class="mb-1 text-muted">${val.date}</div>
                                        <p class="card-text mb-auto mb-xl-3">${val.paragraph}</p>
                                        <a href="${val.button.href}" class="">${val.button.name}</a>
                                    </div>
                                
                                    <div class="svg-cards col-auto d-none d-sm-block d-lg-block">
                                        <img src="${val.image}" alt="">
                                    </div>
                                </div> 
                            </div>
                            `
            });
                document.querySelector(".Slider-card-article").insertAdjacentHTML("beforeend", plantilla);
    } */

    show(){
        const ws = new Worker("storage/wsMyPost.js", {type: "module"})

       

        ws.postMessage({module: "listSliderCardTitle", data: this.post})

       

        ws.addEventListener("message", (e) =>{

            let doc = new DOMParser().parseFromString(e.data, "text/html");

            document.querySelector(".Slider-card-article").append(...doc.body.children);

            ws.terminate();
        })
    }
};