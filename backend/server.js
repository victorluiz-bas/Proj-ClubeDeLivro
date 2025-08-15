const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const { findUser } = require("./users");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post("/login", async(req, res) => {
    const { username, password } = req.body;
    const user = findUser(username);

    if (!user) {
        return res.status(401).json({ message: "Usuário não encontrado" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.passwordHash);

    if (isPasswordValid) {
        return res.status(200).json({ message: "Login bem-sucedido" });
    } else {
        return res.status(401).json({ message: "Senha incorreta" });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});