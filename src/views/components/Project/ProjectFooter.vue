<template>
  <div id="api-_footer" class="show-api-article show-api-_-article" v-html="content"/>
</template>


<script setup>
import {ref} from 'vue'

const props = defineProps({
  footer: {type: Object},
})
const content = props.footer?.content || ''
</script>

<style scoped>
</style>
