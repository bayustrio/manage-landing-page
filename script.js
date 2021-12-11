const menu = document.querySelector('#menu');
const navbar = document.querySelector('.navbar ul');

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('slide');
});

navbar.onclick = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('slide');
}

AOS.init();


$('.person').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });
