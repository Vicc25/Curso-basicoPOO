
import { Comment } from "./comment.mjs";
export class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }) {

        this._name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        }
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }


    get name(){
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }

    get age(){
        return this._age;
    }

    set age(newAge) {
        this._age = newAge;
    }

    publicarComentario(commentContent) {
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
        });
        comment.publicar();
    }

}

export class FreeStudent extends Student {
    constructor(props){
        super(props); //vamos a usar una palabra clave 

    }
    approvedCourses(newCourse) {
        if (newCourse.isFree){
            this.approvedCourses.push(newCourse);
        } else {
            console.warn("Lo sentimos " + this.name + ", solo puedes tomar cursos abiertos")
        }
    }

}

export class BasicStudent extends Student {
    constructor(props){
        super(props); //vamos a usar una palabra clave 
    }
    
    approvedCourses(newCourse) {
        if (newCourse.lang !== "english"){
            this.approvedCourses.push(newCourse);
        } else {
            console.warn(`Lo sentimos ${this.name}, solo puedes tomar cursos en Español`)
        }
    }
    

}

export class ExpertStudent extends Student {
    constructor(props){
        super(props); //vamos a usar una palabra clave 
    }

    approvedCourses(newCourse) {
        this.approvedCourses.push(newCourse);
    }
}

export class TeacherStudent extends Student {
    constructor(props){
        super(props); //vamos a usar una palabra clave 
    }

    approvedCourses(newCourse) {
        this.approvedCourses.push(newCourse);
    }

    publicarComentario(commentContent) {
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
            studentRole: "Profesor",
        });
        comment.publicar();
    }
}