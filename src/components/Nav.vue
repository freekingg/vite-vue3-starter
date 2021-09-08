<template>
  <aside class="nav">
    <ul class="nav-list">
      <li
        class="nav-item flex-center"
        v-for="(nav, index) in reactiveData.navList"
        :key="index"
        :class="{ active: nav.isActive }"
        @click="navClick(nav)"
      >
        {{ nav.name }}
      </li>
    </ul>
  </aside>
</template>

<script lang="ts" setup>
import { reactive, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { NavItem } from '../common/types'

const router = useRouter()
const reactiveData = reactive({
  navList: [
    {
      name: 'Home',
      isActive: false,
      path: '/',
    },
    {
      name: 'Vuex',
      isActive: false,
      path: '/vuex',
    },
  ],
})
const changeNavActive = (currentPath: string) => {
  reactiveData.navList.forEach((v: NavItem) => {
    const temp = v
    temp.isActive = temp.path === currentPath
    return temp
  })
}
const navClick = (e: NavItem) => {
  router.push(e.path)
}

watch(
  () => router.currentRoute.value,
  _n => {
    changeNavActive(_n.path)
  },
)

onMounted(() => {
  router.isReady().then(() => {
    changeNavActive(router.currentRoute.value.path)
  })
})
</script>

<style scoped lang="scss">
@import '@/assets/style/basic.scss';
.nav {
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background: #fff;
  .nav-list {
    .nav-item {
      box-sizing: border-box;
      width: 100%;
      height: 60px;
      cursor: pointer;
      &.active {
        font-weight: bold;
        background: $second-background-color;
      }
    }
  }
}
</style>
