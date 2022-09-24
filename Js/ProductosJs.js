// let stockPerroAccesorioJson = JSON.stringify(stockPerroAccesorio)
// console.log(stockPerroAccesorioJson);
let productosContainer = document.querySelector('#Productos_container');
let contadorCarrito = document.querySelector('#Contador__carrito');
console.log(contadorCarrito.innerHTML);
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
      }
    });
  } else {
    fetch('/data.json')
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        const item = json.find((prod) => prod.id === prodId);
        carrito.push(item);
      });
  }
  Toastify({
    text: '¡Agregaste un producto al carrito!',
    duration: 1000,
    gravity: 'top',
    position: 'right',
    style: {
      background: '#ff6961',
    },
  }).showToast();
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
          <a href="#" class="btn btn-primary" id="agregar${Producto.id}">Agregar al carrito</a>
          </div>
      `;
        //agregamos el div creado a la variable del selector, en este caso productos container
        productosContainer.appendChild(div);
        //capturamos variable para el boton y ejecutamos la funcion de agregar al carrito ligada al evento click
        const boton = document.querySelector(`#agregar${Producto.id}`);
        boton.addEventListener('click', () => {
          agregarAlCarrito(Producto.id);
          console.log(carrito);
          setTimeout(() => {
            HandleJsonStorage(carrito);
          }, 0500);
          setTimeout(() => {
            let carritoRecuperado1 = localStorage.getItem('CarritoJson');
              carritoRecuperado1 = JSON.parse(carritoRecuperado1);
              contadorCarrito.innerHTML = carritoRecuperado1.length;
          }, 0500);

        });
      });
    })
    .catch((e) => {
      console.log(e);
    });
    
};

RenderProd();
  
