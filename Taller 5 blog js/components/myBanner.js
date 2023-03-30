import config from "../storage/config.js";
export default{
    
    // WORKER LIST 
    show(){

        config.dataMyBanner();
        Object.assign(this, JSON.parse(localStorage.getItem("myBanner")));

        const ws = new Worker("storage/wsMyBanner.js", {type: "module"});

        ws.postMessage({module: "Banner", data: this.ContentBanner});


            ws.addEventListener("message", (e)=>{

                let doc = new DOMParser().parseFromString(e.data, "text/html");

                document.querySelector(".contentBanner").append(...doc.body.children);

                ws.terminate();


            })
    }
    // ----------------------------------------------------------------
}