const opciones = {
	base: {
		demand: true,
		alias: 'b'
	},
	limite: {
		alias: 'l',
		default: 10
	}
}

const argv = require('yargs')
	.command('listar','Imprime en consola la tabla de multiplicar',opciones)
	.command('crear','Genera un archivo con las tablas de multiplicar',opciones)
	.argv;

module.exports = {
	argv
}