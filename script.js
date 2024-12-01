document.addEventListener("DOMContentLoaded", function () {
  const videoContainer = document.querySelector(".video-container");
  const iframe = document.querySelector("#video");

  iframe.addEventListener("load", function () {
    setTimeout(() => {
      videoContainer.classList.add("loaded");
    }, 1000); // Add a small delay to ensure smooth transition
  });
});
