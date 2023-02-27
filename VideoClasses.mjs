export class PlatziClass {
    constructor({
        name,
        videoID,
    }) {
        this.name = name;
        this.videID = videoID;
    }

    reproducir() {
        videoPlay(this.videID);
    }

    pausar() {
        videoStop(this.videoID);
    }

}

function videoPlay(id) {
    const urlSecreta = "https://platziultrasecreto.com " + id;
    console.log("Se está reproduciendo desde la url" + urlSecreta);
}

function videoStop(id) {
    const urlSecreta = "https://platziultrasecreto.com " + id;
    console.log("Pausamoe la url" + urlSecreta);
}