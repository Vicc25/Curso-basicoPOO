export class Course {
    constructor({
        name, 
        classes = [],
        isFree = false,
        lang = "spanish",
    }){
        this._name = name;
        this.classes = classes;
        this.isFree = isFree;
        this.lang = lang;

    }

    get name () {
        return this._name;
    }

    //version 01
//    changeName(nuevoNombre) {
//        this._name = nuevoNombre
//    }

    // version con set
    set name(nuevoNombre) {
        if (nuevoNombre === "Curso Malito de Programación Básica"){
            console.error("Wey no!");
        } else {
            this._name = nuevoNombre;
        }
 
    }

}