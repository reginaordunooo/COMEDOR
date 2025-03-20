const apiUrl = 'https://67db60411fd9e43fe474601c.mockapi.io/apilista/tabla';

console.log('Script cargado');

document.addEventListener('DOMContentLoaded', () => {
    const botonDonar = document.querySelector('.boton-donar');

    if (!botonDonar) {
        console.error('El botón con la clase .boton-donar no se encontró en el DOM.');
        return;
    }

    botonDonar.addEventListener('click', function(e) {
        e.preventDefault();

        // Obtenemos los datos de los inputs
        const id = document.getElementById('id').value;
        const tipo = document.getElementById('tipo').value;
        const descripcion = document.getElementById('descr').value;
        const cantidad = document.getElementById('cant').value;

        // Creamos el objeto con la información recolectada
        const newElement = {
            id: id,
            tipo: tipo,
            descripcion: descripcion,
            cantidad: cantidad
        };

        // Envío de la información mediante fetch a la API personal
        fetch('https://67db60411fd9e43fe474601c.mockapi.io/apilista/tabla', {
            method: 'POST',
            body: JSON.stringify(newElement),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la operación');
            }
            return response.json();
        })
        .then(data => {
            // Si la operación fue exitosa, se muestra una alerta sin redirigir
            alert('Operación ejecutada exitosamente');
            // Se elimina la redirección a index.html
        })
        .catch(error => {
            // En caso de error se muestra alerta y se permanece en la misma página
            alert('Error: ' + error.message);
        });
    });
});
