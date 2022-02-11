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
/*
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


5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.*/


//Programa numero 5;

/*metodos usados
split() separará cada carácter de una cadena y lo convertirá en un array.
reverse() tomará esa matriz e invertirá los elementos dentro de ella.
join() unirá los caracteres que han sido invertidos por la función reverse().


const cadenaVolteda = (cadena = "")=>
(!cadena)
?console.warn("No ingresastes ninguna cadena")
:console.info(cadena.split("").reverse().join(""));

cadenaVolteda();
cadenaVolteda("Hola mundo");*/

//Programa numero 6;

/*const constarCaracter =  (cadena = "",caracter = "") => {

  if(!cadena)return console.warn("No ingresastes ninguna cadena");
  if (!caracter) return console.warn("No ingresastes el caracter a encontrar");

    let i = 0,
    contador = 0;

    while(i!== -1){
      i = cadena.indexOf(caracter,i);
      if(i!== -1){
        i++;
        contador++;
      }
    }
    return console.info(`La palabra ${caracter} se repite ${contador} veces`);
  }

constarCaracter();
constarCaracter("hola");
constarCaracter("hola mundo como hola estas hola y hola","hola");
*/


//Programa numero 7:

/*const palindromo = (texto = "") => {
  if(!texto) return console.warn("No ingresastes ningun texto");

  texto = texto.toLocaleLowerCase();
  let alRevez = texto.split("").reverse().join("");

  return (texto === alRevez)
  ? console.info(`El texto ${texto} si es palindromo = ${alRevez} `)
  : console.info(`El texto ${texto} No es palindromo = ${alRevez} `)
}

palindromo();
palindromo("salas")
*/

//Programa numero 8:
/*
const eliminarCaracter = (texto = "",patron = "") =>
(!texto)
? console.warn("No ingresastes ningun texto")
: (!patron)
? console.warn("No ingresastes el patron a eliminar")
:console.info(texto.replace(new RegExp(patron,"ig"),""));

eliminarCaracter();
eliminarCaracter("xyz1, xyz2, xyz3, xyz4 y xyz5");
eliminarCaracter("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");
*/

//////////////////////////////////////////////////////////

/*
9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
*/

//Programa numero 9:

/*
const numeroAleatorio = () => console.info(Math.round((Math.random()*100)+ 500));


numeroAleatorio();
*/

//Programa numero 10;

const capicua = (numero = 0) => {

  if (!numero) return console.warn("No ingresastes ningun numreo");
  if(typeof numero !== "number") return console.warn("Ingresado ,no es un numero");
}
