<template>
  <div id="project">
    <project-title :project="project" :versions="versions"/>
  </div>
  <div id="header" v-if="project?.header">
    <project-header :header="project.header"/>
  </div>
  <div id="sections">
    <article-app v-for="(article, index) in articles" :article="article" :project="project" :versions="versions"/>
  </div>
  <div id="footer" v-if="project?.footer">
    <project-footer :footer="project.footer"/>
  </div>
  <div id="generator">
    <project-generator :project="project"/>
  </div>
</template>

<script setup>
import {ref, inject, watch, onUpdated, onMounted} from 'vue'
import {useRouter, useRoute} from 'vue-router'
import useApiArticle from '/@/composables/useApiArticle';
import ProjectTitle from "./components/Project/ProjectTitle.vue"
import ProjectGenerator from "./components/Project/ProjectGenerator.vue"
import ProjectHeader from "./components/Project/ProjectHeader.vue";
import ProjectFooter from "./components/Project/ProjectFooter.vue";
import ArticleApp from './components/Article/ArticleApp.vue';
import Prism from "prismjs";

const route = useRoute()
const {
  articles, current, buildCurrent, getArticle
} = useApiArticle()
console.log('article.init')
const project = inject('project')
const versions = inject('dataVersions')
const dataApis = inject('dataApis')

// 第一次初始化
console.log(111, current.value)
current.value = buildCurrent(route.params.group, route.params.name)
console.log(222, current.value)

onMounted(() => {
  console.log('onMounted', current.value)
  getArticle(dataApis, current)
})
watch(
  () => route.params,
  p => {
    console.log(p)
    current.value = buildCurrent(p.group, p.name)
  }
)
watch(current, (n, o) => {
  // console.log('watch.current', n, o)
  getArticle(dataApis, n)
  console.log('watch.current end')
})
</script>

<style scoped>
</style>
