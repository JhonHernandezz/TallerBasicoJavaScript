let wsMyBanner = {

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

self.addEventListener("message", (e) => {
    postMessage(wsMyBanner[`${e.data.module}`](e.data.data));
})