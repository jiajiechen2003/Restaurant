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
                    height: 220px;
                }
            </style>
            <p>Nombre: ${this.nombre}</p>
            <p>Precio: ${this.precio}€</p>
            <p>Alérgeno: ${this.alergenos}</p>
            <img src="${this.img}"></img>
        `;
  }

  static get observedAttributes() {
    return ["nombre", "precio", "alergenos"];
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
