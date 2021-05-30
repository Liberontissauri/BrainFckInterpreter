<template>
  <div class="code-input-div">
    <h2 class="code-input-label">Code</h2>
    <textarea class="code-input-text-area" v-model="input_content" @input="changeCode" spellcheck="false"/>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      input_content: "++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++.<<+++++++++++++++.>.+++.------.--------.>+.>."
    }
  },
  methods: {
    changeCode() {
      this.$emit('code-change', this.input_content)
    }
  }
}
</script>

<style>
    .code-input-div {
        display: flex;
        flex-direction: column;
    }
    .code-input-label {
        color: #e8e2d9;
        font-family: 'Raleway', sans-serif;
        font-weight: 400;
        font-size: 20pt;
        text-align: left;
    }
    .code-input-text-area {
        background-color: rgba(0, 0, 0, 0.198);
        color: #e8e2d9;
        font-family: 'Raleway', sans-serif;
        font-size: 17pt;
        padding: 20px;

        height: 100%;

        border: 2px solid #e8e2d9;

        resize: none;
    }
</style>