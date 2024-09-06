class Comicslider extends HTMLElement {
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
                border: 2px solid #ddd;
                border-radius: 8px;
                overflow: hidden;
                display: flex;
                flex-direction: column;
                width: 200px;
                margin: 10px;
                box-shadow: 0 4px 8px rgba(0,0,0,0.2);
            }

            .comic-image {
                width: 100%;
                height: auto;
            }

            .comic-info {
                padding: 10px;
                background-color: #f9f9f9;
                text-align: center;
            }

            .comic-title {
                font-size: 16px;
                margin: 0;
            }

            .comic-subtitle {
                font-size: 14px;
                color: #555;
                margin: 5px 0 0;
            }
        </style>`;
    }
}

customElements.define('comic-card', Comicslider);

export default Comicslider;
