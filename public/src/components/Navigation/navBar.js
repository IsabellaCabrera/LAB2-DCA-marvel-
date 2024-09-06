class navBar extends HTMLElement {


   constructor() {
      super();
      this.attachShadow({mode: 'open'});
   }

   connectedCallback() {
      this.render();
   }



   render(){
  this.shadowRoot.innerHTML = `
  <nav >
    <div id="one"> 
    <div id="LOG-IN"> LOG IN | JOIN</div>
    <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjmHn7hDycWvYvGnj50dxygz2EUz8MBKKCqg&s" width="100px" alt=""></div>
    <div id="MARVEL"> MARVEL UNLIMITED</div>
      </div>
    <div id="two"><ul>
        <li>NEWS</li>
        <li>COMICS</li>
        <li>CHARACTERS</li>
        <li>MOVIES</li>
        <li>TV SHOWS</li>
        <li>GAMES</li>
        <li>VIDEOS</li>
        <li>MORE</li>
    </ul> </div>
    <div id="three">
        <P>
            STREAM X-MEN '97 EXCLUSIVE ON DISNEY ON
        </P>
        <img src="https://i.pinimg.com/originals/06/44/a7/0644a7cbec865f025e5736b5d808689c.jpg"  alt="" width="90px">
    </div>
</nav>

<style>

nav{
    border: 1px solid black;
    background-color: #151515;
    
}

#one{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: small;
    font-weight: 600;
    padding: 0 7rem;
    border-bottom:0.3px solid grey ;
    color: white;
}

#LOG-IN{
    border-left: 0.3px solid grey;
    border-right:0.3px solid grey ;
    padding: 1rem;

}
#MARVEL{
    border-left: 0.3px solid grey;
    border-right:0.3px solid grey ;
    padding: 1rem;

}
#two{
    display: flex;
    justify-content: center;
    font-size: .8rem;

}

#two ul{
    display: flex;
    font-weight: 600;
    gap: 2rem;
    padding: .5rem 0;
    list-style: none;
    color: white;
    
}

#three{
    background-color: black;
    display: flex;
    justify-content: center;
    font-size: .7rem;
    border : 0 0 0 0.3px solid grey;

    color: white;
}

#three p{
    display: flex;
    padding-top: .5rem;
}

</style>

  `;
   }

}

//estoy definiendo el componente.
customElements.define('nav-bar',navBar);

//exportando el componente
export default navBar;
// la etiqueta style me permite hacer el css de manera ex
