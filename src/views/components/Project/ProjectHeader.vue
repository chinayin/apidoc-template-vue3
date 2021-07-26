<template>
  <div id="api-_header" class="show-api-article show-api-_-article" v-html="content"/>
</template>


<script setup>
import {ref} from 'vue'

const props = defineProps({
  header: {type: Object},
})
const content = props.header?.content || ''
</script>

<style scoped>
</style>
