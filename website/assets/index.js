if('serviceWorker' in navigator){
    navigator.serviceWorker.register('../sw.js').catch(error => console.log(error))
} else {
    console.log('EL navegador no tiene service worker')
}

import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/miAutoPlay.js'
import Mute from './plugins/Mute.js' // Esto lo importo si quiero agregarlo como plugin
import AutoPause from './plugins/AutoPause.js'

const video = document.querySelector('video')
const button = document.querySelector('#playButton')
const muteToggle = document.getElementById('muteButton')

const player = new MediaPlayer({
    el: video,
    plugins : [
        new AutoPlay(),
        new Mute(),
        new AutoPause(),
    ],
})
button.onclick = () => player.togglePlay()
// muteToggle.onclick = () => player.toggleMute()