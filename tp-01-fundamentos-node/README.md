# Trabajo Practico 01

## Descripción
Qué construye el proyecto.

Este proyecto construye un desarrollo sobre los primeros pasos de Node.js, donde hemos comenzado con la creacion de una ficha de videojuegos, este muestra datos conservados mediante una constante , para luego mostrarlos y construir una ficha de texto con dichos datos, estos se guardaran en un archivo generado por el mismo codigo.


## Cómo ejecutar
Cómo ejecutar ambos programas.

Seleccionamos el archivo que queremos ejecutar ya sea el "index.js" o el "orden-event-loop.js" , el siguiente paso es abrir la terminal y seleccionar la carpeta donde se encuentran estos archivos mediante el codigo "cd ./repositorio_trabajos", seguido de "cd ./tp-01-fundamentos-node" y por ultimo aplicamos el paso para correr el  archivo. En el caso que corramos el archivo "index.js", en la terminal escribimos "node index.js {nombre del estudiante}", y en el caso que seleccionemos el archivo "orden-event-loop.js", aplicamos lo mismo en la terminal pero con el nombre del archivo "node orden-event-loop.js"





## Archivo generado
Dónde se genera salida/ficha-videojuego.txt

Estos archivos se empiezan a preparar en las constantes "carpetaSalida" y "rutaArchivo" , mediante la funcion "path.join" que esta marca su ubicacion. En este momento la carpeta no existe. 
La carpeta y el archivo se empiezan a crear en el momento que se ejecuta: 
"fs.mkdirSync(carpetaSalida, { recursive: true });

fs.writeFileSync(rutaArchivo, ficha, "utf8");" , donde primero se crea la carpeta y luego el archivo
 


## Conceptos
