const {argv} = require('./config/yargs')




const { crearArchivo,listarTabla } = require("./multiplicar/multiplicar");

const comando = argv._[0];
const base = argv.base;
const limite = argv.limite


switch (comando) {
  case "crear":
    crearArchivo(base,limite)
      .then((archivo) => {
        console.log(`Archivo Creado ${archivo.green}`);
      })
      .catch((err) => console.log(err));

    break;
  case "listar":
     listarTabla(base,limite)
      .then((tabla) => {
        console.log(`${tabla}`);
      })
      .catch((err) => console.log(err));

    break;
  default:
    console.log("Comando no reconocido");
    break;
}

// const parametro = argv[2]
// const base = parametro.split('=')[1]
