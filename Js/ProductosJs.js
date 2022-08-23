const stockPerroAccesorio = [
    {categoria: "Perro",
    nombre: "Can Cat Monstruos Peluche Para Perros",
    descripcion: "Peluche con cuerpo forrado con silicona",
    img: "/src/Multimedia/Images/AccesoriosPerro/CanCatMonstruosPelucheParaPerros.jpeg",
    precio: 2500,
    stock: 12,
    subcategoria: "Accesorios",
    id:"01"},

    {categoria: "Perro",
    nombre: "Dixon Arnés para Perro Minnie",
    descripcion: "Arnés para perro Minnie ajustable.",
    img: "/src/Multimedia/Images/AccesoriosPerro/DixonArnésparaPerroMinnie.jpeg",
    precio: 2000,
    stock: 20,
    subcategoria: "Accesorios",
    id:"02"},

    {categoria: "Perro",
    nombre: "Dixon Correa Minnie",
    descripcion: "Resistente gracias a la doble capa de nylon. Anilla en zona del agarre: útil para dispensador bolsas de caca.",
    img: "/src/Multimedia/Images/AccesoriosPerro/DixonCorreaMinnie.jpeg",
    precio: 2000,
    stock: 20,
    subcategoria: "Accesorios",
    id:"03"},

    {categoria: "Perro",
    nombre: "Earth Rated Bolsa Desperdicio",
    descripcion: "Bolsas Bio-degradables Earth Rated Bolsas extra largas y extra fuertes para proteger sus manos.",
    img: "/src/Multimedia/Images/AccesoriosPerro/EarthRatedBolsaDesperdicio.jpeg",
    precio: 1200,
    stock: 50,
    subcategoria: "Accesorios",
    id:"04"},
    {categoria: "Perro",
    nombre: "Can Cat Monstruos Peluche Para Perros",
    descripcion: "Peluche con cuerpo forrado con silicona",
    img: "/src/Multimedia/Images/AccesoriosPerro/CanCatMonstruosPelucheParaPerros.jpeg",
    precio: 2500,
    stock: 12,
    subcategoria: "Accesorios",
    id:"05"},

    {categoria: "Perro",
    nombre: "Dixon Arnés para Perro Minnie",
    descripcion: "Arnés para perro Minnie ajustable.",
    img: "/src/Multimedia/Images/AccesoriosPerro/DixonArnésparaPerroMinnie.jpeg",
    precio: 2000,
    stock: 20,
    subcategoria: "Accesorios",
    id:"06"},

    {categoria: "Perro",
    nombre: "Dixon Correa Minnie",
    descripcion: "Resistente gracias a la doble capa de nylon. Anilla en zona del agarre: útil para dispensador bolsas de caca.",
    img: "/src/Multimedia/Images/AccesoriosPerro/DixonCorreaMinnie.jpeg",
    precio: 2000,
    stock: 20,
    subcategoria: "Accesorios",
    id:"07"},

    {categoria: "Perro",
    nombre: "Earth Rated Bolsa Desperdicio",
    descripcion: "Bolsas Bio-degradables Earth Rated Bolsas extra largas y extra fuertes para proteger sus manos.",
    img: "/src/Multimedia/Images/AccesoriosPerro/EarthRatedBolsaDesperdicio.jpeg",
    precio: 1200,
    stock: 50,
    subcategoria: "Accesorios",
    id:"08"},

    {categoria: "Perro",
    nombre: "Can Cat Monstruos Peluche Para Perros",
    descripcion: "Peluche con cuerpo forrado con silicona",
    img: "/src/Multimedia/Images/AccesoriosPerro/CanCatMonstruosPelucheParaPerros.jpeg",
    precio: 2500,
    stock: 12,
    subcategoria: "Accesorios",
    id:"09"},

    {categoria: "Perro",
    nombre: "Dixon Arnés para Perro Minnie",
    descripcion: "Arnés para perro Minnie ajustable.",
    img: "/src/Multimedia/Images/AccesoriosPerro/DixonArnésparaPerroMinnie.jpeg",
    precio: 2000,
    stock: 20,
    subcategoria: "Accesorios",
    id:"10"},

    {categoria: "Perro",
    nombre: "Dixon Correa Minnie",
    descripcion: "Resistente gracias a la doble capa de nylon. Anilla en zona del agarre: útil para dispensador bolsas de caca.",
    img: "/src/Multimedia/Images/AccesoriosPerro/DixonCorreaMinnie.jpeg",
    precio: 2000,
    stock: 20,
    subcategoria: "Accesorios",
    id:"11"},

    {categoria: "Perro",
    nombre: "Earth Rated Bolsa Desperdicio",
    descripcion: "Bolsas Bio-degradables Earth Rated Bolsas extra largas y extra fuertes para proteger sus manos.",
    img: "/src/Multimedia/Images/AccesoriosPerro/EarthRatedBolsaDesperdicio.jpeg",
    precio: 1200,
    stock: 50,
    subcategoria: "Accesorios",
    id:"12"},

    {categoria: "Perro",
    nombre: "Can Cat Monstruos Peluche Para Perros",
    descripcion: "Peluche con cuerpo forrado con silicona",
    img: "/src/Multimedia/Images/AccesoriosPerro/CanCatMonstruosPelucheParaPerros.jpeg",
    precio: 2500,
    stock: 12,
    subcategoria: "Accesorios",
    id:"13"},

    {categoria: "Perro",
    nombre: "Dixon Arnés para Perro Minnie",
    descripcion: "Arnés para perro Minnie ajustable.",
    img: "/src/Multimedia/Images/AccesoriosPerro/DixonArnésparaPerroMinnie.jpeg",
    precio: 2000,
    stock: 20,
    subcategoria: "Accesorios",
    id:"14"},

    {categoria: "Perro",
    nombre: "Dixon Correa Minnie",
    descripcion: "Resistente gracias a la doble capa de nylon. Anilla en zona del agarre: útil para dispensador bolsas de caca.",
    img: "/src/Multimedia/Images/AccesoriosPerro/DixonCorreaMinnie.jpeg",
    precio: 2000,
    stock: 20,
    subcategoria: "Accesorios",
    id:"15"},

    {categoria: "Perro",
    nombre: "Earth Rated Bolsa Desperdicio",
    descripcion: "Bolsas Bio-degradables Earth Rated Bolsas extra largas y extra fuertes para proteger sus manos.",
    img: "/src/Multimedia/Images/AccesoriosPerro/EarthRatedBolsaDesperdicio.jpeg",
    precio: 1200,
    stock: 50,
    subcategoria: "Accesorios",
    id:"16"},

]

