<template>
  <div class="pull-left">
    <h1>{{ project.name }}</h1>
    <h2 v-if="project.description">{{ nl2br(project.description) }}</h2>
  </div>
  <div class="pull-right">
    <div class="btn-group" v-if="project.template?.withCompare">
      <button id="version" class="btn btn-lg btn-default dropdown-toggle" data-toggle="dropdown">
        <strong>{{ project.version }}</strong>&nbsp;<span class="caret"></span>
      </button>
      <ul id="versions" class="dropdown-menu open-left">
        <li><a id="compareAllWithPredecessor" href="#">{{ t('compare_all_with_predecessor') }}</a></li>
        <li class="divider"></li>
        <li class="disabled"><a href="#">{{ t('show_up_to_version') }} </a></li>
        <li class="version" v-for="version in versions"><a href="#">{{ version }}</a></li>
      </ul>
    </div>
    <div id="version2" class="well well-sm" v-else>
      <strong>{{ project.version }}</strong>
    </div>
  </div>
  <div class="clearfix"></div>
</template>

<script setup>
import {ref} from 'vue'
import {useI18n} from "vue-i18n"
import {toLowerCase, nl2br} from '/@/libs/utils/tpl'

const {t} = useI18n()

const props = defineProps({
  project: {type: Object},
  versions: {type: Array},
})
</script>

<style scoped>
</style>
