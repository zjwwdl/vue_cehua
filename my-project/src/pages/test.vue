<template>
  <div class="test">
    <public-header>
      <p class="title">首页</p>
    </public-header>

  </div>
</template>

<script>
  import Public from '../public.js'

  export default {
    mixins:[Public]
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import '../assets/css/test.less';

.test{
  min-height: 8rem;
  background: peachpuff;
}



</style>
