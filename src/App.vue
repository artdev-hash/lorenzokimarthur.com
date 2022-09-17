<template>
  <img alt="vue" src="./assets/vuejs-icon.svg" width="40" height="40">
  <img alt="gitscm" src="./assets/git-scm-icon.svg" width="40" height="40">
  <img alt="githhub" src="./assets/github-icon.svg" width="40" height="40">
  <img alt="kraken" src="./assets/gitkraken-icon.svg" width="40" height="40">


  <artdev msg="Thank you for visiting"/>
</template>

<script>
import artdev from './components/artdev.vue'

export default {
  name: 'App',
  components: {
    artdev
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
