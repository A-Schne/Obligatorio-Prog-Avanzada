// Archivo JavaScript opcional
console.log("Página cargada correctamente.");

function abrirDocumentacion() {
    // Abre ventana vacía
    const nuevaVentana = window.open('', '_blank');
    // La ventana contiene todos los .html como botones
    nuevaVentana.document.write(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Documentación de Concurrencia</title>
            <link rel="stylesheet" href="styles.css">
        </head>
        <body>
            <container>
                <h1>Documentación de Concurrencia</h1>
                <div>
                    <button onclick="window.open('http://localhost:8080/job/Obligatorio/job/main/lastSuccessfulBuild/artifact/concurrencia/docs/EmpaquetadoDePedido.html', '_blank')">EmpaquetadoDePedido.html</button>
                    <button onclick="window.open('http://localhost:8080/job/Obligatorio/job/main/lastSuccessfulBuild/artifact/concurrencia/docs/EnvioPaquete.html', '_blank')">EnvioPaquete.html</button>
                    <button onclick="window.open('http://localhost:8080/job/Obligatorio/job/main/lastSuccessfulBuild/artifact/concurrencia/docs/Main.html', '_blank')">Main.html</button>
                    <button onclick="window.open('http://localhost:8080/job/Obligatorio/job/main/lastSuccessfulBuild/artifact/concurrencia/docs/Paquete.html', '_blank')">Paquete.html</button>
                    <button onclick="window.open('http://localhost:8080/job/Obligatorio/job/main/lastSuccessfulBuild/artifact/concurrencia/docs/Pedido.html', '_blank')">Pedido.html</button>
                    <button onclick="window.open('http://localhost:8080/job/Obligatorio/job/main/lastSuccessfulBuild/artifact/concurrencia/docs/ProcesamientoDePago.html', '_blank')">ProcesamientoDePago.html</button>
                </div>
            </container>
        </body>
        </html>
    `);
    
    nuevaVentana.document.close();
}

