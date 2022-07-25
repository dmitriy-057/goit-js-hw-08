import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const iframe = document.querySelector("#vimeo-player");
const player = new Player(iframe);


player.on('timeupdate', throttle(onCurrentTime, 1000));

onSaveCurrentTime()

function onCurrentTime(currentTime) {

console.log("seconds:", currentTime.seconds);
localStorage.setItem("videoplayer-current-time",JSON.stringify(currentTime.seconds))
}

function onSaveCurrentTime() {
    const savedCurrentTime = localStorage.getItem("videoplayer-current-time");
    const parsedCurrentTime = JSON.parse(savedCurrentTime);
    console.log("видео было остановвлено на:",parsedCurrentTime);
    player.setCurrentTime(parsedCurrentTime)
}
