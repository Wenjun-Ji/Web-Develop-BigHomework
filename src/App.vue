<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, onBeforeMount } from 'vue';
import { isMobile } from '@/utils/tools';

import { useSourceStore } from './stores/source';
import { useSettingStore } from './stores/setting';

const source = useSourceStore();
const setting = useSettingStore();

const init = () => {
  source.isMobile = !!isMobile();
  source.ratio = window.devicePixelRatio ?? 1;
  setting.getFps();
};

onBeforeMount(() => {
  init();
});
</script>

<style>
/* 全局样式 */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
}
</style>