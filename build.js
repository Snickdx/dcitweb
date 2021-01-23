const {exec} = require("child_process");
const {generateSW} = require('workbox-build');
const labs = require('./labs.json');
const config = require("./workbox-config");

if (process.argv.length < 3)
    console.log("No code given!");
else{
    const code = process.argv[2];
    
    if (code in labs){
        exec(`cd labs && claat export ${labs[code]}`, async (err, stdout, stderr)=>{
            const message = stdout || err || stderr;
            console.log(message);
            const {count, size} = await generateSW(config);
            console.log(`Generated ${config.swDest}, precached ${count} files, total size ${size} bytes`);
        })
    }else{
        console.log('Code not found!');
    }
}


