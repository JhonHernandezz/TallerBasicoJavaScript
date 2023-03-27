export default{
    footer:[
        {
            title:"© Derechos reservados de ",
            head:"CampusLand",
            href:"https://campers.tribu.team/"
        }
    ],

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
}