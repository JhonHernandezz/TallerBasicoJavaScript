/* El programa muestra primero una tabla de notas con sus equivalentes en el Standard
Grading System o el sistema utilizado en los Estados Unidos que va desde la A hasta la F.

El programa preguntará al usuario su nota y transformará ese resultado al equivalente en
el Standard Grading System. 

También el programa dará una pequeña pero valiosa recomendación al usuario respecto a su nivel de estudio y calidad como estudiante. */

let listado = [
    {tradicional: "90 - 100", point: "12 - 14", letter:"A", SBGRatting: 4},
    {tradicional: "80 - 89", point: "9 - 11", letter:"B", SBGRatting: 3},
    {tradicional: "70 - 79", point: "6 - 8", letter:"C", SBGRatting: 2},
    {tradicional: "60 - 69", point: "3 - 5", letter:"D", SBGRatting: 1},
    {tradicional: "< 60", point: "1 - 2", letter:"E", SBGRatting: 0},
    {tradicional: "0", point: "0", letter:"Z", SBGRatting: 0}
];

console.table(listado);

let opciones = prompt(`
      -> Digite una de las siguientes opciones:
1.   -> Nota traditional's: 
2.   -> Nota por point's:
3.   -> Clasificación por letter's:
4.   -> Clasificación por SBG:
`);

