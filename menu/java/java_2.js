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
// Configuración de Firebase
// Configuración de Firebase
(function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://https-dianaciganda-github-io-git-hub-io.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();