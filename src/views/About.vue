<template>
  <div class="background-black">
    <navBar></navBar>
    <div class="paragraph-about-div">
        <h2>What is Brainfuck?</h2>
        <p>BrainF*ck is an Esoteric programming language made by Urban Müller in 1993. 
            It is composed of 8 different instructions and was pruposely made to be hard to read and overcomplicated.</p>
        <h2>What is this website?</h2>
        <p>This website is a brainf*ck interpreter implementation written in typescript. 
            A hello world example is pre-loaded for you to try!</p>
        <h2>Why?</h2>
        <p>For the last couple of months, I have been looking into developing console emulators but,
             since I do not have the knowledge to build one at the present moment, I decided to learn the principles behind building an interpreter whilst learning typescript.</p>
        <h2>Who am I?</h2>
        <p>On the internet, you will usually find me by the name "Liberontissauri", I have been studying software development for the last two years. As of lately, I have been 
            working mainly with javascript, html and css, but I used to write the majority of my code in python.
             Check out my <a class="about-link" target="_blank" href="https://github.com/Liberontissauri/BrainFckInterpreter">github</a> to learn more!</p>
    </div>
  </div>
</template>

<script>
import navBar from "../components/navBar"

export default {
    components: {
        navBar,
    },
}
</script>

<style>
  html, body, .background-black {
    min-width: 100%;
    min-height: 100%;
    background-color: #23221f;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .paragraph-about-div {
    display: flex;
    flex-direction: column;

    width: 60%;
    margin: 0 20%;
    padding-top: 15vh;
    padding-bottom: 20vh
  }
  .paragraph-about-div h2{
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
    font-size: 30pt;
    color: #e8e2d9;
    text-align: left;
  }
  .paragraph-about-div p{
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    font-size: 16pt;
    color: #e8e2d9;
    text-align: left;
  }

  .about-link {
      color: #e8e2d9;
      transition: color ease-in 0.1s;
  }
  .about-link:hover {
        cursor: pointer;
        color: #e8e2d9cc;
    }
</style>