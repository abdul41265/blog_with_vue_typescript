import Post from '@/interfaces/Post'
import { ref } from 'vue'

const getPost = (id:number) => {

  const post = ref<Post>()
  const error = ref(null)

  const load = async () => {
    try {
      // simulate delay
      await new Promise(resolve => {
        setTimeout(resolve, 2000)
      })

      const data = await fetch('http://localhost:3000/posts/' + id)
      if (!data.ok) {
        throw Error('That post does not exist')
      }
      post.value =  await data.json()
    }
    catch(err) {
      error.value = err.message
    }
  }

  return { post, error, load } 
}

export default getPost