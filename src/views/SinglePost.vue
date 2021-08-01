<template>
  <div class="post">
    <router-link :to="{ name: 'Details', params: { id: post.id }}">
      <h3>{{ post.title }}</h3>
    </router-link>
    
    <p>{{ snippet }}
      <router-link :to="{ name: 'Details', params: { id: post.id }}">
      more
    </router-link>
    </p>
    <span v-for="tag in post.tags" :key="tag" class="tags">
      #{{ tag }}
    </span>
    
  </div>
</template>

<script lang="ts">
import { defineComponent,computed } from 'vue';

export default defineComponent({
 
 props: ['post'],
  setup(props) {
    const snippet = computed(() => {
      return props.post.body.substring(0, 100) + '...'
    })

    return { snippet }
  }
});
</script>
<style scoped>
.tags{
  color:#1b95e0;
  padding:3px;
}
</style>
