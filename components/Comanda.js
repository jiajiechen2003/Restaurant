class Comanda extends HTMLElement {
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
      this.total = 0;
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
  
    agregarElemento(detail) {
        const elementoExistente = this.shadow.querySelector(`plato-element[nombre="${detail.nombre}"]`);
      
        if (!elementoExistente) {
          const elementoComanda = document.createElement('plato-element');
          elementoComanda.setAttribute('nombre', detail.nombre);
          elementoComanda.setAttribute('img', detail.img);
          elementoComanda.setAttribute('precio', detail.precio);
          this.shadow.querySelector('.comanda-container').appendChild(elementoComanda);
          this.calcularTotal();
        } else {
          alert('¡Este plato ya está en la comanda!');
        }
      }
      
  
    calcularTotal() {
      this.total = 0;
      this.shadow.querySelectorAll('plato-element').forEach(elemento => {
        const precio = Number(elemento.getAttribute('precio'));
        const cantidad = Number(elemento.shadowRoot.querySelector('.cantidad').textContent.replace('Cantidad: ', ''));
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