<template>
  <div class="navbar-div">
    <ul class="navbar-ul">
        <li><a @click="$router.push('/')">Home</a></li>
        <li><a @click="$router.push('interpreter')">Interpreter</a></li>
        <li><a @click="$router.push('about')">about</a></li>
        <li><a target="_blank" href="https://github.com/Liberontissauri/BrainFckInterpreter">github</a></li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .navbar-div {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        position: absolute;
        top: 0;

        width: 100%;
        height: 100px;
    }
    .navbar-ul {
        list-style-type: none;
        display: flex;
        flex-direction: row;
        padding:  0 40px;
    }
    .navbar-ul a {
        margin: 20px;
        font-family: 'Raleway', sans-serif;
        font-size: 20pt;
        text-decoration: none;
        color: #e8e2d9;
        transition: color ease-in 0.1s;
    }
    .navbar-ul a:hover {
        cursor: pointer;
        color: #e8e2d9cc;
    }


    @media screen and (max-width: 600px) {
        .navbar-ul {

            padding:  0;
        }
        .navbar-ul a {
            font-size: 15pt;
        }
        .navbar-div {
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: 0;

            width: 100%;
            height: 100px;
        }
    }
</style>