const db = require('../util/database');

module.exports = class Modelo {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_nombre, mi_descripcion) {
        this.nombre = mi_nombre;
        this.descripcion = mi_descripcion;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute(
            'INSERT INTO resena (nombre, imagen, username) VALUES (?, ?, "ultramikebarsa")',
            [this.nombre, this.descripcion]
        );
    }


    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('SELECT * FROM resena');
    }

}