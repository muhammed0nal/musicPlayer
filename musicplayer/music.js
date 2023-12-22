class Music {
  constructor(title, singer, img, file) {
    this.title = title;
    this.singer = singer;
    this.img = img;
    this.file = file;
  }
  getName() {
    return this.title + " - " + this.singer;
  }
}
const musicList_ = [
  new Music(
    "Böyle Ayrilik Olmaz",
    "Nilüfer",
    "./img/Nilufer-Sen-Muhimsin.jpg",
    "./music/mp3indirdur-Nilufer-Boyle-Ayrilik-Olmaz (1).mp3"
  ),
  new Music(
    "Anlamazdın",
    "Ayla Dikmen",
    "./img/Ayla-Dikmen-Klasikler.jpg",
    "./music/mp3indirdur-Ayla-Dikmen-Anlamazdin.mp3"
  ),
  new Music(
    "Sen Sivası Seyret",
    "Telli Kılıç",
    "./img/indir (1).jpeg",
    "./music/Yoresel-Muzikler-Sivas-Sen-Sivasi-Seyret.mp3"
  ),
];
