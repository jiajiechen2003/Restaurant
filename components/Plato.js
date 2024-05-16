class Plato extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
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
            <p>Nombre: <span id="nombre">${this.nombre}</span></p>
            <p>Precio: <span id="precio">${this.precio}</span></p>
            <p>Alérgeno: <span id="alergeno">${this.alergenos}</span></p>
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
