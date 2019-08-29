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
      <van-row type="flex" justify="end">
        <van-col span="16">
          <div class="avater">
            <van-image
              fit="cover"
              round
              width="1rem"
              height="1rem"
              src="https://img.yzcdn.cn/vant/cat.jpeg"
            ></van-image>
          </div>
          <div class="info">
            <p>UserName-player ii@12:50:03</p>
            <div class="meg"></div>
          </div>
        </van-col>

        <van-col span="16">
          
          <div class="info">
            <p>12:50:03@UserName-player ii</p>
            <div class="meg"></div>
          </div>
          <div class="avater">
            <van-image
              fit="cover"
              round
              width="1rem"
              height="1rem"
              src="https://img.yzcdn.cn/vant/cat.jpeg"
            ></van-image>
          </div>
        </van-col>
      </van-row>

      <div class="msg-box right">
        <div class="avater">
          <van-image
            fit="cover"
            round
            width="1rem"
            height="1rem"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          ></van-image>
        </div>
        <div class="info">
          <p>UserName-player ii@12:50:03</p>
          <div class="meg"></div>
        </div>
      </div>
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
  .van-col {
    display: flex;
    align-items: flex-start;
    &.left {
      justify-content: flex-start;
      margin-left: 0;
    }
    &.right {
      justify-content: flex-end;
      // margin-right: 0;
    }
  }
}

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

.msg-input-box {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  border-top: 1px solid #b8b8b8;
}
</style>