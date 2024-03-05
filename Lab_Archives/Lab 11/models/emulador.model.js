const emuladores = [
    {
    nombre: "Super Mario Bros.", 
    descripcion: "1985",
    imagen: "https://i.etsystatic.com/6824854/r/il/53debe/585887395/il_1080xN.585887395_gpan.jpg" , 
    enlace: "https://games.construct.net/769/latest",
    },
    {
    nombre: "The Legend of Zelda", 
    descripcion: "1986",
    imagen: "https://i.ebayimg.com/thumbs/images/g/nPIAAOSwFedktqbB/s-l640.jpg" , 
    enlace: "https://www.webmulator.com/games/nintendo/super-mario?emulator_id=1",
    }
];

module.exports = class Emulador {
    constructor(mi_nombre, mi_descripcion,mi_imagen, mi_enlace) {
        this.nombre = mi_nombre;
        this.descripcion = mi_descripcion;
        this.imagen = mi_imagen;
        this.enlace = mi_enlace;
    }

    // Método para guardar el emulador en una lista (simulando almacenamiento persistente)
    save() {
        emuladores.push({
            nombre: this.nombre,
            descripcion: this.descripcion,
            imagen: this.imagen,
            enlace: this.enlace,
        });
    }

    // Método estático para obtener todos los emuladores
    static fetchAll() {
        return emuladores;
    }
}

