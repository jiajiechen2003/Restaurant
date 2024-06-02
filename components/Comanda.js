class Comanda extends HTMLElement {
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
    }
  
    connectedCallback() {
      this.render();
      document.addEventListener('agregar-comanda', (event) => {
        this.agregarElemento(event.detail);
      });
  
      this.shadow.addEventListener('actualizar-total', () => {
        this.calcularTotal();
      });
    }
  
    agregarElemento(datos) {
        const platoExiste = this.shadow.querySelector(`plato-element[nombre="${datos.nombre}"]`);
      
        if (!platoExiste) {
          const platosComanda = document.createElement('plato-element');
          platosComanda.setAttribute('nombre', datos.nombre);
          platosComanda.setAttribute('img', datos.img);
          platosComanda.setAttribute('precio', datos.precio);
          this.shadow.querySelector('.comanda-container').appendChild(platosComanda);
          this.calcularTotal();
        } else {
          alert('Este plato ya está en la comanda');
        }
      }
      
  
    calcularTotal() {
      this.total = 0;
      this.shadow.querySelectorAll('plato-element').forEach(plato => {
        const precio = Number(plato.getAttribute('precio'));
        const cantidad = Number(plato.shadowRoot.querySelector('.cantidad').textContent.replace('Cantidad: ', ''));
        this.total += precio * cantidad;
      });
      this.shadow.querySelector('.total').textContent = `Total: ${this.total.toFixed(2)}€`;
    }
  
    render() {
      this.shadow.innerHTML = `
        <style>
          .comanda-container {
            margin-top: 20px;
          }
          .total {
            margin-top: 20px;
            font-weight: bold;
          }
        </style>
        <div class="comanda-container"></div>
        <div class="total">Total: 0.00€</div>
      `;
    }
  }
  
  customElements.define("comanda-element", Comanda);