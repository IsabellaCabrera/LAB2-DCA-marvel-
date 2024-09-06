import * as components from './components/indexPadre.js';
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
        
        <link rel="stylesheet" href="./src/indexabuelo.css">

        <nav-bar></nav-bar>
        <hero-component></hero-component>
        
        <banner-information
            logo="https://cdn.marvel.com/content/1x/mulogo_lob_log_eye_01_1.png"
            kicker="AVAILABLE NOW"
            title="NEW ON MARVEL UNLIMITED"
            description="Read these plus 30,000 + digital comics for $9.99 a month!"
            more="GET MARVEL UNLIMITED"
            img="https://cdn.marvel.com/content/1x/20240124-newtomu_base_set_dsk.jpg">
        ></banner-information>
    
        
        <section class= "abuelo-container">
        <comic-card
            image="https://cdn.marvel.com/u/prod/marvel/i/mg/9/80/664ca7c08ed71/clean.jpg"
            title="Avengers: Twilight (2024) #6"
            subtitle="2024">
        </comic-card>
          <comic-card
            image="https://cdn.marvel.com/u/prod/marvel/i/mg/f/70/664b9dad6c3ea/clean.jpg"
            title="Ultimate Spider-Man (2024) #5"
            subtitle="2024">
        </comic-card>
          <comic-card
            image="https://cdn.marvel.com/u/prod/marvel/i/mg/9/80/664b9dee18d01/clean.jpg"
            title="Midnight Sons: Blood Hunt (2024) #1"
            subtitle="2024">
        </comic-card>
          <comic-card
            image="https://cdn.marvel.com/u/prod/marvel/i/mg/c/d0/664b9def1c84b/clean.jpg"
            title="Black Panther: Blood Hunt (2024) #1"
            subtitle="2024">
        </comic-card>
          <comic-card
            image="https://cdn.marvel.com/u/prod/marvel/i/mg/9/30/664b9dcc4a503/clean.jpg"
            title="Spider-Boy (2023) #7"
            subtitle="2024">
        </comic-card>
          <comic-card
            image="https://cdn.marvel.com/u/prod/marvel/i/mg/9/40/664b9dcb42c24/clean.jpg"
            title="Spider-Punk: Arms Race (2024) #4"
            subtitle="2024">
        </comic-card>
    </section>


      <section class= "Latest-container">
       <h1 class="title-container">The Latest</h1>
       <p class="description-container"></p>

        <product-card 
        img="https://cdn.marvel.com/content/1x/venom_war_carnage_1_cut.jpg"
        genre="COMICS" 
        title="Carnage's Path to Godhood, Explained" 
        day="12 hours ago">
       > </product-card>

        <product-card 
        img="https://cdn.marvel.com/content/1x/avengers_united_46_panel_resized.jpg"
        genre="COMICS" 
        title="Scarlet Witch's Scariest Stories" 
        day="September 5, 2024">
        ></product-card>
        
        <product-card 
        img="https://cdn.marvel.com/content/1x/krakoa_house_of_x_2019_4_art_by_pepe_larraz_and_marte_gracia.jpg" 
        genre="COMICS" 
        title="All of Wolverine's Costumes (So Far)" 
        day="September 4, 2024">
        ></product-card>

        <product-card 
        img="https://cdn.marvel.com/content/1x/17252610298701111.jpg"
        genre="GAMES" 
        title="'MARVEL SNAP' Introduces New Activate Ability in The Amazing Spider-Season" 
        day="September 4, 2024">
        ></product-card>
        
        <product-card 
        img="https://cdn.marvel.com/content/1x/wolverine_the_x-men_2011_35_art_by_nick_bradshaw_walden_wong_laura_martin_guru-efx_thomas_mason_matt_milla_and_sotocolor.jpg"
        genre="COMICS" 
        title="Meet Temper, the Temperature-Controlling Mutant Heating Up the Marvel Universe" 
        day=" September 4, 2024">
        ></product-card>

        <product-card 
        img="https://cdn.marvel.com/content/1x/marvel-snap-maximum-effort-new-season-article-card.jpg"
        genre="GAMES" 
        title="The New Season of 'MARVEL SNAP' Calls for Maximum Effort" 
        day="July 10, 2024">
        ></product-card>
    
        <product-card 
        img="https://cdn.marvel.com/content/1x/sdcc_hall_h_recap_0.jpg"
        genre="LIVE EVENTS" 
        title="SDCC 2024: All the News from Marvel Studios’ Hall H Panel" 
        day="July 29, 2024">
        ></product-card>

        <product-card 
        img="https://cdn.marvel.com/content/2x/what_if._publicity_spreads_updated6_page-0002_0.jpg"
        genre="CULTURE & LIFESTYLE" 
        title="Take a Look Inside 'The Art of Marvel Studios' What If...?'" 
        day=" August 27, 2024">
        ></product-card>
          <button>LOAD MORE</button>
     </section>
  
      <video-banner></video-banner>
      
      <banner-information
            logo= " "
            kicker="On Sale 9/4"
            title="New Comics This Week"
            description="Check out the newest Marvel comics coming out this week!"
            more="Release Calendar"
            img="https://cdn.marvel.com/content/1x/new_com_20240904_set_01.jpg" width:"80">
        ></banner-information>
         

         <section class= "abuelo-container">
        <comic-card
            image="https://cdn.marvel.com/u/prod/marvel/i/mg/6/90/66d0826e46fc0/clean.jpg"
            title="Ultimates (2024) #4"
            subtitle="2024">
        </comic-card>
          <comic-card
            image="https://cdn.marvel.com/u/prod/marvel/i/mg/3/c0/66d0829718a2e/clean.jpg"
            title="Exceptional X-Men (2024) #1"
            subtitle="2024">
        </comic-card>
          <comic-card
            image="https://cdn.marvel.com/u/prod/marvel/i/mg/9/00/66d082521faea/clean.jpg"
            title="Venom War (2024) #2"
            subtitle="2024">
        </comic-card>
          <comic-card
            image="https://cdn.marvel.com/u/prod/marvel/i/mg/6/a0/66d0824f86f0a/clean.jpg"
            title="Venom War: Spider-Man (2024) #2"
            subtitle="2024">
        </comic-card>
          <comic-card
            image="https://cdn.marvel.com/u/prod/marvel/i/mg/6/e0/66d08282e2fe7/clean.jpg"
            title="Marvel Zombies: Dawn of Decay (2024) #1"
            subtitle="2024">
        </comic-card>
          <comic-card
            image="https://cdn.marvel.com/u/prod/marvel/i/mg/3/60/66d08291c07e2/clean.jpg"
            title="MOON KNIGHT ANNUAL (2024) #1"
            subtitle="2024">
        </comic-card>
    </section>
        `;
    }
}

customElements.define('app-container', AppContainer);
