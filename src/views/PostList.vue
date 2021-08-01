<template>
  <div class="post-list">
    <transition-group name="list">
    <div v-for="post in orderedPost" :key="post.id">
      <SinglePost :post="post" />
    </div>
    </transition-group>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue';
import SinglePost from '@/views/SinglePost.vue'
import OrderTerm from '@/interfaces/OrderTerm';
import Post from '@/interfaces/Post';

export default defineComponent({
 
  props: {
    posts: {
      type: Array as PropType<Post[]>,
      required: true
    },
    order: {
      type: String as PropType<OrderTerm>,
      required: true
    }
  },
   components: { SinglePost },
    setup(props) {
    const orderedPost = computed(() => {
      return [...props.posts].sort((a: Post, b: Post) => {
        return a[props.order] > b[props.order] ? 1 : -1
      })
    })

    return { orderedPost }
  },
});
</script>
<style scoped>
  .post {
    margin: 41px 0px;
    border-bottom: solid 1px #dfdfdf;
    text-align: left;
  }
  button {
    margin: 0 10px;
    color: #1195c9;
    border: 3px solid #1195c9;
    background: #d5f0ff;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
  }
  .list-move {
    transition: all 1s;
  }
  </style>