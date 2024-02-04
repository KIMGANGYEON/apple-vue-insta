<template>
  <div class="post">
    <div class="post-header">
      <div class="profile"></div>
      <span class="profile-name">{{ insta.name }}</span>
    </div>
    <div @click="$store.commit('likeAdd')" :class="insta.filter" class="post-body" :style="{backgroundImage : `url(${insta.postImage})`}"></div>
    <div class="post-content">
      <p>{{ $store.state.likes}} Likes</p>
      <p><strong>글쓴이아이디</strong> 임시내용</p>
      <p>{{ insta.content }}</p>
      <p class="date">May 15</p>
    </div>
</div> 
</template>

<script>
export default {
    name : 'PostItem',

    props : {
      insta : Object,
    }
}
</script>

<style>

</style>