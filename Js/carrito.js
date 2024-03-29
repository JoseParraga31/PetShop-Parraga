//Recuperamos del local storage el array del carrito y lo parseamos para poder operar con el mismo
let carritoRecuperado = localStorage.getItem('CarritoJson');
carritoRecuperado = JSON.parse(carritoRecuperado);
//creamos y canturamos la variable con el selector correspondiente del contenor donde vamos a renderizar el carrito
let contenedorCarrito = document.querySelector('#carrito__container');
//capturamos y exportamos la variable que referenciara la cantidad de productos en el contador
let contadorCarrito = document.querySelector('#Contador__carrito');
let PrecioFinal = document.querySelector('#total__pago');

//funcion para parcear a json y enviar el array al localStorage
const HandleJsonStorage = (array) => {
  let carritoJson = JSON.stringify(array);
  localStorage.setItem('CarritoJson', carritoJson);
};
//Funcion en la que recorremos el array para crear por cada producto una card con sus respectivas clases para asignar estilos con scss y asi denderizar los productos del carrito
const RenderCarrito = () => {
  contenedorCarrito.innerHTML = '';
  carritoRecuperado.forEach((prod) => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.classList.add('carta1');
    div.innerHTML = `
    <img src="${prod.img}"class="card-img-top img_card" alt="#">
    <div class="card-body">
      <h6 class="card-title">${prod.nombre}</h6>
      <p class="font-text">${prod.descripcion}</p>
      <div class="contenedor__btn2--style"> 
      <p>Cantidad: ${prod.cantidad}</p>
      </div>
      <p>Precio Unitario: ${prod.precio}$</p>
      <p>Precio total: ${prod.precioTotal}$</p>
      <div class="contenedor__eliminar--style" >
      <button onclick="agregarProducto(${prod.id})" class="btn btn-primary btn__eliminar--style">Agregar</button>
        <button onclick="eliminarDelCarrito(${prod.id})" class="btn btn-primary btn__eliminar--style">Eliminar</button>
    </div>`;
    // agregamos el div con la informacion del prodcto al contenedorcarrito para renderizarlo en el dom
    contenedorCarrito.appendChild(div);
    contadorCarrito.innerHTML = carritoRecuperado.length;
  });
};

RenderCarrito();
//funcion para eliminar productos del carrito
let eliminarDelCarrito = (prodid) => {
  const existe = carritoRecuperado.some((prod) => prod.id == prodid);
  if (existe) {
    const prod = carritoRecuperado.map((prod) => {
      if (prod.id == prodid) {
        prod.cantidad--;
        setTimeout(() => {
          prod.precioTotal = prod.precioTotal - prod.precio;
          HandleJsonStorage(carritoRecuperado);
          RenderCarrito();
        }, 0);
        Toastify({
          text: `¡Eliminaste una unidad de ${prod.nombre}!`,
          duration: 2000,
          gravity: 'top',
          position: 'right',
          style: {
            background: '#ff6961',
          },
        }).showToast();
        if (prod.cantidad < 1) {
          carritoRecuperado = carritoRecuperado.filter((prod) => prod.id != prodid);
          Toastify({
            text: `¡Eliminaste ${prod.nombre} del carrito!`,
            duration: 2000,
            gravity: 'top',
            position: 'right',
            style: {
              background: '#ff6961',
            },
          }).showToast();
          HandleJsonStorage(carritoRecuperado);
          RenderCarrito();
        }
      }
    });
  }
};

let agregarProducto = (prodid) => {
  const existe = carritoRecuperado.some((prod) => prod.id == prodid);
  if (existe) {
    const prod = carritoRecuperado.map((prod) => {
      if (prod.id == prodid) {
        prod.cantidad++;
        setTimeout(() => {
          prod.precioTotal = prod.precioTotal + prod.precio;
          HandleJsonStorage(carritoRecuperado);
          RenderCarrito();
        }, 0);
        Toastify({
          text: `¡Agregaste una unidad de ${prod.nombre}!`,
          duration: 2000,
          gravity: 'top',
          position: 'right',
          style: {
            background: '#ff6961',
          },
        }).showToast();
      }
      HandleJsonStorage(carritoRecuperado);
      RenderCarrito();
    });
  }
};
