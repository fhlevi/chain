<template>
  <div class="stack svelte-1c5s86x">
      <main class="svelte-1ykiyx9">
          <banner-home></banner-home>
          <section id="traders" class="column row-desktop svelte-1ykiyx9">
              <div class="column svelte-1ykiyx9">
                  <h2 class="svelte-1ykiyx9 text-36 font-bold">DI ISI TEXT NANTI</h2>
                  <p class="svelte-1ykiyx9">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <figure class="callout parallax-layer svelte-1ykiyx9">
                  <img :src="require('Assets/images/items/test.png')" width="360" class="svelte-1ykiyx9">
              </figure>
          </section>
          <section id="league" class="column row-desktop row-reverse svelte-1ykiyx9">
              <div class="column svelte-1ykiyx9">
                  <h2 class="svelte-1ykiyx9 text-36 font-bold">DI ISI TEXT NANTI game</h2>
                  <p class="svelte-1ykiyx9">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <figure class="callout parallax-layer svelte-1ykiyx9">
                  <img :src="require('Assets/images/items/nekogame.png')" width="420" class="img-sub-banner svelte-1ykiyx9">
              </figure>
          </section>
          <collection-home />
            <section-roadmap />
                <section-tokenomic />
                <section-tim />
            <section-partner />
          <section-footer />
      </main>
  </div>
</template>

<script>
import {smoothScroll} from 'Helper/scrollToElement';

export default {
  name: 'HomeView',
  components: {
    'banner-home': () => import('Views/partial/Banner.vue'),
    'collection-home': () => import('Views/partial/Collection.vue'),
    'section-roadmap': () => import('Views/partial/Roadmap.vue'),
    'section-tokenomic': () => import('Views/partial/Tokenomics.vue'),
    'section-tim': () => import('Views/partial/Team.vue'),
    'section-partner': () => import('Views/partial/Partner.vue'),
    'section-footer': () => import('Components/layout/Footer.vue'),
  },
  created() {
    this.scrollTo()
  },
  methods: {
      scrollTo() {
        const targetEl = document.querySelector('#traders')

        smoothScroll()
      }
  }
}
</script>
