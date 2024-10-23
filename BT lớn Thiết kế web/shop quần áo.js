let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let đăng_nhập_1 = document.querySelector('#đăng_nhập');
let đăng_nhập_2 = document.querySelector('.đăng_nhập');
let đăng_ký_1 = document.querySelector('#đăng_ký');
let đăng_ký_2 = document.querySelector('.đăng_ký');
let formClose1 = document.querySelector('#form-close-1');
let formClose2 = document.querySelector('#form-close-2');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');


window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    đăng_nhập_2.classList.remove('none');
    đăng_ký_2.classList.remove('none');
}

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

đăng_nhập_1.addEventListener('click', () =>{
  đăng_nhập_2.classList.add('active');
});

đăng_ký_1.addEventListener('click', () =>{
  đăng_ký_2.classList.add('active');
});

formClose1.addEventListener('click', () =>{
  đăng_nhập_2.classList.remove('active'); 
});

formClose2.addEventListener('click', () =>{
  đăng_ký_2.classList.remove('active');
});


var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        450: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
      },
});



