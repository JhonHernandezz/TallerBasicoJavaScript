import myHeader from "./components/myHeader.js";
import myBaner from "./components/myBaner.js";
import myPost from "./components/myPost.js"; 
import myAside from "./components/myAside.js";
import mySeccion from "./components/mySeccion.js";
import myFooter from "./components/myFooter.js";

myHeader.show();

myBaner.showImage();
myBaner.listTitleBanner();
myBaner.listContentBanner();
myBaner.Button();

myPost.listSliderCardTitle(); 

myAside.showAside();

mySeccion.SeccionFrom();
mySeccion.SeccionFirst();
mySeccion.SeccionAwards();
mySeccion.SeccionDiscographis();
mySeccion.SeccionStyleMusic();
mySeccion.SeccionCaracterist();
mySeccion.SeccionTable();
mySeccion.SeccionBetsConcerts();

myFooter.myFooter();
