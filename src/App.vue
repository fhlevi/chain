<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import metaInfo from 'Helper/mixins/metaInfo.js';

export default {
  name: 'App',
  mixins: [metaInfo],
  created() {
    this.addClassBody()
  },
  methods: {
    addClassBody() {
      const body = document.querySelector('body')
      body.classList.add('layout-3d')
    }
  }
}
</script>
