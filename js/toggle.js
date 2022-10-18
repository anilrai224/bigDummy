const openMenu = document.querySelector('.menu-bar');
const navigation = document.querySelector('.navigation');
const closer_bar = document.querySelector('.close-bar');
const logo = document.querySelector('.logo');

openMenu.addEventListener('click',()=>{
    navigation.classList.toggle('active');
    closer_bar.classList.toggle('show');
    logo.classList.toggle('active');
})
 
closer_bar.addEventListener('click',()=>{
    navigation.classList.toggle('active');
    closer_bar.classList.toggle('show');
    logo.classList.toggle('active');
})