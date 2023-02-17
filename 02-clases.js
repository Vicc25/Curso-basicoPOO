// Prototipos con la sintaxis de clases
/*class Student2 {
 constructor(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;

 }  

 aprobarCurso(nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
 }

}

const miguelito = new Student2(
    'Miguel', 
    28, 
    ["Curso de Análisis de Negocios",
    "Curso de excel avanzado",
    ],
);
*/
// Hay un patrón en JavaScript que se llama ROR



// Prototipos con la sintaxis de clases
class Student2 {
    constructor(
        {
            name, 
            age, 
            cursosAprobados = [],
            email,

         }
    ) {
       this.name = name;
       this.age = age;
       this.email = email;
       this.cursosAprobados = cursosAprobados;
   
    }  
   
    aprobarCurso(nuevoCursito) {
       this.cursosAprobados.push(nuevoCursito);
    }
   
   }
   
   const miguelito = new Student2(
    {
        name:'Miguel', 
        age: 28, 
        cursosAprobados:["Curso de Análisis de Negocios",
        "Curso de excel avanzado",
        ],
        email: "miguel@platzi.com",
    }

   );

