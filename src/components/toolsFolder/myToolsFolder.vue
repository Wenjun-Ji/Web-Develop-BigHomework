<script setup lang='ts'>
import { ref } from 'vue';
import ToolsFolder, { ToolsFolderItem } from './index.vue';
import SelectTowerPop from '../selectTowerPop.vue';
import EnemyInfoPop from '../enemyInfoPop.vue';

import GithubIcon from '@/assets/img/github.svg';

import { requireCDN } from '@/utils/handleImg';
const  _requireCDN = (url: string) => requireCDN(url, 'zombies')
const  _requireCDN1 = (url: string) => requireCDN(url, 'tower')

const rankListVisible = ref(false)
const selectTowerVisible = ref(false)
const enemyInfoVisible = ref(false)

const onClickItem = (item: ToolsFolderItem) => {
  if(item.title === '排行榜') {
    rankListVisible.value = true
  } else if(item.title === '塔防选择') {
    selectTowerVisible.value = true
  } else if(item.title === '敌人信息') {
    enemyInfoVisible.value = true
  }
}

</script>

<template>
  <ToolsFolder
    :list="[
      {icon: GithubIcon, title: 'GitHub', url: 'https://github.com/Wenjun-Ji/Web-Develop-BigHomework'},
      {icon: _requireCDN('godzilla.png'), title: '敌人信息'},
      {icon: _requireCDN1('tower_slow.png'), title: '塔防选择'}
    ]" 
    @on-click-item="onClickItem"
  />
  <RankList v-model:visible="rankListVisible" />
  <SelectTowerPop v-model:visible="selectTowerVisible" />
  <EnemyInfoPop v-model:visible="enemyInfoVisible" />
</template>

<style lang='less' scoped>

</style>