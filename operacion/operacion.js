//requiereds
const fs = require('fs');
const colors = require('colors');

let data = '';

let listar = (base,limite) => {

	console.log("-------------------------------".green);
	console.log(`--- TABLA DE ${base} ---`.green);
	console.log("-------------------------------".green);
	for(let i = 1; i <= limite ; i++){
		console.log(`${base} * ${i} = ${base*i} \n`);	
	}
	
}

let multiplicar = (base,limite) => {

	return new Promise ((resolve,reject) => {

		if(!Number(base)){
			reject('NO ES UN NÚMERO');
			return;
		}

		for(let i = 1 ; i <= limite ; i++){
			data += `${base} * ${i} = ${base*i} \n`;
		}

		fs.writeFile(`./tablas/tabla_${base}.txt`,data, (err)=> {
			if (err) reject(err);
			else resolve(`tabla_${base}.txt`);
		});	
	});
}

module.exports = {
	multiplicar,
	listar
}
