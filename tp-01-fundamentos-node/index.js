const nombre_estudiante = process.argv[2] ?? "Estudiante";

const versionNode = process.version;

const plataformaSitema = process.platform;

console.log(`Bienvenido, ${nombre_estudiante}`);

const fs = require("node:fs");

const path = require("node:path");

const videojuego = {
 titulo: "Read Dead Redemption 2",
 estudio : "Rockstar Games",
 anio: 2018,
 plataformas: ["PlayStation 4", "Xbox One", "PC"],
 multijugador: true,
};

const plataformasComoTexto = videojuego.plataformas.join(", ");

const estado = videojuego.multijugador ? "Si" : "No";

const ficha = `FICHA DE VIDEOJUEGO
=================
Estudiante: ${nombre_estudiante}
Node.js: ${versionNode}
Plataforma del sistema: ${plataformaSitema}


Título: ${videojuego.titulo}
Estudio: ${videojuego.estudio}
Año: ${videojuego.anio}
Plataformas: ${plataformasComoTexto}
¿Es Multijugador?: ${estado}
`;

const carpetaSalida = path.join(__dirname, "salida");

const rutaArchivo = path.join(carpetaSalida, "ficha-videojuego.txt");

fs.mkdirSync(carpetaSalida, { recursive: true });

fs.writeFileSync(rutaArchivo, ficha, "utf8");

console.log(ficha);

console.log(`Archivo generado en: ${rutaArchivo}`);