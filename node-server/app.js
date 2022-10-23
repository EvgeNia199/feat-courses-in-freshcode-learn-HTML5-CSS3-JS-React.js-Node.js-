// const express = require('express');

// const app = express();

// app.get('/', (req, res) => {
//     console.log('request:', req);
//     res.status(200).end();
// });

// app.post('/users', (req, res) => {
//     const {body} = req;
//     //const newUser = db.Users.createUser(body); // db[] 
//     //res.status(201).send(newUser);
//     res.status(201).send(body);
// });

// app.get('users/id', (req, res) => {
//     // обращение к базе и взять юзера по номеру id
//     res.status(200).send();
// })

/*
GET http://127.0.0.1:5000/users HTTP/1.1
GET http://127.0.0.1:5000/users/10 HTTP/1.1
*/

/*
app.get('/users/id', (req, res) => {})
app.get('/users/', (req, res) => {})
app.post('/users/', (req, res) => {})
app.patch('/users/id', (req, res) => {})
app.delete('/users/id', (req, res) => {})
*/


// const express = require('express');
// const {userController} = require('./controllers');
// const {validate} = require('./middleware');

// const app = express();
// app.use(express.json());

// // users
// app.get("/users", userController.getAllUsers);
// app.get("/users/:id", userController.getUser);

// app.post("/users", validate.validateUserCreate, userController.createNewUser);

// app.patch("/users/:id", userController.updateUser);

// app.delete("/users/:id", userController.deleteUser);

// module.exports = app;
// методы с работой сервером 

/*app.get()
app.post()
app.patch()
app.delete()*/


// const express = require('express');
// const path = require('path');
// const app = express();

// app.use('/', express.static('public'));
// app.use('/user', (req, res) => {
//     res.status(200).sendFile(path.resolve(__dirname, ))
// })

// module.exports = app;


const express = require('express');
const {validate, errorHandlers} = require('./middleware');
const router = require('./router');

const app = express();

// json data
app.use(express.json());

//errors
app.use(errorHandlers.validationEH, errorHandlers.internalServerEH);

app.use('/api', router);

module.exports = app;