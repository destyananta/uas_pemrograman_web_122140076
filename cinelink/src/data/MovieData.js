// src/data/moviesData.js
import avangersImg from '../assets/avangersendgame.png';
import spiderManImg from '../assets/spidermannowayhome.png';
import theBatmanImg from '../assets/thebatman.png';
import missionImpossibleImg from '../assets/tomcruise.png';
import blackWidowImg from '../assets/blackwidow.png';
import shangChiImg from '../assets/shangchi.png';
import suicideSquadImg from '../assets/suicidesquad.png';
import jungleCruiseImg from '../assets/junglecruise.png';
import ff9Img from '../assets/ff9.png';
import quietPlace2Img from '../assets/aquietplace2.png';

const movies = [
  {
    id: 1,
    title: "Avangers: Endgame",
    genre: "Action",
    duration: "180 min",
    synopsis:
      "Avengers: Endgame adalah film superhero yang mengisahkan para pahlawan super mencoba menyelamatkan dunia dari ancaman besar.",
    schedule: ["13:00", "16:00", "19:00"],
    image: avangersImg,
  },
  {
    id: 2,
    title: "Spider-Man: No Way Home",
    genre: "Action",
    duration: "148 min",
    synopsis:
      "Spider-Man: No Way Home mengisahkan Spider-Man yang harus menghadapi tantangan baru dalam menjaga keamanan dunia.",
    schedule: ["14:00", "17:00", "20:00"],
    image: spiderManImg,
  },
  {
    id: 3,
    title: "The Batman",
    genre: "Crime",
    duration: "176 min",
    synopsis:
      "The Batman menceritakan kisah Bruce Wayne sebagai The Batman, yang berjuang untuk memburu seorang pembunuh berantai di Gotham City.",
    schedule: ["15:00", "18:00", "21:00"],
    image: theBatmanImg,
  },
  {
    id: 4,
    title: "Mission: Impossible - Fallout",
    genre: "Action",
    duration: "148 min",
    synopsis: "Mission Impossible yang menegangkan dengan aksi Tom Cruise.",
    schedule: ["14:00", "17:00", "20:00"],
    image: missionImpossibleImg,
  },
  {
    id: 5,
    title: "Black Widow",
    genre: "Action",
    duration: "140 min",
    synopsis: "Black Widow menghadirkan kisah Natasha Romanoff.",
    schedule: ["13:00", "16:00", "19:00"],
    image: blackWidowImg,
  },
  {
    id: 6,
    title: "Shang-Chi and the Legend of the Ten Rings",
    genre: "Action",
    duration: "132 min",
    synopsis: "Shang-Chi berjuang dengan legenda dan kekuatan luar biasa.",
    schedule: ["15:00", "18:00", "21:00"],
    image: shangChiImg,
  },
  {
    id: 7,
    title: "The Suicide Squad",
    genre: "Action",
    duration: "132 min",
    synopsis: "The Suicide Squad dengan karakter-karakter unik.",
    schedule: ["14:00", "17:00", "20:00"],
    image: suicideSquadImg,
  },
  {
    id: 8,
    title: "Jungle Cruise",
    genre: "Adventure",
    duration: "127 min",
    synopsis: "Petualangan seru di Jungle Cruise.",
    schedule: ["13:00", "16:00", "19:00"],
    image: jungleCruiseImg,
  },
  {
    id: 9,
    title: "Fast & Furious 9",
    genre: "Action",
    duration: "143 min",
    synopsis: "Aksi balap seru dan penuh drama di Fast & Furious 9.",
    schedule: ["15:00", "18:00", "21:00"],
    image: ff9Img,
  },
  {
    id: 10,
    title: "A Quiet Place Part II",
    genre: "Horror",
    duration: "97 min",
    synopsis: "Lanjutan menegangkan dari A Quiet Place.",
    schedule: ["14:00", "17:00", "20:00"],
    image: quietPlace2Img,
  },
];

export default movies;
