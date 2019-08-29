import MediaPlayer from './MediaPlayer.js'
import Autoplay from './plugins/Autoplay.js'
import AutoPause from './plugins/AutoPause.js'

  const video = document.querySelector('video');
  const player = new MediaPlayer({ el: video, plugins: [
    new Autoplay(),
    new AutoPause()
  ] });

  const buttonPlay = document.getElementById('btnPlay');
  buttonPlay.onclick = () => player.togglePlay();
  
  const buttonMute = document.getElementById('btnMute');
  buttonMute.onclick = () => player.toggleMuted();