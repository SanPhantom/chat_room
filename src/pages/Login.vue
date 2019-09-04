<template>
  <div class="container">
    <video class="bgvid" ref="video" id="bgvid" :muted="muted" loop autoplay>
      <source src="@/assets/video/login_bg.mp4" type="video/mp4" />
    </video>
    <div class="logo">
      <h1>Night Elf Chat</h1>
    </div>

    <van-cell :border="border">
      <van-field v-model="username" placeholder="请输入用户名" />
    </van-cell>
    <van-cell :border="border">
      <van-field v-model="password" type="password" placeholder="请输入密码" />
    </van-cell>
    <van-cell :border="border">
      <van-button type="primary" size="large" text="登 录"></van-button>
    </van-cell>
    <div class="toReg">
      <span>注册新账号>></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      active: 1,
      bgsrc: "@/assets/video/login_bg.mp4",
      muted: true,
      border: false,
      username: "",
      password: ""
    };
  },
  created() {
    let _this = this;
    // let video = _this.$refs.video;
    this.$nextTick(() => {
      _this.$refs.video.play();
      _this.$refs.video.style.width = document.body.clientWidth + "px";
      _this.$refs.video.style.height = document.body.clientHeight + "px";
    });
  },
  methods: {}
};
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .van-cell {
    background-color: transparent;
    .van-field {
      //   background-color: #ffffff;
      padding-left: 10px;
      padding-right: 10px;
      border-bottom: 1px solid #ffffff;
      font-size: 18px;
      &__control {
        color: #ffffff;
      }
    }
    .van-button {
      // background-color: transparent;
      font-size: 18px;
    }
  }
  .toReg {
    padding: 10px 0;
    color: #ffffff;
    font-size: 14px;
    text-align: right;
  }
}

.bgvid {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: -100;
  background-size: cover;
}

.logo {
  margin-bottom: 40px;
  h1 {
    background: linear-gradient(to right, lightblue, lightgreen);
    -webkit-background-clip: text;
    background-clip: text;
    -moz-background-clip: text;
    color: transparent;
  }
}
</style>