const {exec} = require("child_process");
const {generateSW} = require('workbox-build');
const labs = require('./labs.json');

if (process.argv.length < 3)
    console.log("No lab code given!");
else{
    const [first, second, ...codes] = process.argv;

    for(let code of codes){
        if (code in labs){
            exec(`cd labs && claat export ${labs[code]}`, async (err, stdout, stderr)=>{
                const message = stdout || err || stderr;
                console.log(message);
            })
        }else{
            console.log(`lab code ${code} not found!`);
        }
    }

}


