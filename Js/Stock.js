/*Carga de productos*/
let imgPreview = document.querySelector('#img-preview');
let imgUploader = document.querySelector('#imgUploader');
let bntUploader = document.querySelector('#btnUploader');
let categoriaUploader = document.querySelector('#categoriaUploader');
let subCategoriaUploader = document.querySelector('#subCategoriasUploader');
let descripcionUploader = document.querySelector('#descripcion');
let stockUploader = document.querySelector('#cantidaUploader');
let precioUploader = document.querySelector('#precioUploader');
let nombreUploader = document.querySelector('#nombreUploader');

const perroAccesorio = [];
const perroAlimentos = [];
const perroEsteticaeHigiene = [];
const perroSnaks = [];

const GatoAccesorio = [];
const GatoAlimentos = [];
const GatoEsteticaeHigiene = [];
const GatoSnaks = [];

function agregar(array, Producto) {
  array.push(Producto);
}

bntUploader.addEventListener('click', () => {
  let imgUploaded = imgUploader.value;
  console.log(`ruta de la imagen ${imgUploaded}`);

  let categoriaUploaded = categoriaUploader.value;
  console.log(`categoria cargada ${categoriaUploaded}`);

  let subCategoriaUploaded = subCategoriaUploader.value;
  console.log(`sub categoria cargada ${subCategoriaUploaded}`);

  let descripcionUploaded = descripcionUploader.value;
  console.log(`descripcion cargada  ${descripcionUploaded}`);

  let stockUploaded = parseInt(stockUploader.value);
  console.log(`precio cargado ${stockUploaded}`);

  let precioUploaded = parseInt(precioUploader.value);
  console.log(`Precio cargado  ${precioUploaded}`);

  let nombreUploaded = nombreUploader.value;
  console.log(`nombre cargado  ${nombreUploaded}`);

  if (categoriaUploaded === 'Categoria' || subCategoriaUploaded === 'Sub Categorias' || descripcionUploaded === '' || isNaN(precioUploaded, stockUploaded)) {
    alert('Los Campos Estan Vacios y/o Incompletos');
  } else {
    class Producto {
      constructor(img, categoria, subcategoria, descripcion, stock, precio, nombre) {
        this.img = img;
        this.categoria = categoria;
        this.subcategoria = subcategoria;
        this.descripcion = descripcion;
        this.stock = stock;
        this.precio = precio;
        this.nombre = nombre;
      }
    }

    const nuevoProducto = new Producto(imgUploaded, categoriaUploaded, subCategoriaUploaded, descripcionUploaded, stockUploaded, precioUploaded, nombreUploaded);

    if ((nuevoProducto.categoria === 'Perro') & (nuevoProducto.subcategoria === 'Accesorios')) {
      agregar(perroAccesorio, nuevoProducto);
      let perroAccesorioJson = JSON.stringify(perroAccesorio);
      console.log(perroAccesorioJson);
    }
    if ((nuevoProducto.categoria === 'Perro') & (nuevoProducto.subcategoria === 'Alimentos')) {
      agregar(perroAlimentos, nuevoProducto);
      let perroAlimentosJson = JSON.stringify(perroAlimentos);
      console.log(perroAlimentosJson);
    }
    if ((nuevoProducto.categoria === 'Perro') & (nuevoProducto.subcategoria === 'Estetica e Higiene')) {
      agregar(perroEsteticaeHigiene, nuevoProducto);
      let perroEsteticaeHigieneJson = JSON.stringify(perroEsteticaeHigiene);
      console.log(perroEsteticaeHigieneJson);
    }
    if ((nuevoProducto.categoria === 'Perro') & (nuevoProducto.subcategoria === 'Snaks')) {
      agregar(perroSnaks, nuevoProducto);
      let perroSnaksJson = JSON.stringify(perroSnaks);
      console.log(perroSnaksJson);
    }

    if ((nuevoProducto.categoria === 'Gato') & (nuevoProducto.subcategoria === 'Accesorios')) {
      agregar(GatoAccesorio, nuevoProducto);
      let GatoAccesorioJson = JSON.stringify(GatoAccesorio);
      console.log(GatoAccesorioJson);
    }
    if ((nuevoProducto.categoria === 'Gato') & (nuevoProducto.subcategoria === 'Alimentos')) {
      agregar(GatoAlimentos, nuevoProducto);
      let GatoAlimentosJson = JSON.stringify(GatoAlimentos);
      console.log(GatoAlimentosJson);
    }
    if ((nuevoProducto.categoria === 'Gato') & (nuevoProducto.subcategoria === 'Estetica e Higiene')) {
      agregar(GatoEsteticaeHigiene, nuevoProducto);
      let GatoEsteticaeHigieneJson = JSON.stringify(GatoEsteticaeHigiene);
      console.log(GatoEsteticaeHigieneJson);
    }
    if ((nuevoProducto.categoria === 'Gato') & (nuevoProducto.subcategoria === 'Snaks')) {
      agregar(GatoSnaks, nuevoProducto);
      let GatoSnaksJson = JSON.stringify(GatoSnaks);
      console.log(GatoSnaksJson);
    }
  }
});
