class MusicPlayer {
  constructor(musicList) {
    this.musicList = musicList;
    this.index = 0;
  }
  getIndex_() {
    return this.index;
  }
  getMusic() {
    return this.musicList[this.index];
  }
  next() {
    if (this.index != this.musicList.length - 1) {
      this.index++;
    } else {
      this.index = 0;
    }
  }
  prev() {
    this.index--;
    if (this.index == -1) {
      this.index = this.musicList.length - 1;
    }
  }
}
