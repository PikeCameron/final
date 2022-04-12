window.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".menu-icon").addEventListener("click", () => {
      document.querySelector(".main-menu").classList.toggle("menu-show");
  });
});

const videoID = "gHr3Q9tHl5I";

// load JS for API
const tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// grab the mute button
const muteButton = document.querySelector("button.mute");

let player;

// when YT API iframe is ready, this is called
function onYouTubeIframeAPIReady() {
  // create the player
  player = new YT.Player("player", {
    height: "1600",
    width: "900",
    videoId: videoID,
    playerVars: {
      playsinline: 1,
      mute: 1,
      autoplay: 1,
      playlist: videoID,
      loop: 1,
      controls: 0
    },
    events: {
      onReady: () => {
        setupMuteButton();
      }
    }
  });
}

// set up the mute button event listener
const setupMuteButton = () => {
  muteButton.addEventListener("click", () => {
    if (player.isMuted()) {
      player.unMute();
      muteButton.innerText = "Mute";
    } else {
      player.mute();
      muteButton.innerText = "Unmute";
    }
  });
};
