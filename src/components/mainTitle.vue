<template>
  <h1 class="mainTitleText">{{ text }}</h1>
</template>

<script>
export default {
    props: {
        text: String
    }
}
</script>

<style>
    .mainTitleText {
        font-family: 'Raleway', sans-serif;
        font-size: 38pt;
        color: #e8e2d9;
        text-align: center;
        margin: 0;
        padding: 0;
    }
</style>