class Hero extends HTMLElement {
    
    constructor(){
     super()
     this.attachShadow({mode:'open'})
    }

    connectedCallback(){
        this.render();

    }

    render(){
        this.shadowRoot.innerHTML= `
           <section id="heroMain"> 
        <div id="content">
            <h2>ON SALE SEPTEMBER 4</h2>
            <h1> THIS WEEK'S NEW COMICS</h1>
            <P>
                Meet the Exceptional X-Men, swing into 'Venom War' with Spider-Man,
                 discover the fate of the Ultimate Fantastic Four, 
                 and more in this week's comics!

            </P>
            <button class="more">
               READ MORE 
            </button>
        </div>
        <div class="BannerFotter">
            <ul>
                <li>Celebrating 85 Years of Marvel</li>
                <li> Marvel At D23 2024</li>
                <li>The Official Marvel Podcast</li>
                <li>This Week's New Comics</li>
                <li>2024 Marvel Unlimited plus Member Kit</li>
            </ul>
        </div>
       
    </section>

    <style> 
    #heroMain{
height: 60vh;
background-image: url(https://cdn.marvel.com/content/1x/ava_0826_com_mas_dsk_01.jpg);
background-size: cover;
background-position: center;
position: relative;
display: flex;
align-items: center;
}

#content{
    color:white ;
    position: absolute;
    width: 60%;
    margin-left: 2rem ;
}

#content h1{
    font-size: 2rem;
    margin-bottom: 1rem;
}
#content h2{
    font-size: smaller;
    margin-bottom: 1rem;
}
#content p{
    font-size: medium;
    margin-bottom: 2rem;
    font-weight: 100;
}

.more{
    background-color: red;
    color: white;
    border: none;
    padding: 1rem 2rem;
    cursor: pointer;
    font-weight: bold;
}
.BannerFotter{
    display: flex;
    position: absolute;
    bottom: 0;
    margin: 0 1rem;
    width: 80vw;
    font-weight: 400;
    background-color: white;


}
.BannerFotter ul{
    display: flex;
    flex-direction: row;
    list-style: none;
    gap: 1.5rem;
    background-color: white;
    font-weight: bolder;
    font-size: small;
    cursor: pointer;
}
    </style>
        `
    }
}

customElements.define('hero-component',Hero)
export default Hero;