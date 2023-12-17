// get navbar
const nav = document.getElementById('navbar');

// set state
if (sessionStorage.getItem("navClosed") == "true")
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
    sessionStorage.setItem("navClosed", nav.classList.contains('closed'));
}

//todo 
// remember the state of the navbar between pages with localstorage