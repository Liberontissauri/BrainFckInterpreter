<template>
  <div class="background-black">
    <navBar></navBar>
    <div id="title-div">
      <main-title text="BrainFuck"/>
      <main-title id="bottom-title" text="Interpreter"/>
      <brainButton id="start-button" text="Start Coding"/>
    </div>
    
  </div>
</template>

<script>
import mainTitle from "../components/mainTitle"
import navBar from "../components/navBar"
import brainButton from "../components/brainButton"


export default {
  name: 'Home',
  components: {
    mainTitle,
    navBar,
    brainButton
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;0,500;0,700;1,500;1,700&display=swap');

  html, body, .background-black {
    min-width: 100%;
    min-height: 100%;
    background-color: #23221f;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  #bottom-title {
    position: relative;
    bottom: 0.5rem;
  }

  .title-div {

  }

  #start-button {
    position: relative;
    top: 19vh
  }
</style>