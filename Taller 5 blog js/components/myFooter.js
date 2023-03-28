export default{
    footer:{
            title:"© Derechos reservados de ",
            head:"CampusLand",
            href:"https://campers.tribu.team/"
    },

    /**
    myFooter(){
        let plantilla = "";
        this.footer.forEach((val, id) => {
            plantilla += `
                        <p>${val.title} <a href="${val.href}">${val.head}</a></p>
                        <p><a href="#">Back to top</a></p>
                        `
        });
        document.querySelector(".footer").insertAdjacentHTML("beforeend", plantilla);
    }
    **/
        
    // WORKER LIST 
    show(){
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