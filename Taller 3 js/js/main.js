let formulario = document.getElementById('formulario');
let myFormularioCampus = document.querySelector("#myFormularioCampus");
let myFormularioTrainer = document.querySelector("#myFormularioTrainer");
let myFormularioCamper = document.querySelector("#myFormularioCamper");
let NivelCamper = document.getElementById('NivelCamper');
let LenguajesProgramacion = document.getElementById('LenguajesProgramacion');

let campus = {};

// Cambiar formularios entre Trainer's Camper's y Nuevos
formulario.addEventListener("change", function(){
    var opcion = document.getElementById("formulario").value;
    switch(opcion){
      case "form1":
        document.getElementById("form1").style.display = "block";
        document.getElementById("form2").style.display = "none";
        document.getElementById("form3").style.display = "none";
        break;

      case "form2":
        document.getElementById("form1").style.display = "none";
        document.getElementById("form2").style.display = "block";
        document.getElementById("form3").style.display = "none";
        break;

      case "form3":
        document.getElementById("form1").style.display = "none";
        document.getElementById("form2").style.display = "none";
        document.getElementById("form3").style.display = "block";
        break;
    }
});
// --------------------------------------------------------

// Cambiar formulario entre Basico, Intermedio y avanzado
NivelCamper.addEventListener("change", function(){
  var nivell = document.getElementById("NivelCamper").value;
  switch(nivell){
    case "Nivel-Camper-Basico":
      document.getElementById("Nivel-Camper-Basico").style.display = "block";
      document.getElementById("Nivel-Camper-Intermedio").style.display = "none";
      document.getElementById("Nivel-Camper-Avanzado").style.display = "none";
      break;

    case "Nivel-Camper-Intermedio":
      document.getElementById("Nivel-Camper-Basico").style.display = "none";
      document.getElementById("Nivel-Camper-Intermedio").style.display = "block";
      document.getElementById("Nivel-Camper-Avanzado").style.display = "none";
      break;

    case "Nivel-Camper-Avanzado":
      document.getElementById("Nivel-Camper-Basico").style.display = "none";
      document.getElementById("Nivel-Camper-Intermedio").style.display = "none";
      document.getElementById("Nivel-Camper-Avanzado").style.display = "block";
      break;
  }
});
// --------------------------------------------------------

// Cambiar formulario entre Si cuanta con conocimientos
LenguajesProgramacion.addEventListener("change", function(){
  var conocimiento = document.getElementById("LenguajesProgramacion").value;
  switch(conocimiento){
    case "Si":
      document.getElementById("Si").style.display = "block";
      document.getElementById("No").style.display = "none";
      break;

    case "No":
      document.getElementById("Si").style.display = "none";
      document.getElementById("No").style.display = "block";
      break;
  }
});
// --------------------------------------------------------

myFormularioCampus.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target))
    campus[`${data.nombreSede} `] = {Trainers: [], Camper: [], Nuevos: []};

    listaSedes();
    myFormularioCampus.reset();
})

let listaSedes = ()=>{
    let sedeTrainer = document.querySelector("[name='sedeTrainer']");
    let sedeCamper = document.querySelector("[name='sedeCamper']");
    let sedeIngresoNuevo = document.querySelector("[name='sedeIngresoNuevo']");
    sedeTrainer.innerHTML = null;
    sedeCamper.innerHTML = null;
    sedeIngresoNuevo.innerHTML = null;
    for (let [val, id] of Object.entries(campus)) {
        sedeTrainer.insertAdjacentHTML("beforeend", `
            <option value="${val}">${val}</option>
        `);

        sedeCamper.insertAdjacentHTML("beforeend", `
            <option value="${val}">${val}</option>
        `);

        sedeIngresoNuevo.insertAdjacentHTML("beforeend", `
            <option value="${val}">${val}</option>
        `);
    }
}

// Guarda los datos del formulario de trainers 
myFormularioTrainer.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    let sedeTrainer = data.sedeTrainer;
    delete data.sedeTrainer;
    campus[`${sedeTrainer}`]["Trainers"].unshift(data);
    console.log(campus);
    myFormularioTrainer.reset();
})
// ---------------------------------------- 

// Guarda los datos del formulario de campers 
myFormularioCamper.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    let sedeCamper = data.sedeCamper;
    delete data.sedeCamper;
    campus[`${sedeCamper}`]["Camper"].unshift(data);
    console.log(campus);
    myFormularioCamper.reset();
})
// ---------------------------------------- 

// Guarda los datos del formulario de ingresos nuevos 
myFormularioIngresoNuevo.addEventListener("submit", (e)=>{
  e.preventDefault();
  let data = Object.fromEntries(new FormData(e.target));
  let sedeIngresoNuevo = data.sedeIngresoNuevo;
  delete data.sedeIngresoNuevo;
  campus[`${sedeIngresoNuevo}`]["Nuevos"].unshift(data);
  console.log(campus);
  myFormularioIngresoNuevo.reset();
})
// ---------------------------------------- 