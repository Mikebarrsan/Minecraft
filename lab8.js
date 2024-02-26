const http = require('http');
const readline = require('readline');
const filesystem = require('fs');

const server = http.createServer( (request, response) => {    
    console.log(request.url);   //Se ejecuta en el servidor
    response.setHeader('Content-Type', 'text/html');
    response.write(`<!DOCTYPE html>
    <html>
        <meta charset="utf-8">
        <body>
            <script>
            //Caso 1
            const arreglo = [-2, -3, -6, 0, 1, 2, 3, 0, 10, -21];
            const caso1 = () => {
                document.write("1. Una función que reciba un arreglo de números <br>[ ");
                var prom, suma=0;
                for (var i = 0; i < arreglo.length; i++) {
                    document.write(arreglo[i]+" ")
                    suma+=arreglo[i];
                }
                prom = suma/arreglo.length;
                document.write(" ] y devuelva su promedio.<br>El promdeio del arreglo es:  "+prom);
            };
            document.write(caso1());
            </script>
        </body>
    </html>`);
    // Caso 2
    const cadena = "Hola mundo";
    filesystem.writeFileSync('archivo_texto.txt', cadena);
    console.log("El archivo archivo_texto se sobreescribió en: 'archivo_texto.txt'");
    
    //Caso 3 (calcular el área de un triángulo)
    const base =8, altura = 12;
    var area_triangulo = (base*altura)/2;
    console.log("El área es igual a: "+area_triangulo);
    response.end();     //Se ejecuta en el servidor
    
});
server.listen(800);