class Plato extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.cantidad = 1;
  }

  get nombre() {
    return this.getAttribute("nombre");
  }

  get precio() {
    return Number(this.getAttribute("precio"));
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

  set img(value) {
    this.setAttribute("img", value);
  }

  render() {
    this.shadow.innerHTML = `
        <style>
          .plato-element {
            display: flex;
            align-items: center;
            margin-bottom: 10px;
          }
          img {
            width: 50px;
            height: 50px;
            margin-right: 10px;
          }
          .cantidad {
            margin: 0 10px;
          }
          .disminuir {
            margin-left: 10px;
          }
        </style>
        <div class="plato-element">
          <img src="${this.img}" alt="${this.nombre}">
          <h5>${this.nombre}</h5>
          <h5 class="cantidad">Cantidad: ${this.cantidad}</h5>
          <h5>Precio: ${(this.precio * this.cantidad).toFixed(2)}€</h5>
          <button class="disminuir">-</button>
          <button class="aumentar">+</button>
        </div>
      `;

    this.shadow.querySelector(".aumentar").addEventListener("click", () => {
      this.cantidad++;
      this.actualizarCantidad();
    });

    this.shadow.querySelector(".disminuir").addEventListener("click", () => {
      if (this.cantidad > 1) {
        this.cantidad--;
        this.actualizarCantidad();
      } else if (this.cantidad === 1) {
        this.eliminarElemento();
      }
    });
  }

  eliminarElemento() {
    this.remove();
    this.dispatchEvent(
      new CustomEvent("actualizar-total", {
        bubbles: true,
        composed: true,
      })
    );
  }

  actualizarCantidad() {
    this.shadow.querySelector(
      ".cantidad"
    ).textContent = `Cantidad: ${this.cantidad}`;
    this.shadow.querySelector("h5:nth-child(4)").textContent = `Precio: ${(
      this.precio * this.cantidad
    ).toFixed(2)}€`;
    this.dispatchEvent(
      new CustomEvent("actualizar-total", {
        bubbles: true,
        composed: true,
      })
    );
  }

  static get observedAttributes() {
    return ["nombre", "precio", "img"];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }
}

customElements.define("plato-element", Plato);
