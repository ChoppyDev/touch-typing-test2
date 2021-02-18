<template>
  <div class="text-input-wrapper">
    <ul class="word-list">
  <li class="word" v-for="word in wordArray" :key="word.index">
    {{ word }}
  </li>
</ul>
    <input class="word-input" v-model="word" type="text" name="text input" id="" v-on:keyup.space="onSpace">
    <p v-bind:points="points">{{points}} points</p>
  </div>
</template>

<script>
//import {generateList} from "../../../scripts/Words"
import {WordManager} from "../../../scripts/Words"
export default {
  name : 'WordList',
  created() {
    this.wordManager = new WordManager(20);
    this.wordArray = this.wordManager.wordlist;
    this.points = this.wordManager.points;
    //console.log(wordManager)
    console.log(this.wordManager.wordlist)
  },
  data() {
    return {
      word: null,
      wordManager: null,
      wordArray: null,
      points: null
    };
  },
  methods : {
    onSpace(){
      this.wordManager.compareWord(this.word)
      this.points = this.wordManager.points
      console.log(this.wordManager.wordlist)
      this.word = ""
    } 
  }
}
</script>

<style>
  .text-input-wrapper {
    border: solid 1px black;
    background-color: #B3F1FA;
  }
  @import './../../../assets/css/main.css';

</style>