<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router'
import getPost from '@/api/getPost'

// component imports
import Spinner from '@/components/Spinner.vue'

export default defineComponent({
 
 props: ['id'],
  components: { Spinner },
  setup() {
    const route = useRoute()
    // console.log(route)
    // console.log(route.params)
    const { error, post, load } = getPost(Number(route.params.id))

    load()

    return { error, post }
  },
});
</script>

<style scoped>
  .post {
    max-width: 1200px;
    margin: 0 auto;
  }
  .post p {
    color: #444;
    line-height: 1.5em;
    margin-top: 40px;
  }
  .pre {
    white-space: pre-wrap;
  }
</style>
