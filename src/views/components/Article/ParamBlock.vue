<template>
  <template v-for="(item,key) in params.fields">
    <h2>{{ key }}</h2>
    <table>
      <thead>
      <tr>
        <th style="width: 30%">{{ col ? col : t('field') }}</th>
        <th style="width: 10%" v-if="item[0].type">{{ t('type') }}</th>
        <th :style="{ width: item[0].type?'60%':'70%'  }">{{ t('description') }}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(field,index) in item">
        <td class="code">
          {{ splitFill(field.field, ".", "&nbsp;&nbsp;") }}
          <span class="label label-optional" v-if="field.optional">{{ t('optional') }}</span>
        </td>
        <td v-if="field.type">{{ field.type }}</td>
        <td>
          <p v-html="nl2br(field.description)"/>
          <p class="default-value" v-if="field.defaultValue">{{ t('default_value') }}
            <code>{{ field.defaultValue }}}</code></p>
          <p class="type-size" v-if="field.size">{{ t('size_range') }} <code>{{ field.size }}}</code></p>
          <p class="type-size" v-if="field.allowedValues">{{ t('allowed_values') }}
            <template v-for="(val,allowedValuesIndex) in allowedValues">
              <code>{{ val }}}</code>
              <template v-if="allowedValuesIndex==allowedValues.length">,</template>
            </template>
          </p>
        </td>
      </tr>
      </tbody>
    </table>
  </template>
  <template v-if="params.examples">
    <ul class="nav nav-tabs nav-tabs-examples">
      <li v-for="(item,index) in params.examples" :class="{ 'active': index==0 }">
        <a :href="`#${section}-examples-11-${index}`">{{ item.title }}</a>
      </li>
    </ul>
    <div class="tab-content">
      <div class="tab-pane" :class="{ 'active': index==0 }" v-for="(item,index) in params.examples"
           :id="`#${section}-examples-11-${index}`"
      >
        <pre :data-type="item.type"><code :class="`language-${item.type}`">{{ item.content }}</code></pre>
      </div>
    </div>
  </template>
  <!--  {{#if params}}-->
  <!--  {{#each params.fields}}-->
  <!--  <h2>{{__ @key}}</h2>-->
  <!--  <table>-->
  <!--    <thead>-->
  <!--    <tr>-->
  <!--      <th style="width: 30%">{{#if ../_col1}}{{__ ../_col1}}{{else}}{{__ "Field"}}{{/if}}</th>-->
  <!--      {{#if ../_hasType}}<th style="width: 10%">{{__ "Type"}}</th>{{/if}}-->
  <!--      <th style="width: {{#if ../_hasType}}60%{{else}}70%{{/if}}">{{__ "Description"}}</th>-->
  <!--    </tr>-->
  <!--    </thead>-->
  <!--    <tbody>-->
  <!--    {{#each this}}-->
  <!--    <tr>-->
  <!--      <td class="code">{{{splitFill field "." "&nbsp;&nbsp;"}}}{{#if optional}} <span class="label label-optional">{{__ "optional"}}</span>{{/if}}</td>-->
  <!--      {{#if ../../_hasType}}-->
  <!--      <td>-->
  <!--        {{{type}}}-->
  <!--      </td>-->
  <!--      {{/if}}-->
  <!--      <td>-->
  <!--        {{{nl2br description}}}-->
  <!--        {{#if defaultValue}}<p class="default-value">{{__ "Default value:"}} <code>{{{defaultValue}}}</code></p>{{/if}}-->
  <!--        {{#if size}}<p class="type-size">{{__ "Size range:"}} <code>{{{size}}}</code></p>{{/if}}-->
  <!--        {{#if allowedValues}}<p class="type-size">{{__ "Allowed values:"}}-->
  <!--        {{#each allowedValues}}-->
  <!--        <code>{{{this}}}</code>{{#unless @last}}, {{/unless}}-->
  <!--        {{/each}}-->
  <!--      </p>-->
  <!--        {{/if}}-->
  <!--      </td>-->
  <!--    </tr>-->
  <!--    {{/each}}-->
  <!--    </tbody>-->
  <!--  </table>-->
  <!--  {{/each}}-->
  <!--  {{#if_gt params.examples.length compare=0}}-->
  <!--  <ul class="nav nav-tabs nav-tabs-examples">-->
  <!--    {{#each params.examples}}-->
  <!--    <li{{#if_eq @index compare=0}} class="active"{{/if_eq}}>-->
  <!--    <a href="#{{../section}}-examples-{{../id}}-{{@index}}">{{title}}</a>-->
  <!--    </li>-->
  <!--    {{/each}}-->
  <!--  </ul>-->

  <!--  <div class="tab-content">-->
  <!--    {{#each params.examples}}-->
  <!--    <div class="tab-pane{{#if_eq @index compare=0}} active{{/if_eq}}" id="{{../section}}-examples-{{../id}}-{{@index}}">-->
  <!--      <pre data-type="{{type}}"><code class="language-{{type}}">{{reformat content type}}</code></pre>-->
  <!--    </div>-->
  <!--    {{/each}}-->
  <!--  </div>-->
  <!--  {{/if_gt}}-->
  <!--  {{/if}}-->
</template>

<script setup>
import {ref, computed, watch, onMounted, onUpdated, onUnmounted} from 'vue'
import {useI18n} from 'vue-i18n'
import Prism from 'prismjs'
import {toLowerCase, nl2br, splitFill} from '/@/libs/utils/tpl'

const {t} = useI18n()
const props = defineProps({
  section: {type: String, required: true},
  params: {type: Object, required: true},
  // key: {type: String, required: true},
  // 第一位显示名字
  col: {type: String},
})

onMounted(() => {
  console.log('onMounted', props.section.value)
  // Prism.highlightAll()
})
onUpdated(() => {
  console.log('updated')
  Prism.highlightAll()
})
</script>

<style scoped>
</style>
