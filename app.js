

const {multiplicar,listar} = require('./operacion/operacion');

const argv = require('./config/yargs').argv;

const colors = require('colors');

//console.log("Limite: "+argv.limite);

let comando = argv._[0];

switch (comando) {
	case 'listar':
		listar(argv.base,argv.limite);
		break;
	case 'crear':
		multiplicar(argv.base,argv.limite)
				.then(archivo => console.log(`Archivo creado: ${archivo}`.green))
				.catch(err => console.log(err));
		break;
	default:
		console.log("NO ES UN COMANDO RECONOCIDO");
		break;
}


//console.log(argv2);
/*let base = process.argv[2].split("=")[1];
console.log(base);*/



