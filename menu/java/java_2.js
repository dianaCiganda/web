// Selección del ícono y el menú
const menuIcon = document.getElementById('menuIcon');
const menu = document.getElementById('menu');

// Alternar visibilidad del menú
menuIcon.addEventListener('click', () => {
  menu.classList.toggle('active');
});
// const background = document.querySelector(".radio");

// const getRandomNumber = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// };

// const getRandomColor = () => {
//   const h = getRandomNumber(0, 360);   // Tono completo
//   const s = getRandomNumber(50, 80);   // Saturación: 50% a 80%
//   const l = getRandomNumber(40, 70);   // Luminosidad: 40% a 70%

//   return `hsl(${h}deg, ${s}%, ${l}%)`;
// };

// const setTextColor = (l) => {
//   // Si la luminosidad es menor a 50, el texto será claro; si no, será oscuro.
//   return l < 50 ? "#ffffff" : "#000000";
// };

// const setBackgroundColor = () => {
//   const h = getRandomNumber(0, 360);
//   const s = getRandomNumber(50, 80);
//   const l = getRandomNumber(40, 70);

//   const randomColor = `hsl(${h}deg, ${s}%, ${l}%)`;
//   background.style.backgroundColor = randomColor;
  
//   // Establecer color de texto basado en la luminosidad
//   background.style.color = setTextColor(l);
// };

// setBackgroundColor();

// setInterval(() => {
//   setBackgroundColor();
// }, 750);
function agregarComentario() {
    const nombre = document.getElementById('nombre').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    // Verifica si los campos están vacíos
    if (!nombre || !mensaje) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    // Crear un objeto para el comentario
    const comentario = {
        nombre: nombre,
        mensaje: mensaje
    };

    // Obtener los comentarios almacenados en LocalStorage
    let comentarios = JSON.parse(localStorage.getItem('comentarios')) || [];

    // Agregar el nuevo comentario al arreglo de comentarios
    comentarios.push(comentario);

    // Guardar los comentarios nuevamente en LocalStorage
    localStorage.setItem('comentarios', JSON.stringify(comentarios));

    // Limpiar los campos del formulario
    document.getElementById('nombre').value = '';
    document.getElementById('mensaje').value = '';

    // Mostrar los comentarios nuevamente
    mostrarComentarios();
}

// Función para mostrar los comentarios
function mostrarComentarios() {
    const commentsSection = document.getElementById('commentsSection');

    // Obtener los comentarios de LocalStorage
    const comentarios = JSON.parse(localStorage.getItem('comentarios')) || [];

    // Limpiar la sección de comentarios
    commentsSection.innerHTML = '';

    // Mostrar cada comentario
    comentarios.forEach(comentario => {
        const divComentario = document.createElement('div');
        divComentario.classList.add('comment');
        
        divComentario.innerHTML = `
            <div class="name">${comentario.nombre}</div>
            <div class="message">${comentario.mensaje}</div>
        `;

        commentsSection.appendChild(divComentario);
    });
}

// Llamar a la función para mostrar los comentarios cuando se carga la página
window.onload = mostrarComentarios;