// get navbar
const nav = document.getElementById('navbar');

// close on start
nav.classList.add('closed');

// toggle navbar
function toggleNavbar()
{
    nav.classList.toggle('closed');
}

//todo 
// remember the state of the navbar between pages with localstorage