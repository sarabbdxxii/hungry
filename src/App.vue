<template>
  <div>
    <v-header :seller="seller"></v-header>
    <div class="tab">
      <div class="tab_item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab_item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab_item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view :seller="seller"></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from './components/header/header.vue';
  const ERR_OK = 0;

  export default {
    data(){
      return {
        seller:{}
      }
    },
    //通过Vue-resource来发生一个ajax请求
    created(){//生命周期钩子函数
      this.$http.get('/api/seller').then(response =>{
        //成功
        response = response.body;
        if(response.errno === ERR_OK){
          this.seller = response.data;
        }
      },response =>{
        //失败

      });
    },
    name:'app',
    components:{
      'v-header':header
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .tab
    display:flex
    width:100%
    height:40px
    line-height:40px
    border-bottom:solid 1px rgba(7,17,27,0.1)
    .tab_item
      flex:1
      text-align:center
      & > a
        display:block
        font-size:14px
        color:rgb(77,85,93)
        &.active
          color:rgb(240,20,20)
</style>
