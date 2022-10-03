// let stockPerroAccesorioJson = JSON.stringify(stockPerroAccesorio)
// console.log(stockPerroAccesorioJson);
let productosContainer = document.querySelector('#Productos_container');
let contadorCarrito = document.querySelector('#Contador__carrito');
let contadorCarrito1 = document.querySelector('#Contador__carrito1');
let carrito = [];
// Funciones
//funcion para parcear a json y enviar el array al localStorage
const HandleJsonStorage = (array) => {
  let carritoJson = JSON.stringify(array);
  localStorage.setItem('CarritoJson', carritoJson);
};
//funcion para agregar productos al carrito
const agregarAlCarrito = (prodId) => {
  const existe = carrito.some((prod) => prod.id === prodId);
  if (existe) {
    const prod = carrito.map((prod) => {
      if (prod.id === prodId) {
        prod.cantidad++;
        Toastify({
          text: `¡Agregaste ${prod.nombre} al carrito!`,
          duration: 1000,
          gravity: 'top',
          position: 'right',
          style: {
            background: '#ff6961',
          },
        }).showToast();
        setTimeout(() => {
          prod.precioTotal = prod.precioTotal + prod.precio;
          HandleJsonStorage(carrito);
        }, 0);
      }
    });
  } else {
    fetch('/data.json')
      .then((res) => res.json())
      .then((json) => {
        const item = json.find((prod) => prod.id === prodId);
        carrito.push(item);
        setTimeout(() => {
          HandleJsonStorage(carrito);
        }, 0);
        Toastify({
          text: `¡Agregaste ${item.nombre} al carrito!`,
          duration: 1000,
          gravity: 'top',
          position: 'right',
          style: {
            background: '#ff6961',
          },
        }).showToast();
      });
  }
};

// fin Funciones

const RenderProd = () => {
  fetch('/data.json')
    .then((res) => res.json())
    .then((json) => {
      json.forEach((Producto) => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.classList.add('carta1');
        div.innerHTML = `
          <img src="${Producto.img}"class="card-img-top img_card" alt="#">
          <div class="card-body">
          <h6 class="card-title">${Producto.nombre}</h6>
          <p class="font-text">${Producto.descripcion}</p>
          <p>Precio:${Producto.precio}$</p>
          <a class="btn btn-primary" id="agregar${Producto.id}">Agregar al carrito</a>
          </div>
          `;
        //agregamos el div creado a la variable del selector, en este caso productos container
        productosContainer.appendChild(div);

        //capturamos variable para el boton y ejecutamos la funcion de agregar al carrito ligada al evento click
        const boton = document.querySelector(`#agregar${Producto.id}`);
        boton.addEventListener('click', () => {
          agregarAlCarrito(Producto.id);
          setTimeout(() => {
            let carritoRecuperado = localStorage.getItem('CarritoJson');
            carritoRecuperado = JSON.parse(carritoRecuperado);
            console.log(carritoRecuperado);
            if (carritoRecuperado.length > 0) {
              contadorCarrito.innerHTML = carritoRecuperado.length;
              contadorCarrito1.innerHTML = contadorCarrito.innerHTML;
            }
          }, 1000);
        });
      });
    })
    .catch((e) => {
      console.log(e);
    });
};
RenderProd();
