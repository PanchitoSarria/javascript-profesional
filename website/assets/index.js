import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'

const video = document.querySelector('video')
const playBtn = document.getElementById('playButton')

const player = new MediaPlayer({ el: video, plugins: [new AutoPlay()]})
playBtn.onclick = () => player.tooglePlayPause()