<template>
  <div class="tag">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <PostList :posts="postsWithTag" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import PostList from '@/views/PostList.vue'; // @ is an alias to /src
import Spinner from '@/components/Spinner.vue'
import TagCloud from '@/components/TagCloud.vue'
import getPosts from '@/api/getPosts'
import { useRoute } from 'vue-router'
import Post from '@/interfaces/Post';

export default defineComponent({
  components: { PostList, Spinner, TagCloud },
  setup() {
    const route = useRoute()
    const { posts, error, load } = getPosts()

    load()

    const postsWithTag = computed(() => {
      return posts.value.filter((p:Post) => p.tags.includes(route.params.tag))
    })

    return { error, posts, postsWithTag }
  }
});
</script>
<style scoped>
   .tag {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }
</style>