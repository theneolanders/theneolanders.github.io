/* custom navbar element */
class MyNavbar extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <!--header-->
        <link rel="stylesheet" href="./styles/navigation.css">
        <nav id="navbar">
        <ul>  
          <li class="ringholder"><a href="#" class="ringSpin" onclick="toggleNavbar(); event.preventDefault();" aria-label="Home"></a></li>
          <li class="item"><a href="https://www.theneolanders.com/">Home</a></li>
          <li class="item"><a href="./members/index.html">Members</a></li>
          <li class="item"><a href="./portfolio/index.html">Group Portfolio</a></li>
          <li class="item"><a href="./info/index.html">Info</a></li>
        </ul>
      </nav>
        `;
    };
};
/* link to element for parser */
customElements.define('my-navbar', MyNavbar);