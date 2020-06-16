import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/miAutoPlay.js'

const video = document.querySelector('video')
const button = document.querySelector('#playButton')

const player = new MediaPlayer({el: video, plugins : [new AutoPlay()]})
button.onclick = () => player.togglePlay()