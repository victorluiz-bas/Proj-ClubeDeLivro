const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./users.db");

// Cria a tabela se não existir
db.serialize(() => {
    db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE,
      passwordHash TEXT
    )
  `);

    // Insere um usuário de teste
    const bcrypt = require("bcrypt");
    const passwordHash = bcrypt.hashSync("1234", 10);

    db.run(
        `INSERT OR IGNORE INTO users (username, passwordHash) VALUES (?, ?)`, ["admin", passwordHash]
    );
});

module.exports = db;