const productosContainer = document.querySelector(`#Productos_container`)
const contenedorCarrito = document.querySelector(`#carrito__container`)

let carrito = [];

stockPerroAccesorio.forEach(Producto => {
    const div = document.createElement("div")
    div.classList.add("card")
    div.classList.add("carta1")
    div.innerHTML = `
    <img src="${Producto.img}"class="card-img-top img_card" alt="#">
        <div class="card-body">
        <h6 class="card-title">${Producto.nombre}</h6>
        <p class="font-text">${Producto.descripcion}</p>
        <p>Precio:
        ${Producto.precio}$</p>
        <a href="#" class="btn btn-primary" id="agregar${Producto.id}">Agregar al carrito</a>
        </div>
    `
    productosContainer.appendChild(div)
    
    const boton = document.querySelector(`#agregar${Producto.id}`)
    boton.addEventListener("click",() =>{
        agregarAlCarrito(Producto.id)
    })
});

const agregarAlCarrito = (prodId) =>{
    const item = stockPerroAccesorio.find((prod) => (prod.id === prodId));
    carrito.push(item)
    RenderCarrito()
    console.log(carrito);
}

let RenderCarrito = () =>{
    carrito.forEach((producto) => {
        const div = document.createElement("div")
        div.classList.add("card")
        div.classList.add("carta1")
        div.innerHTML=`
        <img src="${Producto.img}"class="card-img-top img_card" alt="#">
        <div class="card-body">
        <h6 class="card-title">${Producto.nombre}</h6>
        <p class="font-text">${Producto.descripcion}</p>
        <p>Precio:
        ${Producto.precio}$</p>
        
        <button onclick="eliminarDelCarrito(${producto.id})" class="btn btn-primary"></button>    
        </div>
        `

        contenedorCarrito.appendChild(div)


    })



}