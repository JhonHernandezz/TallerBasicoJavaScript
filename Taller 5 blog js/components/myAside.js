export default{
    nav:[
        {
            title:"About",
            paragranph:"Adele Laurie Blue Adkins ( Londres, 5 de mayo de 1988 ), conocida simplemente como Adele, es una cantautora y multinstrumentista británica. Destacada por su distintiva voz y sus baladas de desamor, su música abarca una gama de estilos desde soul y pop, hasta R&B."
        },
        {
            title:"Archives",
            link:[
                {
                    name:"20 - Enero - 2009",
                    href:"http://news.bbc.co.uk/1/hi/entertainment/7841069.stm"
                },
                {
                    name:"08 - Febrero - 2009",
                    href:"https://www.mtv.com/news/d8z6tr/grammy-2009-winners-list"
                },
                {
                    name:"27 - Marzo - 2011",
                    href:"https://www.theguardian.com/music/2011/mar/27/adele-21-letterman-no1-interview"
                },
                {
                    name:"13 - Septiembre - 2011",
                    href:"https://metro.co.uk/2011/09/13/adeles-gets-three-guinness-world-records-to-top-amazing-2011-147807/"
                },
                {
                    name:"13 - Febrero - 2012",
                    href:"https://www.telegraph.co.uk/culture/music/music-news/9078334/Grammy-Awards-2012-Adele-wins-six-awards-tying-with-Beyonce-for-most-trophies-won-in-one-night.html"
                },
                {
                    name:"18 - Abril - 2012",
                    href:"https://content.time.com/time/specials/packages/article/0,28804,2111975_2111976_2111950,00.html"
                },
                {
                    name:"16 - Diciembre - 2012",
                    href:"https://www.bbc.co.uk/news/entertainment-arts-20747039"
                },
                {
                    name:"28 - Enero - 2014",
                    href:"https://los40.com.ar/los40/2014/01/28/actualidad/1390902780_064516.html"
                },
                {
                    name:"06 - Mayo - 2014",
                    href:"https://corrientealterna.net/2014/05/se-rumora-que-25-seria-el-nombre-del-nuevo-album-de-adele/"
                },
                {
                    name:"22 - Julio - 2015",
                    href:"https://www.billboard.com/pro/adele-next-album-rumor/"
                },
                {
                    name:"02 - Noviembre - 2015",
                    href:"https://www.elcomercio.com/tendencias/entretenimiento/hello-adele-record-descargas-25.html"
                },
                {
                    name:"03 - Noviembre - 2015",
                    href:"https://www.bbc.co.uk/mediacentre/proginfo/2015/46/adele-at-the-bbc?ns_mchannel=social&ns_campaign=bbc_press_office&ns_source=twitter&ns_linkname=corporate"
                },
                {
                    name:"14 - Diciembre - 2015",
                    href:"https://www.vinilonegro.com/2015/12/adele-anuncia-gira-por-estados-unidos-canada-y-mexico/"
                },
                {
                    name:"22 - Enero - 2016",
                    href:"https://peopleenespanol.com/article/adele-rompe-record-de-vistas-en-youtube-con-su-cancion-hello/"
                },
                {
                    name:"27 - Septiembre 2016",
                    href:"https://www.eluniversal.com.mx/articulo/espectaculos/musica/2016/09/27/adele-logra-certificacion-de-diamante-con-disco-25/"
                },
                {
                    name:"23 - Noviembre - 2016",
                    href:"https://www.vinilonegro.com/2016/11/adele-cerrara-definitivamente-su-gira-en-wembley-con-dos-conciertos-en-el-verano-de-2017/"
                },
                {
                    name:"04 - Marzo - 2021",
                    href:"https://www.telegraph.co.uk/culture/music/rockandpopfeatures/8269710/Adele-I-want-to-discover-my-own-sound.html"
                },
                {
                    name:"13 - Octubre - 2021",
                    href:"https://www.dodmagazine.es/adele-pone-fecha-a-30-su-nuevo-disco/"
                },
                {
                    name:"16 - Octubre - 2021",
                    href:"https://chartmasters.org/adele-albums-and-songs-sales/"
                }
            ]
        },
        {
            title:"Elsewhere",
            link:[
                {
                    name:"Facebook",
                    href:"https://www.facebook.com/adele"
                },
                {
                    name:"Twitter",
                    href:"https://twitter.com/adele"
                },
                {
                    name:"Instagram",
                    href:"https://www.instagram.com/adele/"
                }
            ]
        }
    ],

    showAside(){
        const data = this.nav.map((val, id) => {
            return(
                (val.link)
                ?this.list(val) /* if */
                :this.cards(val) /* else */
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
}