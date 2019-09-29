<template>
  <div>
    <router-view></router-view>

    <van-tabbar v-model="active" fixed>
      <van-tabbar-item replace icon="chat-o" to="/list"
        >Message</van-tabbar-item
      >
      <van-tabbar-item replace icon="friends-o" to="/firends"
        >Friend</van-tabbar-item
      >
      <van-tabbar-item replace icon="manager-o" to="/firends"
        >User</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
    name: 'index',
    data() {
        return {
            active: 0
        }
    }
};
</script>

<style scoped lang='scss'>
</style>