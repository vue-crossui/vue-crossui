<template>
  <div>
    <ui-button type="primary" class="darken-3" size="lg" icon="user">立即注册</ui-button>
  </div>
</template>

<script>


import Vue from 'vue'
import CrossUI from './src'
Vue.use(CrossUI, {
  // type: 'bootstrap',
  type: 'materialize',
  type: 'bulma',

  fontAwesome: true,
})
export default {

  name: 'test',

  data () {
    return {

    };
  },
  created(){
    // console.log(this.$type)
  }
};
</script>

<style lang="css">
</style>