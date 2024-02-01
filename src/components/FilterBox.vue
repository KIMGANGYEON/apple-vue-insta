<template>
  <div  @click="fire" class="filter-item" :class="ab" :style="`background-image:url(${image})`">
    <slot></slot>
    <!-- <button @click="fire">버툰</button> -->
  </div>
  
</template>

<script>
export default {
    name : 'filterboxItme',
    props : {
        image : String,
        ab : Object,
    },
        methods : {
            fire(){
                this.emitter.emit('box',this.ab)
            }
        },
}
</script>

<style>
    .filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color : white;
  background-size: cover;
  background-position : center;
}
</style>