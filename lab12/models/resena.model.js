const resenas = [
    {
        nombre: "Mike Barrón", 
        descripcion: "¡Que bonitos poemas!",
    }
];

module.exports = class Modelo {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_nombre, mi_descripcion) {
        this.nombre = mi_nombre;
        this.descripcion = mi_descripcion;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        resenas.push({
            nombre: this.nombre,
            descripcion: this.descripcion
        });//es lo mismo que resenas.push(this)
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return resenas;
    }

};