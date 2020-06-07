function AutoPlay(){}
AutoPlay.prototype.run = function(player){
    player.mute()
    player.playVideo()
}

export default AutoPlay