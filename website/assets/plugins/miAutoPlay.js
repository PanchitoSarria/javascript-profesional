function AutoPlay(){}

AutoPlay.prototype.run = function(playerPlugIn){
    // console.log(player)
    // player.mute()
    if(!playerPlugIn.muted){
        playerPlugIn.muted = true
    } 
    playerPlugIn.plai()
}

export default AutoPlay