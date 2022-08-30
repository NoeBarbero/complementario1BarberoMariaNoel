/* creación de objeto */

function Producto(info){
    this.nombre = info.nombre;
    this.talles = info.talle;
    this.precio = info.precio;
    this.descripcion = info.descripcion;
}

const producto1 = new Producto(
    {
        nombre: "Remera dryfit dama",
        talles: 1,
        precio: 990,
        descripcion: "Material dryfit, colores varios"
    }
)

console.log(producto1);