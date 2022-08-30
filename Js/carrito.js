//Recuperamos del local storage el array del carrito y lo parseamos para poder operar con el mismo
let carritoRecuperado = localStorage.getItem('CarritoJson');
carritoRecuperado = JSON.parse(carritoRecuperado);

//creamos y canturamos la variable con el selector correspondiente del contenor donde vamos a renderizar el carrito
let contenedorCarrito = document.querySelector('#carrito__container');
//funcion para eliminar productos del carrito
const eliminarDelCarrito = (prodId) => {
  const item = carritoRecuperado.find((prod) => prod.id === prodId);
const indice = carritoRecuperado.indexOf(item);
  console.log(item, indice);
  
};
//Funcion en la que recorremos el array para crear por cada producto una card con sus respectivas clases para asignar estilos con scss y asi denderizar los productos del carrito
const RenderCarrito = () => {
  carritoRecuperado.forEach((prod) => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.classList.add('carta1');
    div.innerHTML = `
    <img src="${prod.img}"class="card-img-top img_card" alt="#">
    <div class="card-body">
        <h6 class="card-title">${prod.nombre}</h6>
        <p class="font-text">${prod.descripcion}</p>
        <p>Precio:
        ${prod.precio}$</p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="btn btn-primary">Eliminar</button>
        `;
    // agregamos el div con la informacion del prodcto al contenedorcarrito para renderizarlo en el dom
    contenedorCarrito.appendChild(div);
  });
};

RenderCarrito()

