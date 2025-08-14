document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    // Simulação de validação
    document.getElementById("loginForm").addEventListener("submit", async function(e) {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const message = document.getElementById("message");

        try {
            const response = await fetch("http://localhost:3000/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (response.ok) {
                message.style.color = "green";
                message.textContent = data.message;
            } else {
                message.style.color = "red";
                message.textContent = data.message;
            }
        } catch (error) {
            message.style.color = "red";
            message.textContent = "Erro ao conectar com o servidor.";
        }
    });

});