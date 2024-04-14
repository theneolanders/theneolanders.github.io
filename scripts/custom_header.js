/* custom navbar element */
class MyNavbar extends HTMLElement{
    connectedCallback(){
        this.innerHTML = 
        `
        <!--header-->
        <nav id="navbar" class="navList">
        <ul>  
          <li class="ringholder"><a href="#" class="ringSpin" onclick="toggleNavbar(); event.preventDefault();" aria-label="Home"></a></li>
          <li class="item"><a href="https://www.theneolanders.com/">Home</a></li>
          <li class="item"><a href="https://www.theneolanders.com/portfolio/">Group Portfolio</a></li>
          <li class="item"><a href="https://www.theneolanders.com/info/">Info</a></li>
          <li class="item"><a href="https://www.theneolanders.com/neolanders-wiki">Knowledge Vault</a></li>
        </ul>
      </nav> 
        `;
    };
};
/* link to element for parser */
customElements.define('my-navbar', MyNavbar);