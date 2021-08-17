const argv = require ('yargs')
        .option ('b', {
            alias: 'base',
            type: 'number',
            demandOption: true
        })
        .option('l',{
            alias: 'listar',
            type: 'boolean',
            default: false,
            describe: 'Bandera usada para mostrar la tabla en consola'
        })
        .option('h',{
            alias:'hasta',
            type:'number',
            demandOption:true
        })
        .check((argv, options) => {
            if (isNaN (argv.base)) {
                throw 'La base tiene que ser un numero';
            }
            if ( isNaN (argv.hasta)) {
                throw 'El hasta tiene que ser un numero';
            }
            
            return true;
        })
        .argv;

module.exports = argv;