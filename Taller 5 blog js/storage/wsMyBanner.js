let wsMyBanner = {

    contentBanner(p1){

        return `<h1 class="display-4 col-8 col-md-12 fst-italic">${p1.title}</h1>
                <p class="my-3 col-8 col-md-12 lead">${p1.content}</p>
                <p class="lead mb-0"><a href="${p1.href}" class="text-white fw-bold">${p1.name}</a></p>`
    }
}

self.addEventListener("message", (e) => {
    postMessage(wsMyBanner[`${e.data.module}`](e.data.data));
})