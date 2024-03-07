const db = require('../util/database');

module.exports = class Construccion {
    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_nombre,mi_imagen,mi_descripcion,mi_fecha_actual,mi_hora_actual) {
        this.nombre = mi_nombre;
        this.imagen = mi_imagen;
        this.descripcion = mi_descripcion;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        construcciones.push({
            nombre: this.nombre,
            imagen: this.imagen,
            descripcion: this.descripcion,
        });
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('SELECT * FROM construccion');
    }
}