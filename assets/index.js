import MediaPlayer from './MediaPlayer.js'
import Autoplay from './plugins/Autoplay.js'

  const video = document.querySelector('video');
  const player = new MediaPlayer({ el: video, plugins: [new Autoplay()] });

  const buttonPlay = document.getElementById('btnPlay');
  buttonPlay.onclick = () => player.togglePlay();
  
  const buttonMute = document.getElementById('btnMute');
  buttonMute.onclick = () => player.toggleMuted();