if (opciones == 1 || opciones == 2 || opciones == 3 || opciones == 4){

	if(opciones == 1){
		let traditional = prompt ("Digite la nota que obtuvo: ");

		if (traditional >= 90 && traditional <= 100){
			console.log(`Usted octuvo una nota de: ${traditional} \nCon una puntuación entre: "12 - 14" \nIdentificado con la letra: "A" \nCon un SBGRatting de: "5" \nProficiency Level with Standard: Exceeds proficiency`);

			} else if(traditional >= 80 && traditional <= 89){1
				console.log(`Usted octuvo una nota de: ${traditional} \nCon una puntuación entre: "9 - 11" \nIdentificado con la letra: "B" \nCon un SBGRatting de: "4" \nProficiency Level with Standard: Demostrates proficiency`);

			} else if(traditional >= 70 && traditional <= 79){
				console.log(`Usted octuvo una nota de: ${traditional} \nCon una puntuación entre: "6 - 8" \nIdentificado con la letra: "C" \nCon un SBGRatting de: "3" \nProficiency Level with Standard: Approaches proficiency`);

			} else if(traditional >= 60 && traditional <= 69){
				console.log(`Usted octuvo una nota de: ${traditional} \nCon una puntuación entre: "3 - 5" \nIdentificado con la letra: "D" \nCon un SBGRatting de: "2" \nProficiency Level with Standard: Falls well below proficiency`);

			} else if(traditional >= 1 && traditional <= 59){
				console.log(`Usted octuvo una nota de: ${traditional} \nCon una puntuación entre: "1 - 2" \nIdentificado con la letra: "E" \nCon un SBGRatting de: "1" \nProficiency Level with Standard: Lacks all proficiency`);

			} else if(traditional == 0){
				console.log(`Usted octuvo una nota de: ${traditional} \nCon una puntuación de: "0" \nIdentificado con la letra: "F" \nCon un SBGRatting de: "0" \nProficiency Level with Standard: No attempt made`);
			
		}else {
			alert(`Ingrese una nota valida`);
		}
	}

	if(opciones == 2){
		let points = prompt ("Digite los puntos que obtuvo: ");

		if (points >= 12 && points <= 14){
			console.log(`Usted octuvo una nota entre: "90 - 100" \nCon una puntuación de: ${points} \nIdentificado con la letra: "A" \nCon un SBGRatting de: "5" \nProficiency Level with Standard: Exceeds proficiency`);

			} else if(points >= 9 && points <= 11){
				console.log(`Usted octuvo una nota entre: "80 - 89" \nCon una puntuación de: ${points} \nIdentificado con la letra: "B" \nCon un SBGRatting de: "4" \nProficiency Level with Standard: Demostrates proficiency`);

			} else if(points >= 6 && points <= 8){
				console.log(`Usted octuvo una nota entre: "70 - 79" \nCon una puntuación de: ${points} \nIdentificado con la letra: "C" \nCon un SBGRatting de: "3" \nProficiency Level with Standard: Approaches proficiency`);

			} else if(points >= 3 && points <= 5){
				console.log(`Usted octuvo una nota entre: "60 - 69" \nCon una puntuación de: ${points} \nIdentificado con la letra: "D" \nCon un SBGRatting de: "2" \nProficiency Level with Standard: Falls well below proficiency`);

			} else if(points >= 1 && points <= 2){
				console.log(`Usted octuvo una nota: "< 60" \nCon una puntuación de: ${points} \nIdentificado con la letra: "E" \nCon un SBGRatting de: "1" \nProficiency Level with Standard: Lacks all proficiency`);

			} else if(points == 0){
				console.log(`Usted octuvo una nota de: "0" \nCon una puntuación de: ${points} \nIdentificado con la letra: "F" \nCon un SBGRatting de: "0" \nProficiency Level with Standard: No attempt made`);
			
		}else {
			alert(`Ingrese los puntos validos`);
		}
	}

	if(opciones == 3){
		let letters = prompt("Digite la letra que quiere consultar: ");
	
		if (letters == "A" || letters == "a"){
			console.log(`Usted octuvo una nota entre: "90 - 100" \nCon una puntuación entre: "12 - 14" \nIdentificado con la letra: ${letters} \nCon un SBGRatting de: "5" \nProficiency Level with Standard: Exceeds proficiency`);

			} else if(letters == "B" || letters == "b"){
				console.log(`Usted octuvo una nota entre: "80 - 89" \nCon una puntuación entre: "9 - 11" \nIdentificado con la letra: ${letters} \nCon un SBGRatting de: "4" \nProficiency Level with Standard: Demostrates proficiency`);

			} else if(letters == "C" || letters == "c"){
				console.log(`Usted octuvo una nota entre: "70 - 79" \nCon una puntuación entre: "6 - 8" \nIdentificado con la letra: ${letters} \nCon un SBGRatting de: "3" \nProficiency Level with Standard: Approaches proficiency`);

			} else if(letters == "D" || letters == "d"){
				console.log(`Usted octuvo una nota entre: "60 - 69" \nCon una puntuación entre: "3 - 5" \nIdentificado con la letra: ${letters} \nCon un SBGRatting de: "2" \nProficiency Level with Standard: Falls well below proficiency`);

			} else if(letters == "E" || letters == "e"){
				console.log(`Usted octuvo una nota: "< 60" \nCon una puntuación entre: "1 - 2" \nIdentificado con la letra: ${letters} \nCon un SBGRatting de: "1" \nProficiency Level with Standard: Lacks all proficiency`);

			} else if(letters == "F" || letters == "f"){
				console.log(`Usted octuvo una nota de: "0" \nCon una puntuación de: "0" \nIdentificado con la letra: ${letters} \nCon un SBGRatting de: "0" \nProficiency Level with Standard: No attempt made`);
			
		}else {
			alert(`Ingrese una letra valida`);
		}
	}
		
	if(opciones == 4){
		let sbgs = prompt ("Digite el sbg que quiere consultar: ");

		if (sbgs == 5){
			console.log(`Usted octuvo una nota entre: "90 - 100" \nCon una puntuación entre: 12 - 14 \nIdentificado con la letra: "A" \nCon un SBGRatting de: ${sbgs} \nProficiency Level with Standard: Exceeds proficiency`);

			} else if(sbgs == 4){
				console.log(`Usted octuvo una nota entre: "80 - 89" \nCon una puntuación entre: 9 - 11 \nIdentificado con la letra: "B" \nCon un SBGRatting de: ${sbgs} \nProficiency Level with Standard: Demostrates proficiency`);

			} else if(sbgs == 3){
				console.log(`Usted octuvo una nota entre: "70 - 79" \nCon una puntuación entre: 6 - 8 \nIdentificado con la letra: "C" \nCon un SBGRatting de: ${sbgs} \nProficiency Level with Standard: Approaches proficiency`);

			} else if(sbgs == 2){
				console.log(`Usted octuvo una nota entre: "60 - 69" \nCon una puntuación entre: 3 - 5 \nIdentificado con la letra: "D" \nCon un SBGRatting de: ${sbgs} \nProficiency Level with Standard: Falls well below proficiency`);

			} else if(sbgs == 1){
				console.log(`Usted octuvo una nota: "< 60" \nCon una puntuación entre: "1 - 2" \nIdentificado con la letra: "E" \nCon un SBGRatting de: ${sbgs} \nProficiency Level with Standard: Lacks all proficiency`);
			
			} else if(sbgs == 0){
				console.log(`Usted octuvo una nota de: "0" \nCon una puntuación de: "0" \nIdentificado con la letra: "F" \nCon un SBGRatting de: ${sbgs} \nProficiency Level with Standard: No attempt made`);

		}else {
			alert(`Ingrese un valor valido`);
		}
		
	}

} else {
	alert(`Esta opción no es correcta`)
}