<template>
    <section id="top" class="banner full svelte-1ykiyx9">
        <img class="background parallax-layer svelte-1ykiyx9" :src="require('Assets/image/grid.svg')">
        <figure class="carousel stack parallax-layer svelte-1ykiyx9">
            <span class="svelte-1ykiyx9">
                <img :src="require('Assets/images/items/1.png')" class="svelte-1ykiyx9">
            </span>
            <span class="svelte-1ykiyx9">
                <img :src="require('Assets/images/items/3.png')" class="svelte-1ykiyx9">
            </span>
            <span class="svelte-1ykiyx9">
                <img :src="require('Assets/images/items/5.png')" class="svelte-1ykiyx9">
            </span>
        </figure>
        <h1 class="stack parallax-layer svelte-1ykiyx9">
            <span class="svelte-1ykiyx9">INI TEST BUILD WEB</span>
        </h1>
        <p class="description parallax-layer svelte-1ykiyx9">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. 
        </p>
        <div class="buttons stack parallax-layer svelte-1ykiyx9">
            <div class="row svelte-1ykiyx9">
                <a href="#" class="svelte-1ykiyx9">
                    <button type="" class=" primary large ">Open App</button>
                </a>
            </div>
        </div>
        <div class="column row-desktop svelte-1ykiyx9">
            <div class="socials row centered svelte-1ykiyx9">
                <a v-for="(item, index) in socialMedia" :key="index" :href="item.link" target="_blank" class="svelte-1ykiyx9 social-icon">
                    <i :class="item.icon"></i>
                </a>
            </div>
        </div>
    </section> 
</template>

<script>
export default {
    name: 'Banner',
    data: () => ({
        socialMedia: [
            {
                icon: 'fab fa-twitter',
                link: 'https://twitter.com/HedgiesOfficial'
            },{
                icon: 'fab fa-telegram',
                link: 'https://twitter.com/HedgiesOfficial'
            },{
                icon: 'fab fa-medium',
                link: 'https://twitter.com/HedgiesOfficial'
            },{
                icon: 'fab fa-github',
                link: 'https://twitter.com/HedgiesOfficial'
            },{
                icon: 'fab fa-discord',
                link: 'https://twitter.com/HedgiesOfficial'
            },{
                icon: 'fas fa-file',
                link: 'https://twitter.com/HedgiesOfficial'
            },
        ]
    })
}
</script>