<template>
  <div class="container-fluid">
    <div class="row">
      <div id="sidenav" class="span2">
        <sidenav-app/>
      </div>
      <div id="content">
        <router-view/>
      </div>
    </div>
  </div>
  <!--  <Loading v-if="loading"/>-->
</template>

<script setup>
import {ref, provide, reactive, onMounted} from 'vue'
import {SidenavApp, ProjectApp} from './components'
import useLoading from "/@/composables/useLoading"
import useApiProject from '/@/composables/useApiProject'
import useApiData from "/@/composables/useApiData"

// loading
const {loading, setLoading} = useLoading()
// project data
const {
  project,
  projectTransform
} = useApiProject()
// api data
const {
  dataApis,
  dataVersions,
  dataGroups,
  dataNavs, dataTransform
} = useApiData()

// provide
provide('project', project)
provide('dataApis', dataApis)
provide('dataGroups', dataGroups)
provide('dataVersions', dataVersions)
provide('dataNavs', dataNavs)

onMounted(() => {
  projectTransform()
  dataTransform()
})
</script>

<style scoped>
</style>
