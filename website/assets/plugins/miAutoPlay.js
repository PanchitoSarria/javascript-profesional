function AutoPlay(){}

AutoPlay.prototype.run = function(player){
    // console.log(player)
    // player.mute()
    if(!player.muted){
        player.muted = true
    } 
    player.plai()
}

export default AutoPlay