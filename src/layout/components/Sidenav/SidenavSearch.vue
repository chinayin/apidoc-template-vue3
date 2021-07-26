<template>
  <div class="sidenav-search">
    <input class="form-control search" type="text" :placeholder="t('filter')+`...`">
    <span class="search-reset">x</span>
  </div>
</template>


<script setup>
import {ref} from 'vue'
import {useI18n} from "vue-i18n"

const {t} = useI18n()
</script>

<style scoped>
</style>
