let wsMyBanner = {

    Banner(p1){

        return `
                <div class="imagen-Banner position-absolute">
                    <img src="${p1.imagen}" alt="">
                </div>
                <div class="col-8 col-md-7 col-xl-6 mx-4 py-5">
                    <h1 class="display-4 fst-italic col-12 mb-xl-4 mx-xl-4">${p1.title}</h1>
                    <p class="lead my-3 col-12 mb-xl-4 mx-xl-4">${p1.content}</p>
                    <p class="lead mb-0 mx-xl-4"><a href="${p1.href}" class="text-white fw-bold">${p1.name}</a></p>
                </div>
               `
    }
    
}

self.addEventListener("message", (e) => {
    postMessage(wsMyBanner[`${e.data.module}`](e.data.data));
})