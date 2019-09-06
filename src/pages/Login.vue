<template>
  <div class="container">
    <video class="bgvid" ref="video" id="bgvid" :muted="muted" loop autoplay>
      <source src="@/assets/video/login_bg.mp4" type="video/mp4" />
    </video>
    <div class="logo">
      <h1>Night Elf Chat</h1>
    </div>

    <van-cell :border="border">
      <van-field
        v-model="login_info.phone"
        placeholder="请输入手机号"
      />
    </van-cell>
    <van-cell :border="border">
      <van-field
        v-model="login_info.password"
        type="password"
        placeholder="请输入密码"
      />
    </van-cell>
    <van-cell :border="border">
      <van-button
        type="primary"
        size="large"
        @click="sub_login"
        text="登 录"
      ></van-button>
    </van-cell>
    <div class="toReg">
      <span>注册新账号>></span>
    </div>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
  name: "login",
  data() {
    return {
      active: 1,
      bgsrc: "@/assets/video/login_bg.mp4",
      muted: true,
      border: false,
      login_info: {
        phone: "",
        password: ""
      }
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
  methods: {
    sub_login() {
      const _this = this;
      let { phone, password } = this.login_info;
      if (phone === "" || password === "") {
        this.$toast({
          message: "有未填项",
          duration: 2000,
          position: "bottom"
        });
      } else if (!/^1[3456789]\d{9}$/.test(phone)) {
        this.$toast({
          message: "手机号格式错误",
          duration: 2000,
          position: "bottom"
        });
      } else {
        // console.log(this.$axios);
        this.$axios.post("/login", this.login_info).then((res) => {
          let data = res.data;
          if (data.code === 200) {
            // console.log(data);
            window.localStorage.setItem('token', data.token);
            _this.$toast('登录成功');
            let user = {
              name: data.data.username,
              id: data.data.id
            }
            // console.log(user);
            // _this.$socket.emit('join', user)
          }
        });
      }
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