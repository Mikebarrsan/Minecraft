//Caso 1
const caso1 = () => {
    document.write("1. Inserta un número para generar una tabla con los números del 1 al número dado con sus cuadrados y cubos:")
    const numero = prompt("Ingresa número: ");
    document.write("<table border='1'>");
    document.write("<tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr>");
    for(var i=1; i<=numero; i++){
        var cuadrado = i*i;
        var cubo = i*i*i;
        document.write("<tr><td>"+i+"</td><td>"+cuadrado+"</td><td>"+cubo+"</td></tr>");
    }
    document.write("</table>");
};
//Caso 2
const caso2 = () => {
    const valor1 = Math.round(Math.random()*10), valor2 = Math.round(Math.random()*10), suma = valor1 + valor2;
    var tiempoInicio = new Date().getTime();
    const resultado = prompt("2. Ingresa resultado de la suma\n"+valor1+"+"+valor2+"=");
    document.write("<br>2. Inserta el resultado de la suma de 2 números generados de manera aleatoria:<br>"+valor1+"+"+valor2+"= ?<br>Respuesta correcta: "+suma)
    if(resultado==suma){
        var tiempoFin = new Date().getTime(), tiempototal = Math.round((tiempoFin - tiempoInicio)/1000);
        alert("Respuesta CORRECTA\nTardaste: "+tiempototal+" segundos en responder");
        document.write("<br>¿Respondió correctamente? Si<br>Tardo "+tiempototal+" segundos en responder");
    }
    else{
        var tiempoFin = new Date().getTime(), tiempototal = Math.round((tiempoFin - tiempoInicio)/1000);
        alert("Respuesta INCORRECTA\nTardaste: "+tiempototal+" segundos en responder");
        document.write("<br>¿Respondió correctamente? No<br>Tardo "+tiempototal+" segundos en responder");
    }
};
//Caso 3
const arreglo = [-2, -3, -6, 0, 1, 2, 3, 0, 10, -21];
const caso3 = () => {
    document.write("<br><br>3. Regresa la cantidad de números negativos, 0's y números positivos en el arreglo:<br>[ ");
    var negatives=0, zeros=0, positives=0;
    for (var i = 0; i < arreglo.length; i++) {
        document.write(arreglo[i]+" ")
        if(arreglo[i]<0){
            negatives++;
        }
        else if(arreglo[i]==0){
            zeros++;
        }
        else{
            positives++;
        }
    }
    document.write(" ]<br>Números negativos: "+negatives+"<br>Ceros: "+zeros+"<br>Números Positivos: "+positives);
};
//Caso 4
const matriz = [[1, 2, 3], [4, 5, 6], [9, 8, 10]]
const caso4 = (matriz) => {
    const filas = matriz.length;
    var matriz_prom = [];
    for(var i=0; i<filas; i++){
        var longitud = matriz[i].length;
        var suma = 0, promedio = 0;
        for(var j=0; j<longitud; j++){
            suma+=matriz[i][j];
        }
        promedio = suma/longitud;
        matriz_prom.push(promedio);
    }
    document.write ("<br><br>4. Regresa arreglo con los promedios de cada uno de los renglones de la matriz:<br>[[1, 2, 3],<br>[4, 5, 6],<br>[9, 8, 10]]<br>Promedios: ["+matriz_prom+"]");
};
//Caso 5
const cadena_numerica = 35785;
const caso5 = (cadena_numerica) => {
    var longitud = cadena_numerica.toString().length;
    var arreglo_numerico = cadena_numerica.toString();
    var orden_inverso = [];
    for(var i=longitud-1; i>=0;i--){
        orden_inverso.push(arreglo_numerico[i])
    }
    document.write ("<br><br>5. Regresa un número ("+cadena_numerica+") con sus dígitos en orden inverso.<br>Orden inverso: ");
    for(var i=0; i<longitud;i++){
        document.write(orden_inverso[i]);
    }
};

// Caso 6

// Constructor de Fibonacci con 2 métodos
function Fibonacci(numero){
    this.resultado = [];
    this.calcularSecuencia(numero);
    this.mostrarResultado();
}

// Método que calcula la secuencia
Fibonacci.prototype.calcularSecuencia = function(numero){
    this.resultado = [];
    let a = 0, b = 1;
    for (let i=0; i<numero; i++){
        this.resultado.push(a);
        let temp = a;
        a = b;
        b = temp + b;
    }
};

// Método que muestra el resultado
Fibonacci.prototype.mostrarResultado = function(){
    document.write("<br><br>6. La secuencia de Fibonacci es una serie en la que cada número es la suma de los dos anteriores: 0, 1, 1, 2, 3, 5, 8, 13, 21, y así sucesivamente, con aplicaciones en matemáticas y la naturaleza. El código que desarrolle calcula n números de la secuencia.<br>Secuencia de Fibonacci: " + this.resultado.join(', '));
};

function caso6(){
    const numero = prompt("Ingresa número de elementos en la secuencia fibonacci: ");
    const fibonacci = new Fibonacci(numero);
}

caso1();
caso2();
caso3(arreglo);
caso4(matriz);
caso5(cadena_numerica);
caso6();