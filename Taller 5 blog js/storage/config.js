export default{
    dataMyHeader(){
        localStorage.setItem("myHeader", JSON.stringify({
        title: {
                name: "Adele",
                href: "#"
        },
        company: [
            {
                name: "19",
                href: "#"
            },
            {
                name: "21",
                href: "#"
            },
            {
                name: "25",
                href: "#"
            },
            {
                name: "30",
                href: "#"
            },
        ],
        }))
    },
    dataMyBanner(){
        localStorage.setItem("myBanner", JSON.stringify({
            ContentBanner: {
                    imagen: "img/banner-adelle.png",
                    title: "Adele Laurie Blue Adkins",
                    content: "Es una cantautora y multinstrumentista británica, es una de las artistas musicales con mayores ventas del mundo, con más de 120 millones de ventas entre discos y sencillos.",
                    name:"Continuar...",
                    href:"https://es.wikipedia.org/wiki/Adele"
            }
        }))
    },
    dataMyPost(){
        localStorage.setItem("myPost", JSON.stringify({
            post: [
                {
                    title: "Rolling In The Deep",
                    article: "Featured post",
                    date: "Dic 2010",
                    paragraph: "Relata la historia de una mujer enamorada de su novio. Su amor es tan grande por él que no le permite ver la realidad y piensa que puede confiar en su pareja.",
                    button: {
                        name: "Continuar...",
                        href: "https://es.wikipedia.org/wiki/Rolling_in_the_Deep",
                    },
                    image: "img/adelle-1.jpg",
                },
                {
                    title: "Someone Like You",
                    article: "Featured post",
                    date: "Ene 2011",
                    paragraph: "Narra el final de dicha relación con su exnovio, quien está casado, y sin embargo, ella menciona que la relación no ha terminado para ella.",
                    button: {
                        name: "Continuar...",
                        href: "https://es.wikipedia.org/wiki/Someone_Like_You_(canci%C3%B3n_de_Adele)",
                    },
                    image: "img/adelle-2.jpeg",
                },
        
        
                {
                    title: "Set Fire To The Rain",
                    article: "Featured post",
                    date: "Nov 2011",
                    paragraph: "Narra una historia de desamor y expresa cómo se siente el dolor de un corazón roto por un engaño y una traición.",
                    button: {
                        name: "Continuar...",
                        href: "https://en.wikipedia.org/wiki/Set_Fire_to_the_Rain",
                    },
                    image: "img/adelle-3.png",
                },
                {
                    title: "Skyfall",
                    article: "Featured post",
                    date: "Oct 2012",
                    paragraph: "Quedó para la historia como la primera composición victoriosa que se haya creado para una película de James Bond.",
                    button: {
                        name: "Continuar...",
                        href: "https://es.wikipedia.org/wiki/Skyfall",
                    },
                    image: "img/adelle-4.jpg",
                },
                {
                    title: "When We Were Young",
                    article: "Featured post",
                    date: "Ene 2016",
                    paragraph: "Retrata el sentimiento “al ver a todos con los que alguna vez te peleaste, todos a quienes alguna vez amaste, reunidos recordando su juventud.",
                    button: {
                        name: "Continuar...",
                        href: "https://es.wikipedia.org/wiki/When_We_Were_Young",
                    },
                    image: "img/adelle-5.jpg",
                },
                {
                    title: "Hello",
                    article: "Featured post",
                    date: "Oct 2015",
                    paragraph: "La canción no trata ningún individuo, “Hello es sobre reagruparme y reconectarme conmigo”.",
                    button: {
                        name: "Continuar...",
                        href: "https://es.wikipedia.org/wiki/Hello_(canci%C3%B3n_de_Adele)",
                    },
                    image: "img/adelle-6.jpg",
                },
                {
                    title: "Oh My God",
                    article: "Featured post",
                    date: "Nov 2021",
                    paragraph: "Relata sobre las dificultades de una persona para salir adelante con otra relación después de una ruptura.",
                    button: {
                        name: "Continuar...",
                        href: "https://es.wikipedia.org/wiki/Oh_My_God_(canci%C3%B3n_de_Adele)",
                    },
                    image: "img/adelle-7.jpg",
                }
            ]
        }))
    },
    dataMyAside(){
        localStorage.setItem("myAside", JSON.stringify({
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
            ]
        }))
    },
    dataMySeccion(){
        localStorage.setItem("mySeccion", JSON.stringify({
            from:{
                title: "The Life Of Adele"
            },
            first:{
                title:"Primeros Años",
                date:"March 10, 2023 by ",
                page:"Wikipedia",
                href:"https://es.wikipedia.org/wiki/Adele",
                content:[
                    {
                        paragraphe:"Comenzó a cantar a los cuatro años y afirma que se obsesionó con las voces de algunas intérpretes por cómo cambiaban sus tonos, de enojado a excitado y de alegre a descontento Recuerda que la primera artista que llamó su atención fue Gabrielle, y para imitarla le pidió a su madre comprar un parche ocular, que adornó con lentejuelas, sin embargo, al día siguiente de haberlo usado lo tiró tras sufrir «burlas en la escuela.",
                    },
                    {
                        paragraphe:"Adele firmó su primer contrato discográfico en junio de 2006 con el mánager Jonathan Dickins de September Management, luego de ser recomendadopor Nick Huggett. Sin embargo, en septiembre del mismo año deja dicho sello y firma con Jamie T, de XL. En 2007, prestó su voz para la canción«My Yvonne» de Jack Peñate, incluida en su álbum, Matinée (2007), y fue durante esa grabación que conoció al productor Jim Abbiss, quien se encargó de producir buena parte de su álbum de estudio debut, 19 y su sucesor, 21."
                    }
                ]
            },
            awards:{
                    title:"Premios y nominaciones de Adele",
                    content:"Esta es una lista de los premios y nominaciones de Adele, una cantautora británica de soul y pop nacida el 5 de mayo de 1988 en Londres.",
                    list:[
                        {
                            seeList:"A principios de 2011, Adele lanzó al mercado su segundo material discográfico titulado 21, el cual ha vendido 30 millones de copias mundialmente,y que logró múltiples nominaciones en distintas ceremonias de premiación, destacándose principalmente sus dos nominaciones a los Grammy en las categorías álbum del año y mejor álbum vocal de pop.",
                        },
                        {
                            seeList:"En 2013, Adele ganó el premio mejor canción original en la 85. edición de los Premios Óscar de la película de James Bond por la canción «Skyfall»."
                        },
                        {
                            seeList:`En febrero de 2022, en la 42. entrega de los Premios Brit Adele recibió tres galardones: canción del año (por «Easy on Me»), artista del año y álbum británico del año (por 30). Gracias a esto, logró un total de doce premios logrando ubicarse en el 2º puesto de personas con más Premios Brit.`
                        }
                    ],
                    sublist:[
                        {
                            title:"4 Video Music Honours Awards",
                            content:"Los 4 Video Music Honours Awards son una entrega anual de premios creada por el canal de televisión musical 4Music. Adele ha recibido tres nominaciones."
                        },
                        {
                            title:"American Music Awards",
                            content:"Los American Music Awards son una ceremonia anual de premios entregados a lo mejor de la música, reconocen a los artistas más populares. Fue creada por Dick Clark para competir con los premios Grammy. Adele ha recibido cinco premios de catorce nominaciones."
                        },
                        {
                            title:"AIM Independent Music Awards",
                            content:"Los AIM Independent Music Awards son una ceremonia de premiación realizada anualmente en el Reino Unido para conmemorar a los artistas más influyentes en el país. Adele ha ganado sus cuatro nominaciones."
                        },
                    ]
            },
            discographis:{
                title:"Discografia",
                date:[
                    {
                        number:"30, ",
                        content:"es el título del cuarto álbum de Adele ",
                        year:"2021"
                    },
                    {
                        number:"25, ",
                        content:"es el título del tercer disco de Adele ",
                        year:"2015"
                    },
                    {
                        number:"21, ",
                        content:`Paul Epworth (Florence and the Machine) y Rick Rubin colaboran en el segundo álbum de Adele `,
                        year:"2011"
                    },
                    {
                        number:"19, ",
                        content:`con solo 19 años Adele debuta consu primer album "19" `,
                        year:"2008"
                    },
                ]
            },
            style:
            {
                styleMusic:[
                    {
                        title:"Influencias y estilo musical",
                        content:"Desde muy joven mostró interés por el jazz, el R&B, el blues y soul, «influencias que agobiarían a un cantante menor, pero Adele toma estos géneros con gusto», según Gary McGinley, de No Ripcord. Ella ha declarado que sus mayores influencias son Etta James y Beyoncé. Una de las primeras influencias fue Gabrielle, una cantante británica de soul, a quien ha admirado desde los cinco años, recuerda que emuló a la artista en sus años de escuela, utilizando el parche ocular característico de Gabrielle."
                    },
                    {
                        title:"Estilo vocal y actuaciones en directo",
                        content:`Adele tiene un tipo de voz de mezzosoprano, con un rango vocal que va de C3 a B5, abarcando dos octavas y seis notas. Sin embargo, "Classic FM" dice que a menudo se la confunde con una voz de contralto debido a la aplicación de una mezcla de voz de pecho tensa para alcanzar las notas más bajas, mientras que también observa que su voz se vuelve más clara a medida que asciende en el registro, particularmente de C4 a C5. Según Rolling Stone, después de la cirugía que tuvo debido a un pólipo benigno en sus cuerdas vocales, la voz de Adele se volvió «notablemente más grande y de un tono más puro», y que había agregado cuatro notas más altas a su rango vocal.`
                    }
                ]
            },
            caracterist:{
                title:"Caracteristicas Musicales",
                content:`Desde muy joven mostró interés por el jazz, el R&B, el blues y soul, «influencias que agobiarían a un cantante menor pero Adele toma estos géneros con gusto», según Gary McGinley, de No Ripcord. Ella ha declarado que sus mayores influencias son Etta James y Beyoncé. Una de las primeras influencias fue Gabrielle, una cantante británica de soul, a quien ha admirado desde los cinco años, recuerda que emuló a la artista en sus años de escuela, utilizando el parche ocular característico de Gabrielle. Adele también ha citado las Spice Girls como la mayor gran influencia en lo que respecta a su amor y pasión por la música, afirmando que " ellas me hicieron lo que soy hoy". En una ocasión, Adele ha contado que durante su infancia se disfrazaba de las Spice Girls y las imitaba en cenas familiares. También contó que estaba con el "corazón roto" cuando su miembro favorita, Geri Halliwell, también conocida como "Ginger Spice", se fue del grupo.`,
                text:"Sostiene que «nunca había escuchado a alguien cantar ",
                textBold:"cantar",
                textNormal:"así en vivo»",
                subParrafo:"Sintió una sensación «como que estaba en un túnel de viento, su voz por un poco me golpea. Fue increíble.». Ella reconoce que su madre la indujo a la música de Aaliyah, Lauryn Hill, Mary J. Blige y Alicia Keys. También cita a Dusty Springfield, The Cure, Celine Dion, Whitney Houston, Madonna y Annie Lennox como influencias, y sobre Alabama Shakes y Lana Del Rey dice que son unos de sus artistas favoritos."
            },
            table:{
                title:"Videos Musicales",
                year:"Year",
                song:"Song",
                manager:"Manager",
                contentTable:[
                    {
                        date:"2008",
                        song:"Make You Feel My Love",
                        manager:"Mat Kirkby"
                    },
                    {
                        date:"2010",
                        song:"Rolling In The Deep",
                        manager:"Sam Brown"
                    },
                    {
                        date:"2011",
                        song:"Someone Like You",
                        manager:"Jake Nava"
                    },
                    {
                        date:"2016",
                        song:"Send My Love",
                        manager:"Patrick Daughters"
                    },
                    {
                        date:"2021",
                        song:"Easy On Me",
                        manager:"Xavier Dolan"
                    }
                ],
                contentEnd:"Son las canciones mas vistas en la historia."
            },
            betsConcerts:{
                title:"Mejores Conciertos",
                content:"La creadora de los mega hits Hello, Someone like you, Rolling in the deep, All I Ask o Set Fire To The Rain comparte el listado de los conciertos mas importantes.",
                listConcerts:[
                    {
                        href:"https://es.wikipedia.org/wiki/An_Evening_with_Adele",
                        content:"An Evening with Adele"
                    },
                    {
                        href:"https://es.wikipedia.org/wiki/Adele_Live",
                        content:"Adele Live"
                    },
                    {
                        href:"https://es.wikipedia.org/wiki/Adele_Live_2016",
                        content:"Adele Live 2016"
                    }
                ]
            }
        }))
    },
    dataMyFooter(){
        localStorage.setItem("myFooter", JSON.stringify({
            footer:{
                title:"© Derechos reservados de ",
                head:"CampusLand",
                href:"https://campers.tribu.team/"
            }
        }))
    }
}