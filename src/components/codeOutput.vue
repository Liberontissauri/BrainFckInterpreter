<template>
  <div class="code-output-div">
    <h2 class="code-output-label">Output</h2>
    <textarea class="code-output-text-area" spellcheck="false" v-bind:value="text" readonly></textarea>
  </div>
</template>

<script>
export default {
    props: {
        text: String
    }
}
</script>

<style>
    .code-output-div {
        display: flex;
        flex-direction: column;
    }
    .code-output-label {
        color: #e8e2d9;
        font-family: 'Raleway', sans-serif;
        font-weight: 400;
        font-size: 20pt;
        text-align: left;
    }
    .code-output-text-area {
        background-color: rgba(0, 0, 0, 0.198);
        color: #e8e2d9b6;
        font-family: 'Raleway', sans-serif;
        font-size: 17pt;
        padding: 20px;

        height: 100%;

        border: 2px solid #e8e2d9;

        resize: none;
    }
</style>