<template>
  <div>
    <PostCard :posts="posts" />
  </div>
</template>

<script>
import PostCard from './components/PostCard.vue'

export default {
  name: 'App',
  components: {
    PostCard
  },
  data() {
    return {
      posts: []
    }
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((dados) => {
        this.posts = dados.slice(0, 10) 
      })
      .catch((error) => {
        console.error(error)
      })
  }
}
</script>

<style scoped></style>