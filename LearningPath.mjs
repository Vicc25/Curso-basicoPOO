
export class LearningPath {
    constructor({
        name, 
        courses = [],
        id,
    }){
        this.name = name;
        this._id = id;
        this.courses = courses;
    }

    get id() {
        return this._id;
    }
    
    set id(newId) {
        if(newId === 0) {
            console.log(`El id ${newId} no cuenta como indice
            de LearningPath`)
        } else {
            this._id = newId;
        }
    }
}