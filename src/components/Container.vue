<template>
  
    <div v-if="step == 0">
      <Post :insta="insta[i]" v-for="(a,i) in insta" :key="i"/>
    </div>

  <!-- 필터선택페이지 -->
  <div v-if="step == 1">
      <div  :class="cho" class="upload-image" :style="`background-image:url(${image})`"></div>
      <div class="filters">
        <FilterBox v-for="(a, i) in 필터들" :key="i" :image="image" :ab="a">
          {{a}}
          <template v-slot:a></template>
        </FilterBox>
       
      </div>
  </div>

<!-- 글작성페이지 -->
<div :class="cho" v-if="step == 2">
  <div class="upload-image" :style="`background-image:url(${image})`"></div>
  <div class="write">
    <textarea @input="$emit('write', $event.target.value)" class="write-box">write!</textarea>
  </div>
</div>
 
 <div :class="cho" v-if="step == 4">
  <MyPage :one="1"/>
</div>
</template>

<script>
import Post from './Posts.vue'
import FilterBox from './FilterBox.vue'
import MyPage from './MyPage.vue'

export default {
    name : 'ContainerItem',
    data (){
      return{
        필터들 : [ "aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson", 
"inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua", 
"reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"],
      cho : '',
      }
    },
     mounted(){
    this.emitter.on('box', (a)=> {
      this.cho = a
 
    });
  },
    components : {
         Post : Post,
         FilterBox,
         MyPage,

    },
    props : {
        insta : Array,
        step : Number,
        image : String,
    }
}
</script>

<style>
  .upload-image{
width: 100%;
height: 450px;
background: cornflowerblue;
background-size : cover;
}
.filters{
overflow-x:scroll;
white-space: nowrap;
}
.filter-1 {
width: 100px;
height: 100px;
background-color: cornflowerblue;
margin: 10px 10px 10px auto;
padding: 8px;
display: inline-block;
color : white;
background-size: cover;
}
.filters::-webkit-scrollbar {
height: 5px;
}
.filters::-webkit-scrollbar-track {
background: #f1f1f1; 
}
.filters::-webkit-scrollbar-thumb {
background: #888; 
border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
background: #555; 
}
.write-box {
border: none;
width: 90%;
height: 100px;
padding: 15px;
margin: auto;
display: block;
outline: none;
}
</style>