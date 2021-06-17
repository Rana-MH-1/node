var fs = require("fs");
var path =require ('path');


fs.readdir(process.argv[2],function(err, files) {
   if (err) {
      return console.error(err);
   }
   files.forEach( function (file) {
       if(path.extname(file)==='.'+process.argv[3]){
        return console.log(file);
       }
   });
});