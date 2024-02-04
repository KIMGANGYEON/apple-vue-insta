import axios from 'axios';
import { createStore } from 'vuex'

const store = createStore({
  state(){
    return {
        name : 'kim',
        age : 20,
        likes : 0,
        likecount : false,
        more : {},
    }
  },
  mutations : {
    setMore(state, data){
      state.more = data
    },
    likeAdd(state){
      if(state.likecount == false){
        state.likes++;
        state.likecount = true;
      } else {
        state.likes--;
        state.likecount = false;

      }
    },
    changeName(state){
      state.name = 'park'
    },
    addAge(state, data){
      state.age += data
      // state.age++
    }
  },
  actions : {
    getData(context){
      axios.get('https://codingapple1.github.io/vue/more0.json')
      .then((a)=>{
        context.commit('setMore', a.data)
      })
    }
  }
})

export default store