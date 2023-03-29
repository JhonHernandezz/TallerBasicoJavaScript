import config from "../storage/config.js";
export default{
    showImage(){
        config.dataMyBanner();
        Object.assign(this, JSON.parse(localStorage.getItem("myBanner")));
        document.querySelector(".Style-img").style.background = `url(${this.imagen})`
    },

    // WORKER LIST 
    show(){

        config.dataMyBanner();
        Object.assign(this, JSON.parse(localStorage.getItem("myBanner")));


        const ws = new Worker("storage/wsMyBanner.js", {type: "module"});

        let id = [];

        let count = 0;

        ws.postMessage({module: "contentBanner", data: this.ContentBanner});

        id = [".TitleBanner", ".ContentBanner", ".Btn-Banner"];

            ws.addEventListener("message", (e)=>{

                let doc = new DOMParser().parseFromString(e.data, "text/html");

                document.querySelector(id[count]).append(...doc.body.children);

                (id.length-1==count) ? ws.terminate() : count++;

            })
    }
    // ----------------------------------------------------------------
}