<template>
    <section id="tokenomics" class="column svelte-1ykiyx9">
        <div class="mb-10 stack svelte-1ykiyx9">
            <span class="svelte-1ykiyx9 text-center text-36 font-bold">TOKENOMICS</span>
        </div>
        <div class="wrapper-tokenomics svelte-1ykiyx9">
            <div :class="{'tokenomics-image svelte-1ykiyx9': true}">
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
</template>

<script>
import checkWidthBreakPoint from 'Helper/mixins/checkWidthBreakPoint';
export default {
    name: 'Tokenomics',
    mixins: [checkWidthBreakPoint],
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