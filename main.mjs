
import {PlatziClass} from "./VideoClasses.mjs";
import {Comment} from "./comment.mjs";
import {Course} from "./Course.mjs";
import {LearningPath} from "./LearningPath.mjs";
import {FreeStudent, BasicStudent, ExpertStudent, TeacherStudent, Student } from "./Student.mjs";


// PlatziClass
const cdh01 = new PlatziClass ({
    Lesson: "¿Qué es el Frontend?",
    videoID: 1,
}) 

const cdh02 = new PlatziClass ({
    Lesson: "¿Qué es el Backend?",
    videoID: 2,
}) 

const CPB01 = new PlatziClass ({
    Lesson:"¿Cómo aprender programación?",
    videoID: 1,
}) 

const CPB02 = new PlatziClass ({
    Lesson:"Crea tu primer sitio web",
    videoID: 1,
}) 

const cph01 = new PlatziClass ({
    Lesson:"Análisis del proyecto Google Clone",
    videoID: 1,
})

const cph02 = new PlatziClass ({
    Lesson:"Configuración del proyecto",
    videoID: 2,
}) 


cdh01.reproducir();
cdh01.pausar();


cdh02.reproducir();
cdh02.pausar();


// Clase Curso



const cursoProgBasica = new Course ({
    name: "Curso Gratis de Programación Básica",
    classes: [CPB01, CPB02],
    isFree: true,
    lang: "spanish",
});

const cursoDefinitivoHTML = new Course ({
    name: "Curso Definitivo de HTML y CSS",
    classes: [cdh01, cdh02] ,
    isFree: false,
    lang: "english",
});

const cursoPracticoHTML = new Course ({
    name: "Curso Práctico de HTML y CSS",
    classes: [cph01, cph02],
    isFree: false,
    lang: "spanish",
});


//Learning Path



const escuelaWeb = new LearningPath({
    name: "Escuela de Desarrollo Web",
    courses: [
        cursoProgBasica,
        cursoDefinitivoHTML,
        cursoPracticoHTML,
    ]
})


console.log(escuelaWeb);
escuelaWeb.id = 1;
console.log(escuelaWeb);


const escuelaData = new LearningPath({
    name: "Escuela de Data Science",
    courses: [
        cursoProgBasica,
        "Curso Data Business",
        "Curso DataViz",
    ]
})

const escuelaVgs = new LearningPath({
    name: "Escuela de Videojuegos",
    courses: [
        "Curso Unity",
        "Curso Unreal",
    ]
})

// Class Student


const juan2 = new FreeStudent ({
    name: "JuanDC",
    username: "juandc",
    email: "juanito@gmail.com",
    twitter: "fjuandc",
    learningPaths: [
        escuelaWeb,
    ]
})

juan2.publicarComentario("Me gusta la clase!");


const freddy = new TeacherStudent({
    name: "Freddy Vega",
    username: "freddier",
    email: "freddier@platzi.com",
    twitter: "freddier",
    instagram: "freddiervega",
})
freddy.publicarComentario("Excelente Curso!");