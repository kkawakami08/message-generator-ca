const artist = document.getElementsByTagName("span")[0];
const song = document.getElementsByTagName("h2")[0];

const artistArray = ["Olivia Rodrigo", "Billie Eilish", "Harry Styles"];

const billieSongs = [
  "Bellyache",
  "Ocean Eyes",
  "My Future",
  "When the Party's Over",
  "Oxytocin",
];

const oliviaSongs = [
  "Brutal",
  "Hope U R Ok",
  "1 Step Forward, 3 Steps Back",
  "Jealousy Jealousy",
  "Happier",
];

const harrySongs = [
  "Fine Line",
  "Sign of the Times",
  "As It Was",
  "Late Night Talking",
  "Golden",
];

const songGenerator = (artistArray) => {
  //let randomArtist = Math.round(Math.random() * 2);
  let randomArtist = 0;
  let randomSong = Math.round(Math.random() * 4);
  switch (randomArtist) {
    case 0:
      artist.textContent = "Olivia Rodrigo";
      switch (randomSong) {
        case 0:
          song.textContent = oliviaSongs[0];
          break;
        case 1:
          song.textContent = oliviaSongs[1];
          break;
        case 2:
          song.textContent = oliviaSongs[2];
          break;
        case 3:
          song.textContent = oliviaSongs[3];
          break;
        case 4:
          song.textContent = oliviaSongs[4];
          break;
      }
      break;
  }
};

songGenerator(artistArray);
