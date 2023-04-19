<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <profile></profile>
    <education></education>
    <skills></skills>
  </div>
</template>

<script>
import Education from './Education.vue'
import Skills from './Skill.vue'
import Profile from './Profile.vue'
export default {
  components: { Skills, Education, Profile },
  name: 'app',
  data () {
    return {
      msg: 'This is my Vue.js App WCSERVER'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
