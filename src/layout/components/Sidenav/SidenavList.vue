<template>
  <ul class="sidenav nav nav-list list">
    <template v-for="item in navs">
      <li v-if="item.isHeader"
          class="nav-header nav-list-item"
          :class="{ 'nav-fixed': item.isFixed, 'navbar-btn': item.isFixed }"
      >
        <a @click="onClickHeaderTitle" class="show-api">{{ underscoreToSpace(item.title) }}</a>
      </li>
      <li v-else
          class=""
          :class="{ hide: item.hidden }"
      >
        <router-link
          :to="{name:'article',params:{group:item.group,name:item.name}}"
          class="nav-list-item show-api">{{ item.title }}
          <div class="nav-list-url-item hide">{{ item.url }}</div>
        </router-link>
      </li>
    </template>

    <!--    {{#each nav}}-->
    <!--    {{#if title}}-->
    <!--    {{#if isHeader}}-->
    <!--    {{#if isFixed}}-->
    <!--    <li class="nav-fixed nav-header navbar-btn nav-list-item" data-group="{{group}}"><a href="#api-{{group}}" data-name="show-api-{{group}}" class="show-api api-{{group}}-init">{{underscoreToSpace title}}</a></li>-->
    <!--    {{else}}-->
    <!--    <li class="nav-header nav-list-item" data-group="{{group}}"><a href="#api-{{group}}" data-group="show-api-{{group}}" class="show-group api-{{group}}-init">{{underscoreToSpace title}}</a></li>-->
    <!--    {{/if}}-->
    <!--    {{else}}-->
    <!--    <li class="{{#if hidden}}hide {{/if}}" data-group="{{group}}" data-name="{{name}}" data-version="{{version}}">-->
    <!--      <a href="#api-{{group}}-{{name}}" title="{{url}}" data-group="show-api-{{group}}" data-name="show-api-{{group}}-{{name}}" class="nav-list-item show-api api-{{group}}-{{name}}-init">{{title}}<div class="nav-list-url-item hide">{{url}}</div></a>-->
    <!--    </li>-->
    <!--    {{/if}}-->
    <!--    {{/if}}-->
    <!--    {{/each}}-->


  </ul>
</template>


<script setup>
import {ref, inject, reactive, withDefaults} from 'vue'
import {underscoreToSpace} from '/@/libs/utils/tpl'

const props = defineProps({
  articles: {type: Array},
  navs: {type: Array},
})
// const emit = defineEmits(['change'])
// const click = (v) => {
//   emit('change', v.group, v.name, v.version)
// }

const onClickHeaderTitle = () => {
  return false
}

</script>

<style scoped>
</style>
