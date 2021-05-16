<template>
  <div class="background-black">
    <div id="title-div">
      <main-title text="BrainFuck"/>
      <main-title id="bottom-title" text="Interpreter"/>
    </div>
    
  </div>
</template>

<script>
import mainTitle from "../components/mainTitle"


export default {
  name: 'Home',
  components: {
    mainTitle
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
</style>