<template>
  <div class="home">
     <div v-if="error">{{ error }}</div>
    <div v-if="posts.length"  class="layout">
      <PostList :posts="posts" :order="order" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
     <div class="order">
        <button @click="handleClick('title')">Order by title</button>
        <button @click="handleClick('id')">Order by id</button>
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import PostList from '@/views/PostList.vue'; // @ is an alias to /src
import Spinner from '@/components/Spinner.vue'
import TagCloud from '@/components/TagCloud.vue'
import getPosts from '@/api/getPosts'
import OrderTerm from '@/interfaces/OrderTerm';

export default defineComponent({
  name: 'Home',
  components: {
    PostList, Spinner, TagCloud
  },
  setup() { 
    const { posts, error, load } = getPosts()

    load()
    const order = ref<OrderTerm>('id')

    const handleClick = (term: OrderTerm) => {
      order.value = term
    }
    
    return { posts, error, order, handleClick }
  },
});
</script>
<style>
  .home {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }
  .layout {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 20px;
  }
</style>