
const {db2} = require('../../../practice-project-2022-before-back/server/src/models/index')

console.log(db2);
//  const {sum, pow2} = require('./math')
//  const Math = require('./math')

// const res = Math.sum (1, 2, 3, 5);
// console.log(res);

// const res2 = Math.pow2(5);
// console.log(res2);

const _ = require('lodash');
const fs = require('fs');
const os = require('os');
const util = require('util');
const path = require('path');



const data = fs.readFileSync('./README.md', {
    encoding: 'utf8'
}
);
console.log(data);

console.log(_.sum([1,2,3,4]));
console.log(_.concat([1,2,3],[10,20]));


const userHostname = os.hostname
console.log(userHostname);
console.log(os.homedir());
console.log(os.cpus());
console.log(os.userInfo());

// чтение файлов синхронно 
/*
const text1 = fs.readFileSync('./README.md', {
    encoding: 'utl8'
})

console.log(text1);*/


// чтение файла асинхронно

/*const text2 = fs.readFileSync('./README.md', 
    {encoding:'utf8'},
    (err, data) => {
        if(err){console.log('Error.', err);} 
        else{ console.log('Data', data);}
    }
);
console.log('Async file reading');
console.log(text2);*/

// на промисах 

//const myReadFile = util.promisify(fs.readFileSync);

//myReadFile('./README.md', {encoding:'utf8'})
//.then(data => console.log('Data', data))
//.catch(err => console.log('Error', err));


// переменные окружения
// console.log('process', process.env); 

//console.log('__filename', __filename);
//console.log('__dirname', __dirname);


//const contentDir = fs.readdirSync('.');
//console.log(contentDir)

/*
const contentDir2 = fs.readdirSync('.'/imgs);
const contentDir3 = fs.readdirSync('./db/models');
const fileModels = fs.readdirSync('./src/db/models');

*/

//вывести содержимое js файлов по текущей папки

const contentDir = fs.readdirSync('.');

const result = contentDir.filter(f => f.endsWith('.js'));
console.log(result);


// contentDir
// .filter((f) => f.endsWith(".js"))
// .forEach(f => readFile(f, {encoding:'utf-8'})
//                 .then(data => test.push(data))
//                 .catch(err => console.log(err))
//             );


const http = require('http');
const PORT = process.env.PORT || 5000;
const HOST = '127.0.0.1'; // 'localhost'
const server = http.createServer( (req, res) => {
    const {url, method} = req;
    console.log('url', url);
    console.log('method', method);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <!-- <link rel="stylesheet" href="./style.scss">  -->
        <link rel="stylesheet" href="./style.css">
        <title>Document</title>
    </head>
    <body>
        <table>
            <caption>Choose your plan</caption>
            <thead>
                <tr>
                    <th>Plan</th>
                    <th>starter</th>
                    <th>econom</th>
                    <th>standart</th>
                    <th>prof</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Amount of space</td>
                    <td>20 gb</td>
                    <td>40 gb</td>
                    <td>110 gb</td>
                    <td>unlimited</td>
                </tr>
                <tr>
                 <td>Bandwidth per month</td>
                 <td>120 gb</td>
                 <td>240 gb</td>
                 <td>610 gb</td>
                 <td>1300 gb</td>
             </tr>
             <tr>
                 <td>Email accounts</td>
                 <td>1</td>
                 <td>15</td>
                 <td>60</td>
                 <td>unlimited</td>
             </tr>
             <tr>
                 <td>24h-support</td>
                 <td>no</td>
                 <td>yes</td>
                 <td>yes</td>
                 <td>yes</td>
             </tr>
             <tr>
                 <td>Support tickets per month</td>
                 <td>2</td>
                 <td>6</td>
                 <td>14</td>
                 <td>20</td>
             </tr>
            </tbody>
            <tfoot>
             <tr>
                 <th>Price</th>
                 <th>10$</th>
                 <th>30$</th>
                 <th>59$</th>
                 <th>99$</th>            
             </tr>
            </tfoot>
        </table>
     
     </body>
     </html> `);
});
server.listen(PORT, HOST, () => {
    console.log(`Server is listening ${HOST} on ${PORT} port!`);
});



