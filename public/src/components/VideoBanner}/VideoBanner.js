class VideoBanner extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }      

    connectedCallback(){
        this.render();
    }
    
    render(){
        this.shadowRoot.innerHTML =`

        <style>
            
            section {
                display: flex;
                flex-direction: column;
                padding-top: 4rem;
                padding-bottom: 7rem;
               
            }
            #content {
                text-align: left;
                width: 700px;
                display: flex;
                flex-direction: column;
                gap: .5rem;
                padding-left: 4rem;
            }

            .frames{
             display: flex;
             flex-direction: row;
             
            }
            
            .main-frame{
                display: flex;
                flex-direction: row-reverse;
                align-items: center;
                justify-content: left;
                padding-left: 4rem;
           
            
            }

            .trailers-frames{
             display: flex;
             flex-direction: column;
             gap:10px;
             padding-left: 4rem;

            }
            </style>
            
                <section>
                 <div class=frames>
                        
                 <div class=main-frame>
                        <iframe src="https://assets.espn.go.com/players/web-player-bundle/next/embed/share.html#id=6351255690112&brand=marvelF"width="750" height="470"; allowFullScreen frameBorder="0"></iframe>
                    </div>
                    <div class= "trailers-frames">
                        <iframe src="https://assets.espn.go.com/players/web-player-bundle/next/embed/share.html#id=6351255690112&brand=marvel"width="300"  allowFullScreen frameBorder="0"></iframe>
                        <iframe src="https://assets.espn.go.com/players/web-player-bundle/next/embed/share.html#id=6351255690112&brand=marvel"width="300" allowFullScreen frameBorder="0"></iframe>
                        <iframe src="https://assets.espn.go.com/players/web-player-bundle/next/embed/share.html#id=6351255690112&brand=marvel"width="300"  allowFullScreen frameBorder="0"></iframe>
                    </div>
                    </div>
                    <div id="content">
                        <span>Trailers & Extras</span>
                        <h1>Marvel Rivals | Map Reveal | YGGSGARD - WORLD TREE & KINGDOM OF GODS</h1>
                        <p>After the Timestream Entanglement, Asgard fused with Yggdrasill, the World Tree that connects all Ten Realms. Now Loki, the God of Mischief, uses his tricks to seize control and build his new kingdom: Yggsgard in Marvel Rivals!</p>
                    </div>
                </section>
        
        `;
    }

}

customElements.define('video-banner', VideoBanner); 
export default VideoBanner;