const player = new MusicPlayer(musicList_);

// let music = player.getMusic();

// display müzik
const musicDiv = document.getElementById("music");
const musicImg = document.getElementById("img");
const audio_ = document.getElementById("audio1");
const duration = document.getElementById("duration");
const nameMusic = document.getElementById("name");
const musicListDiv = document.getElementById("music-list");

const ui = new UI();
// ui.displayMusic(music);
let music;
let ul;
// ui.displayMusicList(player.musicList);
// ui.isPlay();

// music start-stop
const play_pause = document.getElementById("play-pause");
let a = 0;
play_pause.addEventListener("click", () => {
  ui.playPause();
});

// duration

const progressBar = document.getElementById("duration");

audio_.addEventListener("loadedmetadata", () => {
  console.log(audio_.duration);
  progressBar.max = Math.floor(audio_.duration);
});
audio_.addEventListener("timeupdate", () => {
  progressBar.value = Math.floor(audio_.currentTime);
});

progressBar.addEventListener("input", (e) => {
  audio_.currentTime = e.target.value;
  progressBar.value = audio_.currentTime;
});

// volume
const volume_ = document.getElementById("volume");
const volume_progress = document.getElementById("volume-progress");
let b = 0;
let volume__ = 100;
let audio_volume__ = 1;
volume_.addEventListener("click", () => {
  ui.volumeOff0n();
});
volume_progress.addEventListener("input", (e) => {
  ui.volumeChange();
});

// menu-musiclist
const menu_ = document.getElementById("menu");
const musicListDivDiv = document.getElementById("music-list-div-div");
let c = 0;
musicListDivDiv.style.height = "330px";
menu_.addEventListener("click", () => {
  ui.menuShow();
});

// music change

function selectedMusic(li) {
  player.index = li.getAttribute("li-index");
  ui.displayMusic(player.getMusic());
  a = 0;
  ui.playPause();
  ui.isPlay();
  addStorage(player.index);
}

// music finish

audio_.addEventListener("ended", () => {
  ui.next();
  if (player.musicList.length == player.index - 1) {
    for (let i = 0; i < player.index - 1; i++) {
      ui.prev();
    }
  }
  addStorage(player.index);
});

// storage

function addStorage(index__) {
  JSON.stringify(localStorage.setItem("index", index__));
}
if (JSON.parse(localStorage.getItem("index")) != null) {
  let storageData__ = JSON.parse(localStorage.getItem("index"));
  player.index = storageData__;
  music = player.getMusic();
  ui.displayMusic(music);
  ui.displayMusicList(player.musicList);
  ui.isPlay();
}
// next prev

const nextEl = document.getElementById("next");
const prevEl = document.getElementById("prev");
nextEl.addEventListener("click", () => {
  ui.next();
  addStorage(player.index);
});
prevEl.addEventListener("click", () => {
  ui.prev();
  addStorage(player.index);
});
