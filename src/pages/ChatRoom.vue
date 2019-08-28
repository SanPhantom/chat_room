<template>
  <div class="container">
    <van-nav-bar fixed :title="concat.name">
      
    </van-nav-bar>

    <div class="content">
      
    </div>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      hah: 1,
      concat: {
          name: ''
      }
    };
  },
  created() {
      this.getRouterData()
  },
  methods: {
    getRouterData() {
        this.concat = this.$route.query;
        // console.log(this.$route.query)
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