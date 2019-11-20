const sounds = [
  {
    id: 0,
    key: "81",
    kbd: "Q",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    playing: false,
    name: "Heater 1"
  },
  {
    id: 1,
    key: "87",
    kbd: "W",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    playing: false,
    name: "Disc"
  },
  {
    id: 2,
    key: "69",
    kbd: "E",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    playing: false,
    name: "kick N Hat"
  },
  {
    id: 3,
    key: "65",
    kbd: "A",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
    playing: false,
    name: "Chord 1"
  },
  {
    id: 4,
    key: "83",
    kbd: "S",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
    playing: false,
    name: "Give Us a Light"
  },
  {
    id: 5,
    key: "68",
    kbd: "D",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
    playing: false,
    name: "Dry"
  },
  {
    id: 6,
    key: "90",
    kbd: "Z",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
    playing: false,
    name: "Bold"
  },
  {
    id: 7,
    key: "88",
    kbd: "X",
    src: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
    playing: false,
    name: "Punchy Kick"
  },
  {
    id: 8,
    key: "67",
    kbd: "C",
    src: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
    playing: false,
    name: "Side Stick"
  }
];

export function getSounds() {
  return sounds;
}
