<template>
  <div class="test">
    <public-header>
      <p class="title">运动</p>
    </public-header>

  </div>
</template>

<script>
  import PublicHeader from '../components/Header'
  export default {
    components:{
      PublicHeader
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import '../assets/css/test.less';

.test{
  min-height: 8rem;
  background: cyan;
}



</style>
