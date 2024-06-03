<template>
  <div>
    <GameSelect />
    <MyTools />
  </div>
</template>

<script>
import GameSelect from '@/components/GameSelect.vue';
import MyTools from '@/components/toolsFolder/myToolsFolder.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    GameSelect,
    MyTools
  }
});
</script>

<style>

</style>