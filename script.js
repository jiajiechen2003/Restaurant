const platos = [
  {
    categoria: ".primeros",
    platos: [
      {
        id: 1,
        img: "./img/ensaladaCesar.jfif",
        nombre: "Ensalada César",
        alergenos: "gluten, lácteos",
        precio: 8.5,
      },
      {
        id: 2,
        img: "./img/sopa-tomate.jfif",
        nombre: "Sopa de Tomate",
        alergenos: "lácteos",
        precio: 6.5,
      },
      {
        id: 3,
        img: "./img/bruschetta.jfif",
        nombre: "Bruschetta de Champiñones",
        alergenos: "gluten",
        precio: 7.0,
      },
    ],
  },
  {
    categoria: ".segundos",
    platos: [
      {
        id: 4,
        img: "./img/lomoSalmon.jfif",
        nombre: "Lomo de Salmón al Horno",
        alergenos: "pescado",
        precio: 15.0,
      },
      {
        id: 5,
        img: "./img/polloCurry.jfif",
        nombre: "Pollo al Curry",
        alergenos: "lácteos",
        precio: 12.0,
      },
      {
        id: 6,
        img: "./img/fileteTernera.jfif",
        nombre: "Filete de Ternera a la Parrilla",
        alergenos: "",
        precio: 18.0,
      },
    ],
  },
  {
    categoria: ".postres",
    platos: [
      {
        id: 7,
        img: "./img/tartaChocolate.jfif",
        nombre: "Tarta de Chocolate",
        alergenos: "gluten, lácteos",
        precio: 6.0,
      },
      {
        id: 8,
        img: "./img/heladoVainilla.jfif",
        nombre: "Helado de Vainilla",
        alergenos: "lácteos",
        precio: 4.5,
      },
      {
        id: 9,
        img: "./img/frutasFresca.jfif",
        nombre: "Frutas Frescas",
        alergenos: "",
        precio: 5.0,
      },
    ],
  },
  {
    categoria: ".bebidas",
    platos: [
      {
        id: 10,
        img: "./img/vinoTinto.jfif",
        nombre: "Vino Tinto",
        alergenos: "alcohol",
        precio: 12.0,
      },
      {
        id: 11,
        img: "./img/cervezaArtesanal.jfif",
        nombre: "Cerveza Artesanal",
        alergenos: "gluten, alcohol",
        precio: 5.0,
      },
      {
        id: 12,
        img: "./img/refrescoLimon.jfif",
        nombre: "Refresco de Limón",
        alergenos: "",
        precio: 2.5,
      },
    ],
  },
];

document.addEventListener("DOMContentLoaded", () => {
  platos.forEach((categoria) => {
    const categoriaContainer = document.querySelector(categoria.categoria);
    const platosContainer =
      categoriaContainer.querySelector(".platos-container");
    categoria.platos.forEach((plato) => {
      const datos = document.createElement("plato-element");
      datos.setAttribute("id", plato.id);
      datos.setAttribute("img", plato.img);
      datos.setAttribute("nombre", plato.nombre);
      datos.setAttribute("alergenos", plato.alergenos);
      datos.setAttribute("precio", plato.precio);
      platosContainer.appendChild(datos);
    });
  });
});

document.addEventListener("add-to-cart", (event) => {
  const { nombre, img, precio } = event.detail;
  console.log("Añadir a la comanda:", nombre, img, precio);
  // Aquí puedes añadir el plato a la comanda
});
