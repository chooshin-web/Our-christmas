const messageBox = document.getElementById("messageBox");
const messageText = document.getElementById("messageText");

function showCharlie() {
  messageText.innerText =
    "Have you ever had that feeling when you can't stop smiling? " +
    "Your heart pounds inside your chest? You try to stand, but your knees become weak? And all of life's possibilities become so clear. - Charlie Brown\n\n" +
    "Just like him, I also feel that way with you, baby.";
  messageBox.style.display = "block";
}

function showRedHair() {
  messageText.innerText =
    "This character is kinda a mean kid and she doesn't really have any good lines, baby. BUT I CAN SAY I'M YOUR KAKAMPI IN ALL TIMES HWEHEHHE 💙";
  messageBox.style.display = "block";
}
function showBlueGirl() {
  messageText.innerText =
    "I like the compassion you showed for your sister at the talent show. The honesty you had at the assembly. And at the dance, you were brave and funny. " +
    "And what you did for me, doing the book report while I was away, was so sweet of you. " +
    "- Little Red-Haired Girl\n\n" +
    "Yes, you're more than what you think you are, baby. You're the most amazing girlfriend in the world. I love everything about you.";
  messageBox.style.display = "block";
}
function goToSnoopy() {
  window.location.href = "snoopy.html";
}
function closeBox() {
  messageBox.style.display = "none";
}
