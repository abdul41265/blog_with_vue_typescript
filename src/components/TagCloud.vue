<template>
  <div class="tag-cloud">
    <h3>Tags</h3>
    <div v-for="tag in tags" :key="tag">
      <router-link :to="{ name: 'Tag', params: { tag }}">
        #{{tag}}
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useTags from '@/api/useTags'

export default defineComponent({
 setup(props) {
    const { tags } = useTags(props.posts)

    return { tags }
  },
  props: ['posts']
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .tag-cloud {
    margin-top: 15px;
    margin-left: 20px;
    padding: 20px;
    background-color: #f5f8fa;
    border-radius: 20px;
  }
  .tag-cloud h3 {
    border-bottom: 1px solid #eee;
    padding: 16px 8px;
    color: #444;
  }
  .tag-cloud div {
    display: inline-block;
    padding: 10px;
  }
  .tag-cloud a {
    color: #1b95e0;;
    text-decoration: none;
    border-bottom: solid 1px;
  }
  .tag-cloud a.router-link-active {
    color: #551a8b;
    font-weight: bold;
  }
</style>
