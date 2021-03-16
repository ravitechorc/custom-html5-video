import WowzaWebRTCPlay from './WowzaWebRTCPlay.js';

let settings = {
  sdpURL: "wss://s2.sstlive.com/webrtc-session.json",
  applicationName: "live",
  streamName: "SST000821"
}

const init = () => {
  const wowzaWebRTCPlay = new WowzaWebRTCPlay();
  settings.videoElementPlay = document.getElementById('video');
  wowzaWebRTCPlay.set(settings);
  wowzaWebRTCPlay.play();

  // const wowzaWebRTCPlay_2 = new WowzaWebRTCPlay();
  // settings.videoElementPlay = document.getElementById('player-video-2');
  // wowzaWebRTCPlay_2.set(settings);
  // wowzaWebRTCPlay_2.play();
}

init();