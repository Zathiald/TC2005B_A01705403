const db = require('../util/database');

module.exports = class Construccion {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_nombre, mi_imagen,mi_descripcion) {
        this.nombre = mi_nombre;
        this.imagen = mi_imagen;
        this.descripcion = mi_descripcion;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute(
            'INSERT INTO construccion (nombre, imagen, descripcion, username) VALUES (?, ?, ?, "rommel49")',
            [this.nombre, this.imagen, this.descripcion]
        );
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('SELECT * FROM construccion');
    }

    static fetchOne(id) {
        return db.execute('SELECT * FROM construccion WHERE id=?', 
            [id]);
    }

    static fetch(id) {
        if (id) {
            return this.fetchOne(id);
        } else {
            return this.fetchAll();
        }
    }

    static search(valor_buscar){
        return db.execute('SELECT * FROM construccion WHERE nombre LIKE ?',
        ['%'+ valor_buscar + '%']);
    }

    static delete(id) {
        return db.execute('DELETE FROM construccion WHERE id=?', 
            [id]);
    }
}