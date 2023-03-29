import config from "../storage/config.js";
export default{
    

    /*
    SeccionFrom(){
        let plantilla = `
            <h3 class="py-4 mb-4 fst-italic border-bottom">
                ${this.from.title}
            </h3>
                    `;
        document.querySelector(".liveAdele").insertAdjacentHTML("beforeend", plantilla);
    },

    SeccionFirst(){
        let plantilla = `
            <h2 class="blog-post-title">${this.first.title}</h2>
                <p class="blog-post-meta">${this.first.date}<a href="${this.first.href}">${this.first.page}</a></p>
                    ${this.first.content.map((value,id)=> `<p>${value.paragraphe}</p>`).join("<hr>")}
                       `;
        document.querySelector(".firstYears").insertAdjacentHTML("beforeend", plantilla);
    },

    SeccionAwards(){
        let plantilla = `
            <h2>${this.awards.title}</h2>

            <p>${this.awards.content}</p>

            <ul>
                ${this.awards.list.map((value,id)=> `<li>${value.seeList}</li>`).join("<br>")}
            </ul>

            <dl>
                ${this.awards.sublist.map((value,id)=> `<dt>${value.title}</dt> <dd>${value.content}</dd>`).join("")}
            </dl>
                        `;
        document.querySelector(".nominations").insertAdjacentHTML("beforeend", plantilla);
    },

    SeccionDiscographis(){
        let plantilla = `
            <h2>${this.discographis.title}</h2>

            <ul>
                ${this.discographis.date.map((val, id) => `<li><strong>${val.number}</strong>${val.content}<code class="language-plaintext highlighter-rouge">&lt;${val.year}&gt;</code>.</li>`).join("")}
            </ul>
                        `;
        document.querySelector(".discographit").insertAdjacentHTML("beforeend", plantilla);
    },

    SeccionStyleMusic(){
        let plantilla = `
                        ${this.style.styleMusic.map((val, id) => `<h2>${val.title}</h2><p>${val.content}</p>`).join("")}
                        `;
        document.querySelector(".styleMusic").insertAdjacentHTML("beforeend", plantilla);
    },

    SeccionCaracterist(){
        let plantilla = `
                        <h2 class="blog-post-title">${this.caracterist.title}</h2>
                        <p>${this.caracterist.content}</p>

                        <blockquote>
                            <p>${this.caracterist.text}<strong>${this.caracterist.textBold}</strong> ${this.caracterist.textNormal}»</p>
                        </blockquote>

                        <p>${this.caracterist.subParrafo}</p>
                        `;
        document.querySelector(".caracterist").insertAdjacentHTML("beforeend", plantilla);
    },

    SeccionTable(){
        let plantilla = `
                            <h3 class="py-3">${this.table.title}</h3>
                            <table class="table text-center">
                                <thead class="bg-info bg-gradient">
                                    <tr>
                                        <th>${this.table.year}</th>
                                        <th>${this.table.song}</th>
                                        <th>${this.table.manager}</th>
                                    </tr>
                                </thead>
                            ${this.table.contentTable.map((val, id) => `<tbody>
                                                                            <tr class="bg-light bg-gradient">
                                                                                <td>${val.date}</td>
                                                                                <td>${val.song}</td>
                                                                                <td>${val.manager}</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    `
                            ).join("")}     
                            </table><p>${this.table.contentEnd}</p>

                        `;
                        
                            
        document.querySelector(".musicVideos").insertAdjacentHTML("beforeend", plantilla);
    },

    SeccionBetsConcerts(){
        let plantilla = `
                            <h2 class="blog-post-title">${this.betsConcerts.title}</h2>
                            <p>${this.betsConcerts.content}</p>

                            ${this.betsConcerts.listConcerts.map((val, id) => ` <ul>
                                                                                    <li><a href="${val.href}">${val.content}</a></li>
                                                                                </ul>
                                                                            `
                            ).join("")}
                        `;
        document.querySelector(".bestConcerts").insertAdjacentHTML("beforeend", plantilla);
    },
    */

    show(){

        config.dataMySeccion();
        Object.assign(this, JSON.parse(localStorage.getItem("mySeccion")));

        const ws = new Worker("storage/wsMySeccion.js", {type: "module"});

        let id = [];

        let count = 0;

        ws.postMessage({module: "SeccionFrom", data: this.from});
        ws.postMessage({module: "SeccionFirst", data: this.first});
        ws.postMessage({module: "SeccionAwards", data: this.awards});
        ws.postMessage({module: "SeccionDiscographis", data: this.discographis});
        ws.postMessage({module: "SeccionStyleMusic", data: this.style});
        ws.postMessage({module: "SeccionCaracterist", data: this.caracterist});
        ws.postMessage({module: "SeccionTable", data: this.table});
        ws.postMessage({module: "SeccionBetsConcerts", data: this.betsConcerts});

        id = [".liveAdele", ".firstYears", ".nominations", ".discographit", ".styleMusic", ".caracterist", ".musicVideos", ".bestConcerts"];

            ws.addEventListener("message", (e) => {

                let doc = new DOMParser().parseFromString(e.data, "text/html")

                document.querySelector(id[count]).append(...doc.body.children);

                (id.length-1==count) ? ws.terminate() : count++;
            })
    }

}