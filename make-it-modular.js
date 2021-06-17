const mymodule = require('./mymodule.js');
const dir =process.argv[2];
const filterStr = process.argv[3];


mymodule(dir,filterStr,function(err, files) {
   if (err) {
      return console.error(err);
   }
   files.forEach( function (file) {
        return console.log(file);
       }
   );
});