import {ref} from 'vue'

export default function useLoading() {
  const loading = ref(true)
  const setLoading = (flag) => {
    loading.value = flag
  }
  return {
    loading, setLoading
  }
}
