class AutoPause{
    constructor(player){
        this.handler = this.handler.bind(this) // con esto bindiamos (atamos) el this a la instancia de la clase. Entonces cuando usamos el método handler encuentra los métodos pali y pause del player pasado en MediaPlayer.js e instanciado en index.js
        this.handleVisibility = this.handleVisibility.bind(this)
        this.limit = 0.25
    }
    run(player){
        this.player = player
        const observer = new IntersectionObserver(this.handler, {
            threshold: this.limit
        })
        observer.observe(player.media)

        // document.addEventListener('visibilitychange', this.handleVisibility)
    }
    handler(entries, observer){
        let ratio = entries[0].intersectionRatio
        if(ratio < this.limit){
            // console.log(player)
            this.player.pause()
        } else {
            // console.log('tendría que continuar la reproducción')
            this.player.plai()
        }

    }

    handleVisibility(){
        let isVisible = document.visibilityState === 'visible'

        if(isVisible){
            this.player.plai()
        } else {
            this.player.pause()
        }
    }

}

export default AutoPause