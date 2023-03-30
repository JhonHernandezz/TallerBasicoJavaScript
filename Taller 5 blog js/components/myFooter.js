import config from "../storage/config.js";
export default{
 
    // WORKER LIST 
    show(){
        
        config.dataMyFooter();
        Object.assign(this, JSON.parse(localStorage.getItem("myFooter")));

        const ws = new Worker("storage/wsMyFooter.js", {type: "module"});

        let id = [];
        let count = 0;

        ws.postMessage({module: "myFooter", data : this.footer});

        id = [".footer"];

            ws.addEventListener("message", (e) => {

                let doc = new DOMParser().parseFromString(e.data, "text/html");

                document.querySelector(id[count]).append(...doc.body.children);

                (id.length-1===count) ? ws.terminate() : count++;

            })
    }
    // ----------------------------------------------------------------
}