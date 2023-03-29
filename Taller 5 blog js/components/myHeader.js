import config from "../storage/config.js";
export default{
    
    // WORKER LIST 
    show(){
        
        config.dataMyHeader();
        Object.assign(this, JSON.parse(localStorage.getItem("myHeader")));


        // Creamos el worker en una constante
        const ws = new Worker("storage/wsMyHeader.js", {type: "module"})

        // Creamos una etiqueta id que va a llamar a las listas 
        let id = [];

        // Creamos un contador 
        let count = 0;

        //Enviamos el mensaje de la primera lista title "La palabra que va despues de modulo, es la funcion que debe ir con el Storage"
        ws.postMessage({module: "listTitle", data: this.title});

        //Enviamos el mensaje de la segunda lista company "La palabra que va despues de modulo, es la funcion que debe ir con el Storage"
        ws.postMessage({module: "listCompany", data: this.company});

        // Luego llamamos al id con las clases de los apartados de HTML
        id = ["#title", "#company"];

        //Esta es la información que va a llegar del worker
            // Creamos un evento de escuchar EventListener ("e, es el evento de escuchar")
            ws.addEventListener("message", (e)=>{

                // Creamos una variable nueva con la propiedad de DomParser con una data y una propiedad de HTML
                let doc = new DOMParser().parseFromString(e.data, "text/html");

                // Insertamos en el index la informacion de los selectores y luego agregamos la informacion de los selectores hijos
                document.querySelector(id[count]).append(...doc.body.children);

                // Finalizamos el trabajo del worker
                (id.length-1==count) ? ws.terminate() : count++;
            })

    }
    // ----------------------------------------------------------------

}