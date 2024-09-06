class bannerp extends HTMLElement {
    // Le doy unos atributos que son los que él tiene que mirar, para que los dos banner tengan diferente info
     static get observedAttributes(){
         return ['logo','kicker','title','description','more','img'];
     }
 
     constructor(){
         super();
         this.attachShadow({mode:"open"});
        
     }
 
     connectedCallback(){
         this.render();
     }
 
     attributeChangedCallback(propName, oldValue, newValue) {
         if(oldValue !== newValue){
             this[propName] = newValue;
             this.render();
         }
     }
 
     render() {
         // Verifica que las propiedades no sean undefined antes de renderizar
         this.shadowRoot.innerHTML = `
         <section class="banner-box">
             <div class="information">
                 <img src="${this.logo || " "  }">
                 <h2>${this.kicker }</h2>
                 <h1>${this.title }</h1>
                 <p>${this.description}</p>
                 <button>${this.more}</button>
             </div>
             <div class="img-right">
                 <img src="${this.img}">
             </div>
         </section>
 
         <style>
             .banner-box {
                 display: flex;
                 margin-top: 2rem;
                 
             }
 
             .information {
                 display: flex;
                 flex-direction: column;
                 align-items: left;
                 justify-content: space-between;
                 padding: 3rem;
                 width: 50%;
                 background-color: rgb(17, 17, 17);
                 color: white;
             }
 
             .information img {
                 width: 70px;
                 height: 80px;
             }
 
             .information h2 {
                 font-size: medium;
             }
 
             .information h1 {
                 font-size: xx-large;
                 font-weight: 600;
             }
 
             .information button {
                 width: 200px;
                 height: 50px;
                 color: white;
                 border: white 1px solid;
                 background-color: rgb(17, 17, 17);
             }
 
             .img-right img {
                 width: 100vh;
                 height: 100%;
             }
         </style>`;
     }
 }
 
 customElements.define('banner-information', bannerp);
 
 export default bannerp;
 