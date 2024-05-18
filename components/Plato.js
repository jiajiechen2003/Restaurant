class Plato extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  get id() {
    return this.getAttribute("id");
  }

  get nombre() {
    return this.getAttribute("nombre");
  }

  get precio() {
    return Number(this.getAttribute("precio"));
  }

  get alergenos() {
    return this.getAttribute("alergenos").split("-");
  }

  get img() {
    return this.getAttribute("img");
  }

  set id(value) {
    this.setAttribute("id", value);
  }

  set nombre(value) {
    this.setAttribute("nombre", value);
  }

  set precio(value) {
    this.setAttribute("precio", value);
  }

  set alergenos(value) {
    this.setAttribute("alergenos", value.join("-"));
  }

  set img(value) {
    this.setAttribute("img", value);
  }

  render() {
    this.shadow.innerHTML = `
      <style>
        img {
          width: 290px;
          height: 200px;
        }
        button {
          display: block;
          margin-top: 10px;
          padding: 5px 10px;
          cursor: pointer;
        }
      </style>
      <div class="plato-container">
        <p>Nombre: ${this.nombre}</p>
        <p>Precio: ${this.precio}€</p>
        <p>Alérgenos: ${this.alergenos.join(', ')}</p>
        <img src="${this.img}" alt="${this.nombre}">
        <button>Añadir a la Comanda</button>
      </div>
    `;

    this.shadow.querySelector('button').addEventListener('click', () => {
      this.dispatchEvent(new CustomEvent('add-to-cart', {
        detail: {
          nombre: this.nombre,
          img: this.img,
          precio: this.precio
        },
        bubbles: true,
        composed: true
      }));
    });
  }

  static get observedAttributes() {
    return ["nombre", "precio", "alergenos", "img"];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.name = newValue;
    this.render();
  }
}

customElements.define("plato-element", Plato);
