import {ref, computed} from 'vue'

export default function useApiArticle() {
  const articles = ref([])
  const current = ref({group: '', name: '', version: ''})
  const buildCurrent = (group, name, version) => {
    return {group: group || '', name: name || '', version: version || ''}
  }
  const getArticle = (list, find) => {
    const _group = find.group || ''
    const _name = find.name || ''
    const _version = find.version || ''
    // current.value = {
    //   group: _group, name: _name, version: _version
    // }
    articles.value = list.value.filter((x, index) => {
      return x.group == _group && x.name == _name
    })
  }

  return {
    articles,
    current,
    buildCurrent,
    getArticle
  }
}
