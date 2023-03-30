import config from "../storage/config.js";
export default{
    
    // WORKER LIST 
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
    // ----------------------------------------------------------------
}