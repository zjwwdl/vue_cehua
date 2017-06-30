<template>
  <header>
    <i class="icon-reorder" @click="showSide"></i>
    <slot></slot>
    <i class="icon-user"></i>
  </header>
</template>

<script>
  import bus from '../bus.js'
  export default {
    methods:{
      showSide(){
        bus.$emit('sideShow')
      }
    }
  }
</script>
<!--加上scoped属性 css样式就变为私有的-->
<style scoped>
  header{
    height: .8rem;
    background:#282828;
    position:fixed;
    left:0;
    right:0;
    top:0;
    z-index:100;
    padding:0 .2rem;
    color:#fff;
    line-height:.8rem;
    font-size: .32rem;
  }
  header i{
    color:white;
  }
  .title{
    margin-left:.2rem;
    display:inline-block;
    font-size: .32rem;
  }
  .icon-user{
    float:right;
    line-height: .8rem;
  }
</style>
