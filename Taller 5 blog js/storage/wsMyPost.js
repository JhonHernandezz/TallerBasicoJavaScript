let wsMyPost = {

    listSliderCardTitle(informacion){
        let plantilla ="";
        informacion.forEach((val, id) => {
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
        return plantilla;
    }

}

self.addEventListener("message", (e) => {
    postMessage(wsMyPost[`${e.data.module}`](e.data.data));
})