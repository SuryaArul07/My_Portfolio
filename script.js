// let menuIcon = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');

// menuIcon.onclick = () => {
//   menuIcon.classList.toggle('bx-x')
//   navbar.classList.toggle('active');
// }

// let menuIcon = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');

// menuIcon.onclick = () => {
//   menuIcon.classList.toggle('bx-x');
//   navbar.classList.toggle('active');
// }

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("active");
  menuIcon.classList.toggle("bx-x");
});

// document.getElementById('contact-form').addEventListener('submit', function(event) {
//   event.preventDefault();

//   emailjs.sendForm('service_23y5ytn', 'template_f1kd44i', this)
//     .then(function() {
//       alert('Message sent successfully!');
//     }, function(error) {
//       alert('FAILED... ' + JSON.stringify(error));
//     });
// });

