//creamos nuestro primer objeto literal
const natalia = {
    name: "Natalia",
    age: 20,
    cursosAprobados: [
        "Curso Definitivo de HTML y CSS",
        "Curso Práctico de HTML y CSS",
    ],
    aprobarCurso: function(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);
    }
    /*aprobarCurso(){

    }   version 2 para nombrar métodos*/
}; 

// Hacer que Natalia apruebe otro curso
//natalia.cursosAprobados.push("Curso de Responsive Design");

console.log(natalia);

// vamos a crear un prototipo student para ahorrarnos codigo
function Student(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursoAprobados = cursosAprobados;
    //this.aprobarCurso = function(nuevoCursito) {
    //    this.cursosAprobados.push(nuevoCursito);
    //} ---- Una forma de crear metodos
}


// -- segunda forma de crear metodos
Student.prototype.aprobarCurso = function(nuevoCursito) {
    this.cursoAprobados.push(nuevoCursito);
}

const juanita = new Student(
    "Juanita Alejandra",
    15,
    ["Curso de Introducción a la Producción de Videojuegos",
    "Curso de Creación de Personajes",
    ]
)
