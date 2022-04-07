<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import metaInfo from 'Helper/mixins/metaInfo.js';
import {mapActions} from 'vuex';

export default {
  name: 'App',
  mixins: [metaInfo],
  created() {
    this.addClassBody()
    this.initWindowWidth()
    this.watchWindowWidth()
  },
  methods: {
    ...mapActions({
      ax_setWidth: 'windowWidth/setWidth'
    }),
    addClassBody() {
      const body = document.querySelector('body')
      body.classList.add('layout-3d')
    },
    initWindowWidth(){
      this.ax_setWidth(window.innerWidth)
    },
    watchWindowWidth(){
      window.addEventListener('resize', () => {
        this.ax_setWidth(window.innerWidth)
      });
    },
  }
}
</script>
