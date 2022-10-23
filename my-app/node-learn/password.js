const bcrypt = require('bcrypt');
const password = 'admin';
const passwordHash = bcrypt.hashSync(password, 10);
console.log('password hash = ', passwordHash);