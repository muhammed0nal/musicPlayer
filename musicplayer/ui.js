class UI {
  displayMusic(music_) {
    nameMusic.innerText = music_.getName();
    musicImg.src = music_.img;
    audio_.src = music_.file;
  }
  next() {
    player.next();
    music = player.getMusic();
    ui.displayMusic(music);
    audio_.play();
    play_pause.classList.add("bx-pause");
    play_pause.classList.remove("bx-play");
    this.isPlay();
    a = 1;
  }
  prev() {
    player.prev();
    music = player.getMusic();
    ui.displayMusic(music);
    audio_.play();
    play_pause.classList.add("bx-pause");
    play_pause.classList.remove("bx-play");
    this.isPlay();
    a = 1;
  }
  playPause() {
    if (a == 0) {
      play_pause.classList.add("bx-pause");
      play_pause.classList.remove("bx-play");
      audio_.play();
      a = 1;
    } else {
      play_pause.classList.remove("bx-pause");
      play_pause.classList.add("bx-play");
      audio_.pause();
      a = 0;
    }
  }
  volumeOff0n() {
    if (b == 0) {
      volume_.classList.add("bxs-volume-mute");
      volume_.classList.remove("bxs-volume-low");
      volume_progress.value = 0;
      audio_.volume = 0;
      b = 1;
    } else {
      volume_.classList.remove("bxs-volume-mute");
      volume_.classList.add("bxs-volume-low");
      b = 0;
      volume_progress.value = volume__;
      audio_.volume = audio_volume__;
    }
  }
  volumeChange() {
    console.log(volume_progress.value);
    if (volume_progress.value == 0) {
      volume_.classList.add("bxs-volume-mute");
      volume_.classList.remove("bxs-volume-low");
      audio_.volume = 0;
      b = 1;
    } else {
      volume_.classList.remove("bxs-volume-mute");
      volume_.classList.add("bxs-volume-low");
      audio_.volume = volume_progress.value / 100;
      audio_volume__ = audio_.volume;
      volume__ = volume_progress.value;
      b = 0;
    }
  }
  displayMusicList(list) {
    for (let i = 0; i < list.length; i++) {
      ul = `
            <li li-index='${i}' onclick="selectedMusic(this)" class="li">
              <div class="name">
                <h4>${i + 1}</h4>
                <p>${list[i].singer} - ${list[i].title} Dikkat</p>
                <audio class="music-${i}" src="${list[i].file}"></audio>
              </div>
              <p id="music-${i}"></p>
            </li>
          `;
      musicListDiv.insertAdjacentHTML("beforeend", ul);
      let liAudioDuration = musicListDiv.querySelector(`#music-${i}`);
      let liAudioTag = musicListDiv.querySelector(`.music-${i}`);
      liAudioTag.addEventListener("loadeddata", () => {
        liAudioDuration.innerText =
          Math.floor(liAudioTag.duration / 60) +
          ":" +
          Math.ceil(liAudioTag.duration % 60);
      });
    }
  }
  menuShow() {
    if (c == 0) {
      musicListDivDiv.style.height = "0px ";
      // musicListDiv.style.height = "320px";
      c = 1;
    } else {
      musicListDivDiv.style.height = "330px";
      // musicListDiv.style.height = "0px";
      c = 0;
    }
  }
  isPlay() {
    for (let li of musicListDiv.querySelectorAll("li")) {
      // önce hepsini kaldırıyor
      if (li.classList.contains("active")) {
        li.classList.remove("active");
      }
      if (li.getAttribute("li-index") == player.index) {
        // sonra basılana ekliyor
        li.classList.add("active");
      }
    }
  }
}
