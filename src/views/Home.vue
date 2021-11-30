<template>
  <div class="schach_background">

    <div class="schach_navigation-container">
      <div class="schach_nav-item-container first-item">
        <a class="schach_nav-item" href="schach">Play</a>
      </div>

      <div class="schach_nav-item-container">
        <a class="schach_nav-item" href="about">About Chess</a>
      </div>
    </div>

    <!-- Workaround for Autoplay not working in Chrome and Firefox -->
    <audio controls loop class="schach_audio" id="audioID">
      <source src="../assets/audio/queens_gambit_main_theme.mp3" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio>

  </div>
</template>

<script>
// @ is an alias to /src
/// Workaround for Autoplay not working in Chrome and Firefox
document.addEventListener('click', playMusic);
function playMusic() {
  document.getElementById("audioID").play();
  document.removeEventListener('click', playMusic);
}
export default {
  name: 'Home',
}
</script>

<style lang="less">
.schach_background {
  background-image: url("../assets/images/background.webp");
  background-size: cover;
  text-align: center;
  position:fixed;
  padding:0;
  margin:0;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
}

@media screen and (max-width: 1168px){
  .schach_background {
    background-image: url("../assets/images/background2.webp");
  }
}

.schach_navigation-container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 93vh;
  flex-direction: column;
}

.schach_first-item {

}
.schach_nav-item-container {
  border-radius: 25px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-style: solid;
  border-color: whitesmoke;
  color: whitesmoke;
  height: 2em;
  width: 8em;
  text-align: center;
  font-weight: 700;
  text-shadow: 0 2px 0 rgba(0, 0, 0, 0.25);
  font-size: 2rem;
  margin-bottom: 1em;
  &:hover {
    border-color: transparent;
  }
}



.schach_nav-item {
  text-decoration: none;
  color: whitesmoke !important;
  filter: grayscale(30%);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 15px;
  transition: transform 0.5s ease;
  background-size: 100%;
  background-position: center;
  height: 100%;
  width: 100%;
  &:hover {
    transform: scale(1.2);
  }
}

.schach_banner-one {
  background-image: url("../assets/images/play-banner.webp");
}

.schach_audio {
  display: none;
}

</style>