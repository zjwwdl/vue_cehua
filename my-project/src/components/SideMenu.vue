<template>
  <div class="side-menu" @click="sideHide">
    <ul>
      <router-link tag="li" v-for="(l,index) in list" :to="l.uri" :key="index">
        {{l.name}}
        <i class="icon-chevron-right"></i>
      </router-link>
    </ul>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        list:[
          {name:"首页",uri:"/"},
          {name:"游戏",uri:"/game"},
          {name:"运动",uri:"/sport"},
          {name:"个人中心",uri:"/user"}
        ]
      }
    },
    methods:{
      sideHide(){
        this.$emit('hide')
      }
    }
  }

</script>

<style>
.side-menu{
  background:rgba(10,10,10,.3);
  height:100%;
  position:fixed;
  width:100%;
  top:0;
  padding-top:.8rem;
  z-index:11;
}
.side-menu ul{
  width:70%;
  background:#282828;
  height:100%;
  border-top:1px solid #222;
}
.side-menu ul li{
  height:.8rem;
  border-bottom:1px dotted #333;
  font-size:.32rem;
  line-height:.8rem;
  padding:0 .3rem 0 .2rem;
  color:white;
}
.side-menu ul li i{
  float:right;
  line-height:.8rem;
}
</style>
