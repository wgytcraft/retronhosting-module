const fs = require('fs-extra')
module.exports = function (res, req) {
    /*!
        retronhosting in 1host.js
        licensed under the mit license, 2021 William Horning (@wgyt)
        retronhosting is owned by @retronbv
    */
   var dirname = `${__dirname}/pages`  // config file
   var page404 = "404"
   var doesitexist = fs.pathExists(`${dirname + res.url}.html`, (err, exists) => {console.log(err);return exists;})
   if (res.url.startsWith('/static/')){
       res.writeHead(200)
       var e = res.url.split('/static/');
       res.startFile(`${dirname + e[1]}`)
   }else{
       if (doesitexist){
           res.writeHead(200)
           res.startFile`${dirname + res.url}.html`)
       }else{
            res.writeHead(404)
            res.startFile(`${dirname + page404}.html`)
       }    
   }
   res.end()
}
