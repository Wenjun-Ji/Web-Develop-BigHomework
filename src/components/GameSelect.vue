<template>
  <div class="game-select">
    

    <div class="button-container">
      <button v-for="(mode, index) in gameModes" :key="index" @click="navigateToMode(mode.path)">
        <!-- {{ mode.name }} -->
      </button>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const router = useRouter();
    const gameModes = ref([
      { name: 'adventure', path: '/mode1' }
      // { name: 'bossModel', path: '/mode2' },
      // { name: 'monsterHouse', path: '/mode3' }
    ]);

    const others = ref([
      { name: 'set', path: '/set' },
      { name: 'question', path: '/question' }
    ]);

    const navigateToMode = (path) => {
      router.push(path);
    };

    return {
      gameModes,
      others,
      navigateToMode
    };
  }
});
</script>

<style scoped>

.game-select {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('@/assets/background2.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-top: 0;
}

.button-container {
  display: flex;
  gap: 20px;
  position:fixed;
  bottom:10%;
}


.button-container button:nth-child(1){
  height: 88px;
  width:287px;
  margin:100px;
  padding: 20px 100px;
  background-color: transparent;
  background-image: url('@/assets/select.png');
  background-size: cover;
  background-position: center;
  border: 2px solid transparent;
  transition: background-color 0.3s ease;
  margin-top: 400px;
}



button:hover {
  transform:scale(1.1);
}
</style>