class spiderman {
    constructor(name, age, actor, movies, studio) {
        this.name = name
        this.age = age
        this.actor = actor
        this.movies = movies
        this.studio = studio
    }
    getInfo(actor, studio) {
        return `Hey, I'm ${this.actor} from ${this.studio} Studio`
    }
}
module.exports = spiderman