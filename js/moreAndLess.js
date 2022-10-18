let more = document.querySelector('.more');
let less = document.querySelector('.less');
let moreServices = document.querySelector('.moreServices');

more.addEventListener('click',()=>{
    less.classList.toggle('active');
    more.classList.toggle('nactive');
    moreServices.classList.toggle('active');
})
less.addEventListener('click',()=>{
    more.classList.toggle('nactive');
    less.classList.toggle('active');
    moreServices.classList.toggle('active');
})