<template>
  <div class="container">
    <van-nav-bar fixed title="Firends Message List">
      <van-image
        slot="left"
        fit="cover"
        round
        width="1rem"
        height="1rem"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
      ></van-image>
    </van-nav-bar>

    <div class="content">
      <van-cell-group :border="border">
        <van-cell v-for="(concat, index) in concats" :key="index"
          :title="concat.name"
          size="large"
          :label="concat.message"
          :border='border'
          @click="toChat(concat)"
          :to="{name: 'chatroom', params: concat}"
        >
          <van-image
            slot="icon"
            fit="cover"
            width="1.2rem"
            height="1.2rem"
            round
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          ></van-image>
          <div class="info" slot="default">
            <span class="time">{{concat.time}}</span>
            <span slot="default" v-if="concat.unread > 0" class="badge">{{concat.unread > 99 ? '99+' : concat.unread}}</span>
          </div>
        </van-cell>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      hah: 1,
      border: false,
      concats: [
        {
          name: 'Username-player i',
          message: 'Where are you?',
          time: '19:33',
          unread: 100
        }, {
          name: 'Username-player ii',
          message: 'How are you today?',
          time: '19:30',
          unread: 0
        }
      ]
    };
  },
  methods: {
    toChat(concat) {
      this.$toast({
        message: concat.message,
        duration: 2000,
        position: 'bottom'
      });
    }
  }
};
</script>

<style scoped lang="scss">
.van-cell {
  .van-image {
    margin-right: 10px;
  }
  &__value {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-left: 10px;
  }
}

.van-image {
  vertical-align: middle;
}

.time {
  font-size: 12px;
}

.badge {
  display: block;
  height: 20px;
  padding: 0 6px;
  background-color: red;
  color: #ffffff;
  font-size: 12px;
  text-align: center;
  line-height: 20px;
  border-radius: 10px;
  margin: auto 0;
}
</style>