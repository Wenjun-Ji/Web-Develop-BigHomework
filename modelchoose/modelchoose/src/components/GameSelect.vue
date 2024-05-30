<template>
  <div class="game-select">
    <div class="set">
      <button v-for="(mode, index) in others" :key="index" @click="navigateToMode(mode.path)">
        <!-- {{ mode.name }} -->
      </button>
    </div>

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
      { name: 'adventure', path: '/mode1' },
      { name: 'bossModel', path: '/mode2' },
      { name: 'monsterHouse', path: '/mode3' }
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
  background-image: url('@/assets/background1.jpg');
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
  background-image: url('@/assets/adventure.png');
  background-size: cover;
  background-position: center;
  border: 2px solid transparent;
  transition: background-color 0.3s ease;
}
.button-container button:nth-child(2) {
  height: 88px;
  width: 287px;
  margin: 100px;
  padding: 20px 100px;
  background-color: transparent;
  background-image: url('@/assets/monsterHouse.png');
  background-size: cover;
  background-position: center;
  border: 2px solid transparent;
  transition: background-color 0.3s ease;
}

.button-container button:nth-child(3) {
  height: 88px;
  width: 287px;
  margin: 100px;
  padding: 20px 100px;
  background-color: transparent;
  background-image: url('@/assets/monsterHouse.png');
  background-size: cover;
  background-position: center;
  border: 2px solid transparent;
  transition: background-color 0.3s ease;
}
.set{
  display: flex;
    gap: 20px;
    position: fixed;
    bottom: 35%;
}


.set button:nth-child(1) {
  width: 100px;
  height: 100px;

  margin-right: 600px;

  background-image: url('@/assets/setting.png');
  background-size: 100% 100%;
  background-position: center;

  /* 使用 background-blend-mode 进行混合，假设你还需要设置背景色的话 */
  background-color:transparent;
  /* 假设你需要的背景色是半透明的白色 */

  /* 边框样式设置，根据你的需要调整 */
  border: 2px solid transparent;

  /* 让元素呈现为圆形 */
  border-radius: 50%;

  /* 动画设置 */
  transition: background-color 0.3s ease;
  width:130px;
  
}

.set button:nth-child(2) {
  width: 100px;
  height: 100px;

  background-image: url('@/assets/question.png');
  background-size: 100% 100%;
  background-position: center;

  /* 使用 background-blend-mode 进行混合，假设你还需要设置背景色的话 */
  background-color: transparent;
  /* 假设你需要的背景色是半透明的白色 */

  /* 边框样式设置，根据你的需要调整 */
  border: 2px solid transparent;

  /* 让元素呈现为圆形 */
  border-radius: 50%;

  /* 动画设置 */
  transition: background-color 0.3s ease;
  width:130px;

}


button:hover {
  transform:scale(1.1);
}
</style>