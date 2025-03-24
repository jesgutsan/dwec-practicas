// Seleccionem la imatge y la zona on soltarla
const image = document.getElementById('img1');
const dropzone = document.getElementById('dropzone');

// Event listener per iniciar l'arrossega
image.addEventListener('dragstart', function (event) {
    // Guardar l'identificador de l'element arrossegat
    event.dataTransfer.setData('text', event.target.id);
});

// Event listener per permetre el soltar
dropzone.addEventListener('dragover', function (event) {
    event.preventDefault(); // Prevenir el comportament per defecte que impedeix el soltar
});

// Event listener per gestionar el soltar
dropzone.addEventListener('drop', function (event) {
    event.preventDefault(); // Prevenir el comportament per defecte que impedeix el soltar

    // Obtindre l'identificador de l'element arrossegat
    const imageId = event.dataTransfer.getData('text');
    // Busca l'element amb ixe ID en el document
    const draggedImage = document.getElementById(imageId);
    

    // Afegir l'element arrossegat a la dropzone
    dropzone.appendChild(draggedImage);
});