const correctPassword = "100122"; // CHANGE TO YOUR ANNIVERSARY
const letterText =
`My love,

If Snoopy were sitting here with his typewriter,
I think this is what he would say…( in the movie snoopy is writing his love story)

Every day with you feels like a small miracle.
You make ordinary moments feel warm,
safe, and meaningful.

I don’t need perfect days,
I just need you.
In every version of my future,
it’s always you.

My baby, We've been through a lot of things
and every situations that we're in
Im glad that you're with me
I hope this christmas and small website that can bring a smile to your face

I will forever be here with you, wife ko
Let's make this christmas fun and filled with love
ikaw at ako palagi, ella ko

I love you always, my baby!
`;

// TYPEWRITER VARIABLES
let index = 0;

// MEMORY PHOTOS
const photos = [
  "Us/us1.jpg",
  "Us/us2.jpg",
   "Us/us3.jpg",
   "Us/us4.jpg",
   "Us/us5.jpg"
];

let photoIndex = 0;
let side = "left";

// PASSWORD CHECK
function checkPassword() {
  const input = document.getElementById("password").value;
  if (input === correctPassword) {
    document.querySelector(".password-box").style.display = "none";
    typeLetter(); // 🔥 STARTS TYPEWRITER
  } else {
    alert("Hmm… that’s not our password 🤍");
  }
}

// TYPEWRITER EFFECT (THIS IS THE MAIN PART)
function typeLetter() {
  if (index < letterText.length) {
    document.getElementById("letter").innerHTML += letterText.charAt(index);
    index++;

    // Show photo every 40 characters
    if (index % 40 === 0 && photoIndex < photos.length) {
      showMemory();
    }

    setTimeout(typeLetter, 40);
  }
}

// SHOW MEMORY PHOTOS
function showMemory() {
  const img = document.createElement("img");
  img.src = photos[photoIndex];
  img.classList.add("memory", side);

  document.body.appendChild(img);

  side = side === "left" ? "right" : "left";
  photoIndex++;
}

// MUSIC TOGGLE
function toggleMusic() {
  const music = document.getElementById("bgMusic");
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}