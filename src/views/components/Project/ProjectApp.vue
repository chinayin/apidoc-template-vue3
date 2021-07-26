<template>
  <div id="project">
    <project-title :project="project" :versions="versions"/>
  </div>
  <div id="header" v-if="project?.header">
    <project-header :header="project.header"/>
  </div>
  <div id="sections">
  </div>
  <div id="footer" v-if="project?.footer">
    <project-footer :footer="project.footer"/>
  </div>
  <div id="generator">
    <project-generator :project="project"/>
  </div>
</template>

<script setup>
import {ref, provide, inject, onMounted} from 'vue'
import ProjectTitle from "./ProjectTitle.vue"
import ProjectGenerator from "./ProjectGenerator.vue"
import ProjectHeader from "./ProjectHeader.vue";
import ProjectFooter from "./ProjectFooter.vue";

const project = inject('project')
const versions = inject('dataVersions')
</script>

<style scoped>
</style>
