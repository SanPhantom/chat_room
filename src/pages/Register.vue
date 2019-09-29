<template>
  <div class="container">
    <van-steps :active="active">
      <van-step>账户注册</van-step>
      <van-step>注册结果</van-step>
    </van-steps>

    <van-cell-group :border="fieldBorder">
      <van-field
        :border="fieldBorder"
        type="text"
        v-model="info.nickname"
        placeholder
        label="用户名"
        required
        :label-width="labelW"
      />
      <van-field
        :border="fieldBorder"
        type="text"
        v-model="info.email"
        placeholder
        label="邮箱"
        required
        :label-width="labelW"
      />
      <van-field
        :border="fieldBorder"
        type="tel"
        v-model="info.phone"
        placeholder
        label="手机号"
        required
        :label-width="labelW"
      />
      <van-field
        :border="fieldBorder"
        :type="psw_type ? 'text' : 'password'"
        v-model="psw"
        placeholder
        label="密码"
        required
        :label-width="labelW"
        :right-icon="psw_type ? 'eye-o' : 'closed-eye'"
        @click-right-icon="psw_type = !psw_type"
      />
      <van-field
        :border="fieldBorder"
        :type="con_psw_type ? 'text' : 'password'"
        v-model="con_psw"
        placeholder
        label="确认密码"
        required
        :label-width="labelW"
        :right-icon="con_psw_type ? 'eye-o' : 'closed-eye'"
        @click-right-icon="con_psw_type = !con_psw_type"
      />

      <van-button type="primary" size="normal" block @click="subReg">注 册</van-button>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      active: 0,
      labelW: "70px",
      fieldBorder: false,
      psw: "",
      psw_type: false,
      con_psw: "",
      con_psw_type: false,
      info: {
        nickname: "",
        email: "",
        phone: "",
        password: ""
      }
    };
  },
  methods: {
    subReg() {
      // console.log('123');
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  padding: 50px 25px 0;
  .van-steps {
    padding: 0 40px;
  }
  .van-cell-group {
    margin-top: 50px;
    .van-field {
      border-bottom: 1px solid #eaeaea;
      & + .van-field {
        margin-top: 10px;
      }
    }
    .van-button {
      margin-top: 35px;
      font-size: 16px;
    }
  }
}
</style>>
