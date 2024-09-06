

class comiclist extends HTMLElement {
    static get observedAttributes() {
        return ['image', 'title', 'subtitle'];
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(propName, oldValue, newValue) {
        if (oldValue !== newValue) {
            this[propName] = newValue;
            this.render();
        }
    }

    render() {
        this.shadowRoot.innerHTML = `
        <section class="comic-card">
            <img class="comic-image" src="${this.image}" alt="${this.title}">
            <div class="comic-info">
                <h2 class="comic-title">${this.title}</h2>
                <h3 class="comic-subtitle">${this.subtitle}</h3>
            </div>
        </section>

        <style>
            .comic-card {
                
                overflow: hidden;
                display: flex;
                flex-direction: column;
                flex-wrap: wrap;
                width: 167px;
                margin: 10px;
                
            }

            .comic-image {
                display:flex
                width: 167px;
                height: 250px;
                justify-content: center;
                align-items: center;
                box-shadow: 0 4px 8px rgba(0,0,0,0.2);
            }

            .comic-info {
                text-align: left;
                width: 167px;
            }

            .comic-title {
                font-size: small;
            }

            .comic-subtitle {
                color: #555;
                font-size: smaller;
            }
        </style>`;
    }
}

customElements.define('comic-card', comiclist);

export default comiclist;
