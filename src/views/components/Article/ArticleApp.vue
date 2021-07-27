<template>
  <article
    :id="api-${article.group}-${article.name}-${article.version}"
    :class=" {hide: article.hidden}"
  >
    <div class="pull-left">
      <h1>{{ article.groupTitle }}
        <template v-if="article.title"> - {{ article.title }}</template>
      </h1>
    </div>
    <div class="pull-right" v-if="project.template?.withCompare">
      <div class="btn-group">
        <button class="version btn btn-default dropdown-toggle" data-toggle="dropdown">
          <strong>{{ article.version }}</strong>&nbsp;<span class="caret"></span>
        </button>
        <ul class="versions dropdown-menu open-left">
          <li class="disabled"><a href="#">compare changes to:</a></li>
          <li class="version" v-for="version in versions"><a href="#">{{ version }}</a></li>
        </ul>
      </div>
    </div>
    <div class="clearfix"></div>

    <h4 class="muted" v-if="article.author">{{ t('authored_by') }} {{ article.author }}</h4>

    <p class="deprecated" v-if="article.deprecated"><span>{{ t('DEPRECATED') }}</span>
      {{ article.deprecated?.content }}
    </p>

    <p v-if="article.description" v-html="nl2br(article.description)"></p>
    <span class="type" :class="`type__${article.type}`">{{ article.type }}</span>
    <pre :data-type="article.type"><code class="language-http">{{ article.url }}</code></pre>

    <p v-if="article.permission">
      {{ t('permission') }}
      <template v-for="per in article.permission">
        {{ per.name }}
        <button v-if="per.title" type="button" class="btn btn-info btn-xs"
                :data-title="per.title"
                :data-content="per.description" data-html="true"
                data-toggle="popover" data-placement="right" data-trigger="hover">
          <span class="glyphicon glyphicon-info-sign" aria-hidden="true"></span>
        </button>
      </template>
    </p>

    <template v-if="article.examples">
      <ul class="nav nav-tabs nav-tabs-examples">
        <template v-for="ex in article.examples" :key="index">
          <li
            :class="{active:index ==0 }"
          >
            <a :href="`#examples-${ex.id }-${index}`">{{ ex.title }}</a>
          </li>
        </template>
      </ul>
      <div class="tab-content">
        <template v-for="ex in article.examples" :key="index">
          <div class="tab-pane" :id="`#examples-${ex.id }-${index}`"
               :class="{active:index ==0 }"
          >
            <pre data-type="{{ex.type}}"><code class="language-{{ex.type}}">{{ ex.content }}</code></pre>
          </div>
        </template>
      </div>
    </template>

    <param-block :section="'header'" :params="article.header" v-if="article.header"/>
    <param-block :section="'parameter'" :params="article.parameter" v-if="article.parameter"/>
    <param-block :section="'success'" :params="article.success" v-if="article.success"/>
    <query-block :section="'query'" :params="article.query" v-if="article.query"/>
    <param-block :section="'body'" :params="article.body" v-if="article.body"/>
    <param-block :section="'error'" :params="article.error" v-if="article.error" :col="'Name'"/>

    <!--  {{subTemplate "article-sample-request" article=article id=id}}-->
  </article>
</template>

<script setup>
import {ref} from 'vue'
import {useI18n} from "vue-i18n"
import ParamBlock from './ParamBlock.vue';
import QueryBlock from './QueryBlock.vue';
import {toLowerCase, splitFill, nl2br} from '/@/libs/utils/tpl'

const {t} = useI18n()
const props = defineProps({
  project: {type: Object},
  versions: {type: Array},
  article: {type: Object},
})
</script>

<style scoped>
</style>
