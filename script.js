const platos = [
    {
        container: '.primeros',
        platos: [
            { id: 1, img: './img/ensaladaCesar.jfif', nombre: 'Ensalada César', alergenos: 'gluten, lácteos', precio: 8.5 },
            { id: 2, img: './img/sopa-tomate.jfif', nombre: 'Sopa de Tomate', alergenos: 'lácteos', precio: 6.5 },
            { id: 3, img: './img/bruschetta.jfif', nombre: 'Bruschetta de Champiñones', alergenos: 'gluten', precio: 7.0 }
        ]
    },
    {
        container: '.segundos',
        platos: [
            { id: 4, img: './img/lomoSalmon.jfif', nombre: 'Lomo de Salmón al Horno', alergenos: 'pescado', precio: 15.0 },
            { id: 5, img: './img/polloCurry.jfif', nombre: 'Pollo al Curry', alergenos: 'lácteos', precio: 12.0 },
            { id: 6, img: './img/fileteTernera.jfif', nombre: 'Filete de Ternera a la Parrilla', alergenos: '', precio: 18.0 }
        ]
    },
    {
        container: '.postres',
        platos: [
            { id: 7, img: './img/tartaChocolate.jfif', nombre: 'Tarta de Chocolate', alergenos: 'gluten, lácteos', precio: 6.0 },
            { id: 8, img: './img/heladoVainilla.jfif', nombre: 'Helado de Vainilla', alergenos: 'lácteos', precio: 4.5 },
            { id: 9, img: './img/frutasFresca.jfif', nombre: 'Frutas Frescas', alergenos: '', precio: 5.0 }
        ]
    },
    {
        container: '.bebidas',
        platos: [
            { id: 10, img: './img/vinoTinto.jfif', nombre: 'Vino Tinto', alergenos: 'alcohol', precio: 12.0 },
            { id: 11, img: './img/cervezaArtesanal.jfif', nombre: 'Cerveza Artesanal', alergenos: 'gluten, alcohol', precio: 5.0 },
            { id: 12, img: './img/refrescoLimon.jfif', nombre: 'Refresco de Limón', alergenos: '', precio: 2.5 }
        ]
    }
];

document.addEventListener("DOMContentLoaded", () => {
    platos.forEach(categoria => {
        const container = document.querySelector('.col-6');
        const platosContainer = container.querySelector('.platos-container');
        categoria.platos.forEach(plato => {
            const item = document.createElement('plato-element');
            item.setAttribute('id', plato.id)
            item.setAttribute('img', plato.img)
            item.setAttribute('nombre', plato.nombre)
            item.setAttribute('alergenos', plato.alergenos)
            item.setAttribute('precio', plato.precio)
            platosContainer.appendChild(item)
        })
    })
})


