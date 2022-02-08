/* 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo. */

//Programa numero 1:

/* function Leer (){

  let hola = 'Hola mundo';
  return hola.length;
}
console.log(Leer()); */

/* function contarCaracteres (cadena = ""){
  if(!cadena){
    console.warn("No ingresastes ninguna cadena");
  }else{
    console.info(`La cadena ${cadena} tiene
    ${cadena.length} caracteres`);
  }
} */

/* const contarCaracteres = (cadena = "") =>
(!cadena)
?console.warn("No ingresastes ninguna cadena")
:console.info(`La cadena ${cadena} tiene
${cadena.length} caracteres`);

contarCaracteres();
contarCaracteres('Hola mundo');
 */

//Programa 2:

/* function Leer (inicio,final){

  let hola = 'Hola mundo';
  hola.substr(inicio,final);
  console.log(hola.substr(inicio,final));
  console.log(hola.substr(inicio,final).length);
}
Leer(0,4); */

/* const cortarCaracter = (cadena = "",inicio,final) =>
(!cadena)
? console.warn("La cadena esta vacia")
: console.info(`La cadena ingresada ${cadena}, se recortara en y queda ${cadena.substr(inicio,final)}  ` )

cortarCaracter();
cortarCaracter("Hola Mundo",0,4); */

//Programa numero 3:

/* const cadenaArrelgo = (cadena = "", separador = undefined) =>
(!cadena)
? console.warn("La cadena esta vacia")
:(separador === undefined)
? console.warn("No ingresastes el separador")
: console.info(cadena.split(separador));

cadenaArrelgo();
cadenaArrelgo("Hola mundo");
cadenaArrelgo("Hola mundo como estas"," ");
 */

//Programa numero 4:

const repetirTexto = (texto = "", veces =  undefined) => {
  if(!texto){
    return console.warn("No ingresastes ningun texto");
  } if (veces === undefined){
    return console.warn("No ingresastes las veses a repetir")
  }if(Math.sign(veces) === -1) return console.error("El numero de veces no puede tener negativos");
  else
    for(let i = 1; i <= veces;i++){
      console.info(`${texto} ,${i}`);
    }
  }


repetirTexto();
repetirTexto("Hola");
repetirTexto("Hola",4);