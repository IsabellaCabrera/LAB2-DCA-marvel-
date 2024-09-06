class Card extends HTMLElement {

    static get observedAttributes() {
        return ['img', 'genre', 'title', 'day'];
    }

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(propName, oldValue, newValue) {
        if(oldValue !== newValue) {
            this[propName] = newValue;
        }
    }

    render() {
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/card/card.css">
        <section class="total-card">
            <div class="product-card">
                <div class="product-text">
                    <h2>${this.genre}</h2>
                    <h1>${this.title}</h1>
                    <p>${this.day}</p>
                </div>
            </div>
            <div class="product-img">
                <img src="${this.img}" alt="${this.title}">
            </div>
        </section>

        <style>
            .total-card {
                display: flex;
                flex-direction: row-reverse;
                align-items: center;
                justify-content: left;
                border-bottom: 2px solid #ccc;
                padding-left: 2rem;
                background-color: white;
                height: 250px;
                width: 900px;
            }
            .product-text {
                display: flex;
                flex-direction: column;
                gap: 7px;
                flex: 1;
                padding: 15px;
            }
            .product-text p, h2 {
                color: #555;
                font-size: smaller;
                font-weight: bold;
            }
            .product-text h1 {
                color: black;
                font-size: large;
                font-weight: bold;
            }
            .product-img {
                display: flex;
            }
            .product-img img {
                width: 350px;
                height: 200px;
                padding-top: 10px;
                padding-bottom: 10px;
            }
        </style>
        `;
    }
}

customElements.define('product-card', Card);
export default Card;
