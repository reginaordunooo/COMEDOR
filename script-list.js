const apiUrl = 'https://67db60411fd9e43fe474601c.mockapi.io/apilista/tabla';

function loadUsers() {
fetch (apiUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const tableBody = document.querySelector('#data-table tbody');
        data.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `<td> ${item.id} </td> 
                            <td> ${item.tipo} </td> 
                            <td> ${item.descripcion} </td> 
                            <td> ${item.inventario} </td>
                            <td>
                                <a class="edit" href="#" data-id="${item.id}">
                                    <img src="editar.png" alt="editar" width="22px">
                                </a>
                            </td>
                            <td>
                                <a class="delete" href="#" data-id="${item.id}">
                                    <img src="eliminar.png" alt="eliminar" width="27px">
                                </a>
                            </td>`;
            tableBody.appendChild(row);
        })
    })
    .catch(error => console.error('Error al cargar los datos', error));
}

window.onload = function(){
    loadUsers();
};