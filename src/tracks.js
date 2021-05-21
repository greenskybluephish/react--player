import imgSrc from "./assets/artwork.jpg";
import imgSrc2 from "./assets/artwork2.jpg";
import imgSrc3 from "./assets/artwork3.jpg";
import cali from "./assets/cali-wataboi.mp3";
import fifty from "./assets/50-tobylane.mp3";
import iwonder from "./assets/iwonder-dreamheaven.mp3";

// All of these artists are at https://pixabay.com/music/search/mood/laid%20back/
export default [
  {
    title: "Rising Sun",
    artist: "Airshow",
    audioSrc:
      "https://archive.org/download/AIRSHOW2021-04-09/2021.04.09/03%20Rising%20Sun.mp3",
    image:
      "https://archive.org/download/AIRSHOW2021-04-09/2021.04.09/IMG_0937.JPG",
    color: "#00aeb0"
  },
  {
    title: "50",
    artist: "tobylane",
    audioSrc: fifty,
    image: imgSrc2,
    color: "#ffb77a"
  },
  {
    title: "I Wonder",
    artist: "DreamHeaven",
    audioSrc: iwonder,
    image: imgSrc3,
    color: "#5f9fff"
  }
];
