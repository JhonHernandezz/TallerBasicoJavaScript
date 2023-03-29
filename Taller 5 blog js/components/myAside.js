import config from "../storage/config.js";
export default{
    

    /* 
    showAside(){
        const data = this.nav.map((val, id) => {
            return(
                (val.link)
                ?this.list(val) 
                :this.cards(val) 
            )
        });

        document.querySelector("#Aside").insertAdjacentHTML("beforeend", data.join(""))
    },

    cards(p1){
        return `<div class="p-4 mb-3 rounded">
        <h4 class="fst-italic">${p1.title}</h4>
        <p class="mb-0">${p1.paragranph}</p>
      </div>`;
    },

    list(p1){
        return `<div class="p-4">
        <h4 class="fst-italic">${p1.title}</h4>
        <ol class="list-unstyled mb-0"> ${p1.link.map((val, id) => `<li><a href="${val.href}">${val.name}</a></li>`).join("")}</ol>
      </div> `;
    } 
    */

    show(){ 

        config.dataMyAside();
        Object.assign(this, JSON.parse(localStorage.getItem("myAside")));

        const ws = new Worker("storage/wsMyAside.js", {type: "module"})

        let id = [];
        let count = 0;
    
            ws.postMessage({module: "showAside", data : this.nav});
    
            id = ["#Aside"];
    
            ws.addEventListener("message", (e) => {
    
                let doc = new DOMParser().parseFromString(e.data, "text/html");
    
                document.querySelector(id[count]).append(...doc.body.children);
    
                (id.length-1==count) ? ws.terminate() : count++;
    
            })
        

    },

}