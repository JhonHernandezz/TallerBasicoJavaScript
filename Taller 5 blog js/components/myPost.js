import config from "../storage/config.js";
export default {
    
    // WORKER LIST 
    show(){

        config.dataMyPost();
        Object.assign(this, JSON.parse(localStorage.getItem("myPost")));


        const ws = new Worker("storage/wsMyPost.js", {type: "module"})

       

        ws.postMessage({module: "listSliderCardTitle", data: this.post})

       

        ws.addEventListener("message", (e) =>{

            let doc = new DOMParser().parseFromString(e.data, "text/html");

            document.querySelector(".Slider-card-article").append(...doc.body.children);

            ws.terminate();
        })
    }
    // ----------------------------------------------------------------
}