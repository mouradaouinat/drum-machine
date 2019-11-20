const sounds = [
  {
    id: 0,
    key: "65",
    kbd: "A",
    src: "/sounds/clap.wav",
    playing: false
  },
  {
    id: 1,
    key: "83",
    kbd: "S",
    src: "/sounds/hihat.wav",
    playing: false
  },
  {
    id: 2,
    key: "68",
    kbd: "D",
    src: "/sounds/kick.wav",
    playing: false
  },
  {
    id: 3,
    key: "70",
    kbd: "F",
    src: "/sounds/openhat.wav",
    playing: false
  },
  {
    id: 4,
    key: "71",
    kbd: "G",
    src: "/sounds/boom.wav",
    playing: false
  },
  {
    id: 5,
    key: "72",
    kbd: "H",
    src: "/sounds/ride.wav",
    playing: false
  },
  {
    id: 6,
    key: "74",
    kbd: "J",
    src: "/sounds/snare.wav",
    playing: false
  },
  {
    id: 7,
    key: "75",
    kbd: "K",
    src: "/sounds/tom.wav",
    playing: false
  },
  {
    id: 8,
    key: "76",
    kbd: "L",
    src: "/sounds/tink.wav",
    playing: false
  }
];

export function getSounds() {
  return sounds;
}
