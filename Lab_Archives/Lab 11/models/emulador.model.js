const emuladores = [{
    nombre: "Super Mario Bros.", 
    imagen: "https://i.etsystatic.com/6824854/r/il/53debe/585887395/il_1080xN.585887395_gpan.jpg" , 
    enlace: "https://games.construct.net/769/latest", 
}];

module.exports = class Emulador {
    constructor(mi_nombre, mi_imagen, mi_enlace) {
        this.nombre = mi_nombre;
        this.imagen = mi_imagen;
        this.enlace = mi_enlace;
    }

    // Método para guardar el emulador en una lista (simulando almacenamiento persistente)
    save() {
        emuladores.push({
            nombre: this.nombre,
            imagen: this.imagen,
            enlace: this.enlace,
        });
    }

    // Método estático para obtener todos los emuladores
    static fetchAll() {
        return emuladores;
    }
}

