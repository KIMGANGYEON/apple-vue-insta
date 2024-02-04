<template>
  <div style="padding : 10px">
  <h4>팔로워</h4>
  <input placeholder="?" @input="search($event.target.value)"/>
  <div class="post-header" v-for="(a, i) in follower" :key = "i">
    <div class="profile" :style="`background-image:url(${a.image})`"></div>
    <span class="profile-name">{{a.name}}</span>
  </div>
</div>

</template>

<script>
import {computed, onMounted,  ref, toRefs, watch} from 'vue';
import axios from 'axios';
import {useStore} from 'vuex';

export default {
    name : 'MyPageItme',
    props : {
        one : Number,
    },
    setup(){
        let follower = ref([]);
        function search(){
            let newFollower = follower.value.filter((a)=>{
                return a.name.indexof() != -1
            });
            follower.value = [...newFollower]
        }
     
        let {one} = toRefs();
        console.log(one.value)
        // let test = reactive({name : 'kim'})
        // test;
    watch(one,()=>{})
    computed
    let store = useStore();
    console.log(store.state.name)

        onMounted(()=>{
             axios.get('/follower.json').then((a)=>{
                follower.value = a.data
        })
        })

       

        return {follower, search}
    }
    
}
</script>

<style>

</style>