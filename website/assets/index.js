import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/miAutoPlay.js'
import Mute from './plugins/Mute.js' // Esto lo importo si quiero agregarlo como plugin

const video = document.querySelector('video')
const button = document.querySelector('#playButton')
// const muteToggle = document.getElementById('muteButton')

const player = new MediaPlayer({
    el: video,
    plugins : [
        new AutoPlay(),
        new Mute(),
    ],
})
button.onclick = () => player.togglePlay()
// muteToggle.onclick = () => player.toggleMute()