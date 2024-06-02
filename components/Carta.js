class Carta extends HTMLElement {
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
      this.dispatchEvent(new CustomEvent('agregar-comanda', {
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
    this.render();
  }
}

customElements.define("carta-element", Carta);

function mostrarPlatos() {
  const platos = [
    {
      categoria: ".primeros",
      platos: [
        { img: "./img/ensaladaCesar.jfif", nombre: "Ensalada César", alergenos: "gluten-lácteos", precio: 8.5 },
        { img: "./img/sopa-tomate.jfif", nombre: "Sopa de Tomate", alergenos: "lácteos", precio: 6.5 },
        { img: "./img/bruschetta.jfif", nombre: "Bruschetta de Champiñones", alergenos: "gluten", precio: 7.0 }
      ],
    },
    {
      categoria: ".segundos",
      platos: [
        { img: "./img/lomoSalmon.jfif", nombre: "Lomo de Salmón al Horno", alergenos: "pescado", precio: 15.0 },
        { img: "./img/polloCurry.jfif", nombre: "Pollo al Curry", alergenos: "lácteos", precio: 12.0 },
        { img: "./img/fileteTernera.jfif", nombre: "Filete de Ternera a la Parrilla", alergenos: "", precio: 18.0 },
      ],
    },
    {
      categoria: ".postres",
      platos: [
        { img: "./img/tartaChocolate.jfif", nombre: "Tarta de Chocolate", alergenos: "gluten-lácteos", precio: 6.0 },
        { img: "./img/heladoVainilla.jfif", nombre: "Helado de Vainilla", alergenos: "lácteos", precio: 4.5 },
        { img: "./img/frutasFresca.jfif", nombre: "Frutas Frescas", alergenos: "", precio: 5.0 },
      ],
    },
    {
      categoria: ".bebidas",
      platos: [
        { img: "./img/vinoTinto.jfif", nombre: "Vino Tinto", alergenos: "alcohol", precio: 12.0 },
        { img: "./img/cervezaArtesanal.jfif", nombre: "Cerveza Artesanal", alergenos: "gluten-alcohol", precio: 5.0 },
        { img: "./img/refrescoLimon.jfif", nombre: "Refresco de Limón", alergenos: "", precio: 2.5 },
      ],
    },
  ];

  document.addEventListener("DOMContentLoaded", () => {
    platos.forEach((categoria) => {
      const categoriaContainer = document.querySelector(categoria.categoria);
      const platosContainer = categoriaContainer.querySelector(".platos-container");
      categoria.platos.forEach((plato) => {
        const cartaElement = document.createElement("carta-element");
        cartaElement.setAttribute("id", plato.id);
        cartaElement.setAttribute("img", plato.img);
        cartaElement.setAttribute("nombre", plato.nombre);
        cartaElement.setAttribute("alergenos", plato.alergenos);
        cartaElement.setAttribute("precio", plato.precio);
        platosContainer.appendChild(cartaElement);
      });
    });
  });
}

mostrarPlatos();
