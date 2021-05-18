<template>
  <button class="brainButton">
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: String
  }
}
</script>

<style>
    .brainButton {
      width: 26rem;
      height: 4.5rem;

      background-color: rgba(0, 0, 0, 0);
      border: 4px solid #e8e2d9;

      color: #e8e2d9;
      font-family: 'Raleway', sans-serif;
      font-size: 22pt;

      transition: background-color ease-in 0.15s, color ease-in 0.15s;
      transition-delay: 0.05s;
    }
    .brainButton:hover {
      cursor: pointer;
      background-color: #e8e2d9;
      color: #23221f;
    }
</style>