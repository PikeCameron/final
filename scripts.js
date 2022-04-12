window.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".menu-icon").addEventListener("click", () => {
      document.querySelector(".main-menu").classList.toggle("menu-show");
  });
});

function toggleMute() {

    var video=document.getElementById("myVideo")
    
    if(video.muted){
        video.muted = false;
    } else {
        video.muted = true;
    }
    
    }