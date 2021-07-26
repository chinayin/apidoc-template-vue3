<template>
  <h2>Query Parameter(s)</h2>
  <table>
    <thead>
    <tr>
      <th style="width: 30%">{{ col ? col : t('field') }}</th>
      <th style="width: 10%" v-if="params[0].type">{{ t('type') }}</th>
      <th :style="{ width: params[0].type?'60%':'70%'  }">{{ t('description') }}</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(field,key) in params.params">
      <td class="code">{{ field.field }}</td>
      <td v-if="field.type">{{ field.type }}</td>
      <td>{{ nl2br(field.description) }}</td>
    </tr>
    </tbody>
  </table>
</template>

<script setup>
import {ref} from 'vue'
import {useI18n} from 'vue-i18n'
import {toLowerCase, nl2br} from '/@/libs/utils/tpl'

const {t} = useI18n()
const props = defineProps({
  section: {type: String, required: true},
  params: {type: Object, required: true},
  // 第一位显示名字
  col: {type: String},
})
</script>

<style scoped>
</style>
