const API_URL = "https://jsonplaceholder.typicode.com/users";
async function fetchUsers() {
    const response = await fetch(API_URL);
    if (!response.ok)
        throw new Error("Failed to fetch users");
    return await response.json();
}
function populateTable(users) {
    const tableBody = document.querySelector("#user-table tbody");
    if (!tableBody)
        return;
    tableBody.innerHTML = ""; // Clear existing data
    users.forEach(user => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${user.id}</td><td>${user.name}</td>`;
        tableBody.appendChild(row);
    });
}
document.getElementById("load-users")?.addEventListener("click", async () => {
    try {
        const users = await fetchUsers();
        populateTable(users);
    }
    catch (error) {
        console.error("Error loading users:", error);
    }
});
