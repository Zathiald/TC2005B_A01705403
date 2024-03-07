const construcciones = [{nombre: "Imagen", 
imagen: "https://gifdb.com/images/high/kungfu-master-oogway-mmmm-monkey-9rbdum2btxcwg7xc.gif" , 
descripcion: "descripcion ejemplo", 
fecha_actual: new Date().toLocaleDateString(), 
hora_actual: new Date().toLocaleTimeString()}];

module.exports = class Construccion {
    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_nombre,mi_imagen,mi_descripcion,mi_fecha_actual,mi_hora_actual) {
        this.nombre = mi_nombre;
        this.imagen = mi_imagen;
        this.descripcion = mi_descripcion;
        this.fecha_actual = mi_fecha_actual;
        this.hora_actual = mi_hora_actual;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        construcciones.push({
            nombre: this.nombre,
            imagen: this.imagen,
            descripcion: this.descripcion,
            fecha_actual: this.fecha_actual,
            hora_actual: this.hora_actual,
        });
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return construcciones;
    }
}