import {ref} from 'vue'
import {_} from 'lodash'
import {semver} from 'semver'
import {fetchApiData} from '../api/apidoc'
import useLoading from './useLoading'
import {nl2br, toLowerCase} from "../libs/utils/tpl";

export default function useApiData() {
  const dataApis = ref([])
  const dataGroups = ref([])
  const dataGroupTitles = ref({})
  const dataVersions = ref([])
  const dataNavs = ref([])

  const dataTransform = async () => {
    const {loading, setLoading} = useLoading();

    const api = await fetchApiData()

    // grouped by group
    const apiByGroup = _.groupBy(api, (entry) => {
      return entry.group
    })

    // grouped by group and name
    const apiByGroupAndName = {}
    Object.keys(apiByGroup).forEach((key, index) => {
      let entries = apiByGroup[key]
      apiByGroupAndName[key] = _.groupBy(entries, function (entry) {
        return entry.name
      })
    })

    //
    // sort api within a group by title ASC and custom order
    //
    const newList = []
    const umlauts = {'ä': 'ae', 'ü': 'ue', 'ö': 'oe', 'ß': 'ss'} // TODO: remove in version 1.0

    Object.keys(apiByGroupAndName).forEach((index) => {
      let groupEntries = apiByGroupAndName[index]
      // get titles from the first entry of group[].name[] (name has versioning)
      let titles = []
      Object.keys(groupEntries).forEach((titleName) => {
        let entries = groupEntries[titleName]
        let title = entries[0].title
        if (title !== undefined) {
          title.toLowerCase().replace(/[äöüß]/g, function ($0) {
            return umlauts[$0]
          })
          titles.push(title + '#~#' + titleName) // '#~#' keep reference to titleName after sorting
        }
      })
      // sort by name ASC
      titles.sort()

      // custom order
      // if (apiProject.order)
      //   titles = sortByOrder(titles, apiProject.order, '#~#')

      // add single elements to the new list
      titles.forEach((name) => {
        let values = name.split('#~#')
        let key = values[1]
        groupEntries[key].forEach((entry) => {
          // 循环处理数据
          // entry.description = nl2br(entry.description)
          // entry.type = toLowerCase(article.type)
          newList.push(entry)
        })
      })
    })

    //
    // Group- and Versionlists
    //
    let apiGroups = {}
    let apiGroupTitles = {}
    let apiVersions = {}
    //apiVersions[apiProject.version] = 1
    Object.keys(newList).forEach((index) => {
      const entry = newList[index]
      apiGroups[entry.group] = 1
      apiGroupTitles[entry.group] = entry.groupTitle || entry.group
      apiVersions[entry.version] = 1
    })

    // sort groups
    apiGroups = Object.keys(apiGroups)
    apiGroups.sort()
    // custom order
    // if (apiProject.order)
    //   apiGroups = sortByOrder(apiGroups, apiProject.order)
    // sort versions DESC
    apiVersions = Object.keys(apiVersions)
    apiVersions.sort(semver)
    apiVersions.reverse()

    //
    // create Navigationlist
    //
    const nav = []
    apiGroups.forEach((group) => {
      // Mainmenu entry
      nav.push({
        group: group,
        isHeader: true,
        title: apiGroupTitles[group]
      })
      // Submenu
      let oldName = ''
      api.forEach((entry) => {
        if (entry.group === group) {
          if (oldName !== entry.name) {
            nav.push({
              title: entry.title,
              group: group,
              name: entry.name,
              type: entry.type,
              version: entry.version,
              url: entry.url
            })
          } else {
            nav.push({
              title: entry.title,
              group: group,
              hidden: true,
              name: entry.name,
              type: entry.type,
              version: entry.version,
              url: entry.url
            })
          }
          oldName = entry.name
        }
      })
    })

    // console.log('apiGroups', apiGroups)
    // console.log('apiGroupTitles', apiGroupTitles)
    // console.log('apiVersions', apiVersions)
    // console.log('dataNavs', nav)
    // console.log('dataApis', newList);

    dataApis.value = newList
    dataGroups.value = apiGroups
    dataGroupTitles.value = apiGroupTitles
    dataVersions.value = apiVersions
    dataNavs.value = nav

    setLoading(false)
  }


  return {
    dataApis,
    dataGroups,
    dataGroupTitles,
    dataVersions,
    dataNavs,
    dataTransform,
  }
}
