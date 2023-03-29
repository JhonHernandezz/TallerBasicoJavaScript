let wsMySeccion = {

    SeccionFrom(informacion){
        return `
            <h3 class="py-4 mb-4 fst-italic border-bottom">
                ${informacion.title}
            </h3>
                    `;
    },

    SeccionFirst(informacion){
        let plantilla = `
            <h2 class="blog-post-title">${informacion.title}</h2>
                <p class="blog-post-meta">${informacion.date}<a href="${informacion.href}">${informacion.page}</a></p>
                    ${informacion.content.map((value,id)=> `<p>${value.paragraphe}</p>`).join("<hr>")}
                       `;
        return plantilla;
    },

    SeccionAwards(informacion){
        let plantilla = `
            <h2>${informacion.title}</h2>

            <p>${informacion.content}</p>

            <ul>
                ${informacion.list.map((value,id)=> `<li>${value.seeList}</li>`).join("<br>")}
            </ul>

            <dl>
                ${informacion.sublist.map((value,id)=> `<dt>${value.title}</dt> <dd>${value.content}</dd>`).join("")}
            </dl>
                        `;
        return plantilla;
    },

    SeccionDiscographis(informacion){
        let plantilla = `
            <h2>${informacion.title}</h2>

            <ul>
                ${informacion.date.map((val, id) => `<li><strong>${val.number}</strong>${val.content}<code class="language-plaintext highlighter-rouge">&lt;${val.year}&gt;</code>.</li>`).join("")}
            </ul>
                        `;
        return plantilla;
    },

    SeccionStyleMusic(informacion){
        let plantilla = `
                        ${informacion.styleMusic.map((val, id) => `<h2>${val.title}</h2><p>${val.content}</p>`).join("")}
                        `;
        return plantilla;
    },

    SeccionCaracterist(informacion){
        let plantilla = `
                        <h2 class="blog-post-title">${informacion.title}</h2>
                        <p>${informacion.content}</p>

                        <blockquote>
                            <p>${informacion.text}<strong>${informacion.textBold}</strong> ${informacion.textNormal}»</p>
                        </blockquote>

                        <p>${informacion.subParrafo}</p>
                        `;
        return plantilla;
    },

    SeccionTable(informacion){
        let plantilla = `
                            <h3 class="py-3">${informacion.title}</h3>
                            <table class="table text-center">
                                <thead class="bg-info bg-gradient">
                                    <tr>
                                        <th>${informacion.year}</th>
                                        <th>${informacion.song}</th>
                                        <th>${informacion.manager}</th>
                                    </tr>
                                </thead>
                            ${informacion.contentTable.map((val, id) => `<tbody>
                                                                            <tr class="bg-light bg-gradient">
                                                                                <td>${val.date}</td>
                                                                                <td>${val.song}</td>
                                                                                <td>${val.manager}</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    `
                            ).join("")}     
                            </table><p>${informacion.contentEnd}</p>

                        `;
                        
                            
        return plantilla;
    },

    SeccionBetsConcerts(informacion){
        let plantilla = `
                            <h2 class="blog-post-title">${informacion.title}</h2>
                            <p>${informacion.content}</p>

                            ${informacion.listConcerts.map((val, id) => ` <ul>
                                                                                    <li><a href="${val.href}">${val.content}</a></li>
                                                                                </ul>
                                                                            `
                            ).join("")}
                        `;
        return plantilla;
    }

}

self.addEventListener("message", (e) => {
    postMessage(wsMySeccion[`${e.data.module}`](e.data.data));
})