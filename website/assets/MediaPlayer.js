function MediaPlayer(config){
  this.media = config.el
  this.plugins = config.plugins || []

  this.pluginsRun()
}

MediaPlayer.prototype.pluginsRun = function(){
  const player = {
    plai: () => this.play(),
    pause: () => this.pause(),
    media: this.media,
    get muted(){
      return this.media.muted
    },
    set muted(value){
      this.media.muted = value 
    }
  }

  // this.plugins.forEach(plugin => {
  //   plugin.run(this)
  // })
  this.plugins.forEach(plugin => {
    plugin.run(player)
  })
}

MediaPlayer.prototype.play = function(){
  this.media.play()
}
MediaPlayer.prototype.pause = function(){
  this.media.pause()
}
MediaPlayer.prototype.togglePlay = function(){
  if(this.media.paused){
      this.play()
  } else {
      this.pause()
  }
}

// Estos métodos sirven si no hago los setters y getters limitados de propiedades y métodos de la const player
// MediaPlayer.prototype.mute = function(){
//   this.media.muted = true
// }
// MediaPlayer.prototype.unmute = function(){
//   this.media.muted = false
// }


//    Este código lo uso si agrego el evento en index.js
// MediaPlayer.prototype.toggleMute = function(){
//   if(this.media.muted){
//     this.media.muted = false
//   } else {
//     this.media.muted = true
//   }
// }

export default MediaPlayer