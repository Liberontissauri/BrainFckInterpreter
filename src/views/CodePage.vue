<template>
  <div class="background-black">
    <navBar></navBar>
    <codeInput id="code-input" v-on:code-change="changeCode"></codeInput>
    <codeOutput id="code-input" :text="output_code"></codeOutput>
    <div id="code-buttons-div">
      <brainButton text="Run" @click="executeCode" class="code-button"> </brainButton>
      <brainButton text="Clear Output" @click="clearOutput" class="code-button"> </brainButton>
    </div>
  </div>
</template>

<script>
import navBar from "../components/navBar"
import codeInput from "../components/codeInput"
import codeOutput from "../components/codeOutput"
import brainButton from "../components/brainButton"
import Interpreter from "../brainfuck"

export default {
    data: function() {
      return {
        input_code: "",
        output_code: ""
      }
    },
    components: {
        navBar,
        codeInput,
        codeOutput,
        brainButton
    },
    methods: {
      changeCode(new_code) {
        this.input_code = new_code;
      },
      executeCode() {
        let brain = new Interpreter(this.addOutput);
        brain.loadCode(this.input_code);
      },
      addOutput(char) {
        this.output_code = this.output_code + char;
      },
      clearOutput() {
        this.output_code = "";
      }
    }
    
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

  #code-input {
      width: 80%;
      max-width: 1200px;
      height: 30vh;
      min-height: 80px;
  }

  #code-buttons-div {
    display: flex;
    flex-direction: row-reverse;
      width: 80%;
      max-width: 1200px;
      min-height: 60px;
      padding: 10px;
  }

  .code-button {
    width: 20%;
    height: 40px;
    font-size: 16pt;
    border-width: 2px;
    margin-right: 20px;
  }
</style>