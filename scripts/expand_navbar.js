// get navbar
const nav = document.getElementById('navbar');

// set state
if (localStorage.getItem("navClosed") == "true")
{
    nav.classList.add('closed');
}
else
{
    nav.classList.remove('closed');

}

// toggle navbar
function toggleNavbar()
{
    nav.classList.toggle('closed');
    localStorage.setItem("navClosed", nav.classList.contains('closed'));
}

//todo 
// remember the state of the navbar between pages with localstorage