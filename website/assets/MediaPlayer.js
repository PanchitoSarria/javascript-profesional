function MediaPlayer(config){
    this.media = config.el
    this.plugins = config.plugins || []

    this._initPlugins()
}
MediaPlayer.prototype._initPlugins = function(){
    this.plugins.forEach(plugin => {
        plugin.run(this)
    })
}
MediaPlayer.prototype.mute = function(){
    this.media.muted = true
}
MediaPlayer.prototype.playVideo = function(){
    this.media.play()
}
MediaPlayer.prototype.pauseVideo = function(){
    this.media.pause()
}
MediaPlayer.prototype.tooglePlayPause = function(){
  if(this.media.paused){
    this.playVideo()
  } else {
    this.pauseVideo()
  }
}

export default MediaPlayer