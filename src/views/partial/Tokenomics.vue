<template>
    <div>
        <h1 class="stack parallax-layer svelte-1ykiyx9">
            <span class="parallax-layer svelte-1ykiyx9 text-center text-36 font-bold">TOKENOMICS</span>
        </h1>
        <section id="tokenomics" class="parallax-layer svelte-1ykiyx9">
            <div class="wrapper-tokenomics svelte-1ykiyx9">
                <div class="tokenomics-image">
                    <img :src="require('Assets/image/tokenomik.png')" />
                </div>
                <div class="tokenomics-list">
                    <div class="tokenomics-item" v-for="(item, idx) in tokenList" :key="idx">
                        <div :class="`tokenomics-item-percentace item-square-${item.color} mr-2`"></div>
                        <span class="mr-3">{{ item.percen }}%</span>
                        <span>
                            <div class="text-16 font-semibold">{{ item.title }}</div>
                            <div class="text-12 mt-1">{{ item.description }}</div>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'Tokenomics',
    data: () => ({
        tokenList: [
            {
                color: 'red',
                percen: 10,
                title: 'lorem ipsum',
                description: 'lorem ipsum dolor sit emit lorem ipsum dolor sit emit '
            },{
                color: 'green',
                percen: 10,
                title: 'lorem ipsum',
                description: ''
            },{
                color: 'green',
                percen: 20,
                title: 'lorem ipsum',
                description: ''
            },{
                color: 'green',
                percen: 5,
                title: 'lorem ipsum',
                description: ''
            },{
                color: 'green',
                percen: 10,
                title: 'lorem ipsum',
                description: ''
            },
        ]
    })
}
</script>