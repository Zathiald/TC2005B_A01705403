const emuladores = [{nombre: "Emulador ejemplo", 
imagen: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3cc8672e-d273-4bd3-8ff0-001a6bacd05d/dg04qil-0c949860-fda7-4407-854e-ae6935a02c2d.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNjYzg2NzJlLWQyNzMtNGJkMy04ZmYwLTAwMWE2YmFjZDA1ZFwvZGcwNHFpbC0wYzk0OTg2MC1mZGE3LTQ0MDctODU0ZS1hZTY5MzVhMDJjMmQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.iPzl5u8ZkXd0cCshh3UkahbxMfEc0ipHKASlnMKU6rA" , 
enlace: "Enlace a emulador", 
}];

module.exports = class Emulador {
    constructor(nombre, imagen, enlace) {
        this.nombre = nombre;
        this.imagen = imagen;
        this.enlace = enlace;
    }

    // Método para guardar el emulador en una lista (simulando almacenamiento persistente)
    save() {
        // Aquí podrías guardar el emulador en una base de datos o en memoria
        // Por ahora, simplemente lo agregaremos a una lista
        emuladores.push(this);
    }

    // Método estático para obtener todos los emuladores
    static fetchAll() {
        return emuladores;
    }
}

