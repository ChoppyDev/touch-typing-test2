<template>
  <div id="app">
    <Template></Template>
    <WordList></WordList>
  </div>
</template>

<script>
import Template from './components/Layout/Template'
import WordList from './components/Layout/TextInput/WordList'

export default {
  name: 'App',
  components: {
    Template,
    WordList
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
