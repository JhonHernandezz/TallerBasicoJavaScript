let wsMyHeader = {

    // Creamos una funcion para el contenido de titulo
    listTitle(informacion){

        // Retornamos toda la informacion que va a contener el titulo 
        return `<a id="title" class="blog-header-logo text-dark" href="${informacion.href}">${informacion.name}</a>`;
    },

    // Creamos una funcion para el contenido de company
    listCompany(informacion){

        // Creamos una variable de una plantilla, que va a contener todo lo que se va a insertar en el HTML
        let plantilla ="";
        informacion.forEach((val, id) => {
            plantilla += `<a class="p-2 link-secondary" href="${val.href}">${val.name}</a>`
        });
        return plantilla;
    }
    
}

self.addEventListener("message", (e) => {
    postMessage(wsMyHeader[`${e.data.module}`](e.data.data));
})