let wsMyFooter = {

    myFooter(p1){
        return `
                <p>${p1.title} <a href="${p1.href}">${p1.head}</a></p>
                <p><a href="#">Back to top</a></p>
               `;
    }
}

self.addEventListener("message", (e) => {
    postMessage(wsMyFooter[`${e.data.module}`](e.data.data));
})