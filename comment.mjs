export class Comment {
    constructor({
        content,
        studentName,
        studentRole = "estudiante",
        likes = 5,
    }) {
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.likes = likes;
    }

    publicar() {
        console.log(this.studentName + " (" + this.studentRole + ") ");
        console.log(this.likes + " likes");
        console.log(this.content);
    }
}