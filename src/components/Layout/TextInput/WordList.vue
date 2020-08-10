<template>
  <div class="text-input-wrapper">
    <input type="text" name="text input" id="" v-on:keyup.space="onSpace">
  </div>
</template>

<script>
import {generateList} from "../../../scripts/Words"
export default {
  name : 'WordList',
  created() {
    console.log(generateList())
  },
  methods : {
    onSpace(){
      console.log("space")
      console.log(this.$el.innerHTML)
    } 
  }
}
</script>

<style>
  .text-input-wrapper {
    border: solid 1px black;
  }
</style>