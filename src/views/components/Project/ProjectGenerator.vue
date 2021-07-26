<template>
  <div class="content" v-if="project.template?.withGenerator">
    {{ t('generated_with') }} <a target="_blank" :href="project.generator.url">{{ project.generator.name }}</a>
    (<a target="_blank" href="https://github.com/chinayin/apidoc-template-vue3"> apidoc-template-vue3 </a>)
    {{ project.generator.version }} ({{ project.generator.time }})
  </div>
</template>

<script setup>
import {ref} from 'vue'
import {useI18n} from "vue-i18n"

const {t} = useI18n()

const props = defineProps({
  project: {type: Object},
})
</script>

<style scoped>
</style>
