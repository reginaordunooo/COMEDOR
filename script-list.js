const apiUrl = 'https://67db60411fd9e43fe474601c.mockapi.io/apilista/tabla';

function loadUsers() {
fetch (apiUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const tableBody = document.querySelector('#data-table tbody');
        data.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `<td> ${item.id} </td> <td> ${item.tipo} </td> <td> ${item.descripcion} </td> <td> ${item.inventario} </td>`;
            tableBody.appendChild(row);
        })
    })
    .catch(error => console.error('Error al cargar los datos', error));
}

window.onload = function(){
    loadUsers();
};