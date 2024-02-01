<template>
 <div class="header">
    <ul class="header-button-left">
      <li @click="step = 0">Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step == 1" @click="step++">Next</li>
      <li v-if="step == 2" @click="publish">upload</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <h4>hello {{$store.state.name}}</h4>
  <button @click="$store.state.name = 'park' ">push</button>

  <Container @write="read = $event" :insta="insta" :step="step" :image="image"/>
  <button @click="more">more</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
 </div>

 <!-- <div v-if="step == 0">1</div>
 <div v-if="step == 1">2</div>
 <div v-if="step == 2">3</div>
 <button @click="step = 0">1</button>
 <button @click="step = 1">2</button>
 <button @click="step = 2">3</button> -->

 
  
</template>

<script>

import Container from './components/Container.vue'
import postdata from './assets/postdata.js'
import axios from 'axios'
// axios.post()


export default {
  name: 'App',
  data(){
    return{
      insta : postdata,
      count : 0,
      step : 0,
      image : '',
      read : '',
      cho : '',
    }
  },
    mounted(){
    this.emitter.on('box', (a)=> {
      this.cho = a
      
 
    });
  },
  components: {
    Container : Container,
  },
  methods : {
    
    more(){
      axios.get(`https://codingapple1.github.io/vue/more${this.count}.json`)
      .then((result) => {
        console.log(result)
        this.insta.push(result.data);
        this.count++;
        console.log(this.count)
      })
    },
  upload(e){
    let abc = e.target.files;
    
    let url = URL.createObjectURL(abc[0])
    console.log(url)
    this.image = url
    this.step++;
  },
  publish(){
    var mine = {
      name: "Kim Hyun",
      userImage: "https://picsum.photos/100?random=3",
      postImage: this.image,
      likes: 36,
      date: "May 15",
      liked: false,
      content: this.read,
      filter: this.cho
    }
    this.insta.unshift(mine)
    this.step = 0;
  }
  },
}
</script>

<style>
@import 'style.css';

</style>
