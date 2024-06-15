document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("userForm");
    const userTable = document.getElementById("userTable").getElementsByTagName("tbody")[0];

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        addUserToTable(nombre, apellido);
        form.reset();
    });

    const addUserToTable = (nombre, apellido) => {
        const row = userTable.insertRow();
        const nombreCell = row.insertCell(0);
        const apellidoCell = row.insertCell(1);
        nombreCell.textContent = nombre;
        apellidoCell.textContent = apellido;
    };

    const fetchUsersFromAPI = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            data.slice(0, 5).forEach(user => {
                addUserToTable(user.name, user.username);
            });
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    fetchUsersFromAPI();
});




