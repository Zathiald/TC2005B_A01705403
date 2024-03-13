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
    },

    {
    nombre: "Doom",
    descripcion: "1993",
    imagen: "https://store-images.s-microsoft.com/image/apps.22940.14303655336501012.2beb08d9-395e-453b-b5e3-0d4ac24d9d15.0a18faa9-5741-4971-99ce-55b5f0925b78",
    enlace: "https://games.construct.net/53554/latest",
    },

    {
        nombre: "Sans Fight",
        descripcion: "2015",
        imagen: "https://steamuserimages-a.akamaihd.net/ugc/1002520175786308448/13369F689EAAEBF62ED6E43D8210557D4C7C2B66/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
        enlace: "https://games.construct.net/60810/latest",
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

