<template>
  <div class="container">
    <van-nav-bar
      fixed
      :title="concat.name"
      left-arrow
      left-text="返回"
      @click-left="$router.go(-1)"
    >
    </van-nav-bar>

    <div class="content">
      <van-list>
        <van-cell :border="border">
          <van-image
            round
            fit="cover"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          ></van-image>

          <div class="msg-info">
            <p class="time">SanPhantom Kill@20:25:25</p>
            <div class="msg">
              Hello, List
              组件通过loading和finished两个变量控制加载状态，当组件滚动到底部时，会触发load事件并将loading设置成true。此时可以发起异步操作并更新数据，数据更新完毕后，将loading设置成false即可。若数据已全部加载完毕，则直接将finished设置成true即可。
            </div>
          </div>
        </van-cell>
        <van-cell :border="border" class="right">
          <div class="msg-info">
            <p class="time">SanPhantom Kill@20:25:25</p>
            <div class="msg">
              Hello, List
              组件通过loading和finished两个变量控制加载状态，当组件滚动到底部时/
            </div>
          </div>
          <van-image
            round
            fit="cover"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          ></van-image>
        </van-cell>
      </van-list>
    </div>

    <van-cell-group class="msg-input-box">
      <van-field v-model="msg" center placeholder="请输入发送消息">
        <van-button
          :disabled="msg === ''"
          slot="button"
          size="small"
          type="primary"
          @click="sendMsg"
          >发 送</van-button
        >
      </van-field>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      border: false,
      hah: 1,
      msg: "",
      concat: {
        name: ""
      }
    };
  },
  created() {
    this.getRouterData();
  },
  methods: {
    getRouterData() {
      this.concat = this.$route.params;
    },
    sendMsg() {
      this.$toast(this.msg);

      this.msg = "";
    }
  }
};
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.content {
  padding: 56px 10px;
  .van-cell {
    padding: 0;
    .van-image {
      // flex: 1;
      margin-right: 10px;
      width: 40px;
      height: 40px;
    }
    .msg-info {
      width: 220px;
      .msg {
        padding: 10px;
        background-color: green;
        color: #ffffff;
        border-radius: 0 10px 10px 10px;
      }
    }
    & + .van-cell {
      margin-top: 10px;
    }
    &.right {
      .van-image {
        margin-left: 10px;
        margin-right: 0;
      }
      .time {
        text-align: right;
      }
      .msg {
        border-radius: 10px 0 10px 10px;
      }

      .van-cell__value {
        justify-content: flex-end;
      }
    }
    &__value {
      display: flex;
      align-items: flex-start;
      padding-left: 10px;
    }
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

.msg-input-box {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  border-top: 1px solid #b8b8b8;
}
</style>