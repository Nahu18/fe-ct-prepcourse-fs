/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array [0];
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return (array.pop());
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return (array.length);
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   return array.map ( (num) => {
      return num + 1});
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return (array);
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return (array);
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   palabras ["Hello", "world!"];
   return (palabras.join(' '));
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   if (array.includes (elemento)) {return true;
   }
   return false;
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   arrayOfNums [1, 2, 3, 4, 5];
		var suma = 0;
		for (var x = 0; x < arrayOfNums.length; x++) {
			suma = suma + arrayOfNums[x];
		}
      return (suma);
   }

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   resultadosTest [1, 4, 7, 10, 4];
		var suma = 0;
		for (var x = 0; x < resultadosTest.length; x++) {
			suma = suma + resultadosTest[x];
		}
	return (suma / resultadosTest.length);
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   arrayOfNums [1, 2, 3, 4, 5];
   return (Math.max (...arrayOfNums));
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   var arr = Array.from(arguments);
   if (arr.length === 0) {return (0)
   }
   else if (arr.length === 1) {return (arr [0])
   }
   return arr.reduce((x0, x1) => x0 * x1);
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var elementos = 0;
   for (var i = 0; i < array.length; i++) {
      if (array[i] > 18) {
         (elementos += 1)
      }
   }
   return elementos
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:

   // 1 = Domingo
   // 2 = Lunes
   // 3 = Martes
   // 4 = Miércoles
   // 5 = Jueves
   // 6 = Viernes
   // 7 = Sábado 

   if (numeroDeDia == 1 || numeroDeDia == 7) {
      return ("Es fin de semana")
   }
   else if (numeroDeDia == 2 || numeroDeDia == 3 || numeroDeDia == 4 || numeroDeDia == 5 || numeroDeDia == 6) {
      return ("Es dia laboral")
   }
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   var arr = num.toString ();
   var arrSeparado = arr.split ('');
   if (arrSeparado [0] == 9) {
      return true
   }
   return false
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   var arr = array.every ((str) => {
      return str === array [0];
   });
   return (arr);
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var eneroMarzoNoviembre = [];
   array.map((mes) => {
      if(mes === "Enero" || mes === "Marzo" || mes === "Noviembre") {
         eneroMarzoNoviembre.push(mes)}
      });
   if(eneroMarzoNoviembre.length===3){
     return eneroMarzoNoviembre
   };
   return ("No se encontraron los meses pedidos");
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   var tabla = [];
   for (var i = 0; i <= 10; i++) {
         (elemento = 6 * i);
         tabla.push (elemento);
      };
   return (tabla);
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   var mayoresACien = [];
   array.map((num) => {if(num > 100 && num <= 200) {
      mayoresACien.push(num)}
   });
   return mayoresACien
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   var numeros = [];
   for (var i = 0; i < 10; i++) {
      num = num + 2;
      if (num === i) {
         break;
      }
      else {numeros.push (num);
      }
   }
   if (i < 10) {
      return "Se interrumpió la ejecución"
   }
   else return numeros;
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   var numeros = [];
   for (var i = 0; i < 10; i++) {
      if (i === 5) {
         continue;
      }
      num += 2;
      numeros.push (num)
   }
   return numeros
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
