import MediaPlayer from './MediaPlayer'
import Autoplay from './plugins/Autoplay'
import AutoPause from './plugins/AutoPause'
import Ads from './plugins/ads'

  const video = document.querySelector('video');
  const player = new MediaPlayer({ 
    el: video, 
    plugins: [new Autoplay(), new AutoPause(), new Ads()],
   });

  const buttonPlay: HTMLElement = document.getElementById('btnPlay');
  buttonPlay.onclick = () => player.togglePlay();
  
  const buttonMute: HTMLElement = document.getElementById('btnMute');
  buttonMute.onclick = () => player.toggleMuted();

  if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => {
      console.log(error.message)
    })
  }