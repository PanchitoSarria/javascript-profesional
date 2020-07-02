const muteToggle = document.getElementById('muteButton')

function Mute(){}

Mute.prototype.run = function(player){
    muteToggle.addEventListener('click', function(){
        if(player.media.muted === true){
            // player.unmute()
            player.media.muted = false
        } else {
            // player.mute()
            player.media.muted = true
        }
    })

}

export default Mute