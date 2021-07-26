<template>
  <nav id="scrollingNav">
    <sidenav-search/>
    <sidenav-list :navs="navs" :articles="articles"/>
  </nav>
</template>


<script setup>
import {ref, provide, inject, reactive} from 'vue'
import {useI18n} from "vue-i18n"
import SidenavSearch from "./SidenavSearch.vue";
import SidenavList from "./SidenavList.vue";

const {t} = useI18n()

const articles = inject('dataApis')
const navs = inject('dataNavs')
</script>

<style scoped>
</style>
