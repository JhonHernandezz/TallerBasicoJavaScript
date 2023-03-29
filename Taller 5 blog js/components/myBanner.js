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


/* 
    <div class="imagen-Banner position-absolute">
        <img src="banner-adelle.png" alt="">
      </div>
      <div class="col-8 col-md-7 col-xl-6 mx-4 py-5">
        <h1 class="display-4 fst-italic col-12 ">Title of a longer featured blog post</h1>
        <p class="lead my-3 col-12">Multiple lines of text that form the lede, informing new readers quickly and efficiently
          about what’s most interesting in this post’s contents.</p>
        <p class="lead mb-0"><a href="#" class="text-white fw-bold">Continue reading...</a></p>
      </div>
*/