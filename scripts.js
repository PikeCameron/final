window.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".menu-icon").addEventListener("click", () => {
      document.querySelector(".main-menu").classList.toggle("menu-show");
  });
});

var audio = document.getElementById("myVideo");

function playAudio() {
    audio.unmute();
}

function muteAudio() {
    audio.mute();
}