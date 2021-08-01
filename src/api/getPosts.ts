import Post from '@/interfaces/Post'
import { ref } from 'vue'

const getPosts = () => {

  const posts = ref<Post[]>([])
  const error = ref(null)

  const load = async () => {
    try {
      // simulate delay
      await new Promise(resolve => {
        setTimeout(resolve, 2000)
      })

      const data = await fetch('http://localhost:3000/posts')
      if(!data.ok) {
        throw Error('no available data')
      }
      posts.value = await data.json()
    }
    catch(err) {
      error.value = err.message
    }
  }

  return { posts, error, load }
}

export default getPosts