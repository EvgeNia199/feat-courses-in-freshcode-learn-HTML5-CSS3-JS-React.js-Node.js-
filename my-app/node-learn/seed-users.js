const bcrypt = require("bcryptjs");

function generatorUser() {
  const users = Array(10);
  for (let i = 0; i < users.length; i++) {
    users[i] = {
      firstName: ` firstName${i + 1}`,
      lastName: `lastName${i + 1}`,
      email: `email&${i + 1}@mail.com`,
      login: ` login${i + 1}`,
      passwordHash: bcrypt.hashSync(`bacon${i + 1}`, 8),
      created: new Date(),
      updated: new Date(),
    };
  }
  return users;
}

console.log(generatorUser());
