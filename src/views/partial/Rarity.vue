<template>
    <section class="column svelte-1ykiyx9 relative grid grid-cols-1 lg:grid-cols-2">
        <div class="mb-[15px] md:mb-0">
            <h1 class="stack svelte-1ykiyx9 mb-5">
                <span class="svelte-1ykiyx9 text-36 font-bold">Train Rarity</span>
            </h1>
            <div class="text-18 leading-7">
                Collect trains of varying rarity and style. There are 5 levels of rarity: common, uncommon, rare, epic, and legendary. A train’s rarity is determined by its attributes which also affect in-game resource gathering and performance. The chance of minting a train of each rarity level is depicted in the adjacent chart.
            </div>
        </div>
        <div class="percentage-rarity">
            <div class="text-2xl box flex items-center" v-for="(item, i) in listRarity" :key="i">
                <div :class="`box-${item.color} flex items-center`">{{item.percen}}%</div>
                <span class="ml-4">{{item.text}}</span>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Rarity',
    data: () => ({
        listRarity: [
            {
                percen: 10,
                color: 'pink',
                text: 'Legendary dsadasdas dsadsadsad dsadsadasd dsadsadas'
            },
            {
                percen: 4,
                color: 'purple',
                text: 'Epic'
            },
            {
                percen: 8,
                color: 'aqua',
                text: 'Rare'
            },
            {
                percen: 16,
                color: 'green',
                text: 'Uncommon'
            },
        ]
    })
}
</script>