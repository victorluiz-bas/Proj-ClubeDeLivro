const bcrypt = require("bcrypt");

const users = [{
    username: "admin",
    passwordHash: bcrypt.hashSync("1234", 10), // senha criptografada
}, ];

function findUser(username) {
    return users.find((user) => user.username === username);
}

module.exports = { findUser };