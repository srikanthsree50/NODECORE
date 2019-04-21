const yargs = require('yargs');
const getNotes = require('./notes');

yargs.command({

    command:'add',
    describe:'add a new note...',
    builder:{
        title:{
            describe: 'note title',
            demandOption:true,
            type:string
        }
    },
    handler:function(argv){
        console.log('adding notes...',argv);
    }
})


yargs.command({

    command:'remove',
    describe:'remove a note...',
    handler:function(){
        console.log('removing notes...');
    }
})


yargs.command({

    command:'list',
    describe:'list a note...',
    handler:function(){
        console.log('listing notes...');
    }
})


yargs.command({

    command:'read',
    describe:'read a note...',
    handler:function(){
        console.log('reading notes...');
    }
})

console.log(yargs.argv);
