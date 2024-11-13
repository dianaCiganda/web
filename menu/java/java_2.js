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
// Configura Firebase
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database().ref('comentarios');

function agregarComentario() {
    const nombre = document.getElementById('nombre').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if (!nombre || !mensaje) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    // Guardar comentario en Firebase
    db.push({ nombre, mensaje });

    document.getElementById('nombre').value = '';
    document.getElementById('mensaje').value = '';
}

function mostrarComentarios() {
    const commentsSection = document.getElementById('commentsSection');
    commentsSection.innerHTML = '';

    // Obtener comentarios en tiempo real desde Firebase
    db.on('value', (snapshot) => {
        const comentarios = snapshot.val();
        commentsSection.innerHTML = '';

        for (let key in comentarios) {
            const comentario = comentarios[key];
            const divComentario = document.createElement('div');
            divComentario.classList.add('comment');
            divComentario.innerHTML = `
                <div class="name">${comentario.nombre}</div>
                <div class="message">${comentario.mensaje}</div>
            `;
            commentsSection.appendChild(divComentario);
        }
    });
}

window.onload = function() {
    mostrarComentarios();

    const btn_enviar = document.getElementById("enviar");
    if (btn_enviar) {
        btn_enviar.onclick = agregarComentario;
    }
};
