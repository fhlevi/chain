<template>
    <div id="roadmap">
        <h1 class="stack parallax-layer svelte-1ykiyx9">
            <span class="svelte-1ykiyx9 text-center" style="text-align: center">ROADMAP</span>
        </h1>
        <section id="cd-timeline" class="cd-container">
            <div class="cd-timeline-block" v-for="(item, index) in roadmapList" :key="index">
                <div class="cd-timeline-img cd-picture"></div>
                <div class="cd-timeline-content">
                    <h2>{{ item.title }}</h2>
                    <p v-for="(itemChild, indexChild) in item.items" :key="indexChild"><span><img :src="require(`Assets/image/${itemChild.icon}.svg`)" alt="icon" class="img-fluid" /></span> {{ itemChild.name }}</p>
                </div> <!-- cd-timeline-content -->
            </div> <!-- cd-timeline-block -->
        </section> <!-- cd-timeline -->
    </div>
</template>

<script>
export default {
    name: 'Roadmap',
    data: () => ({
        roadmapList: [
            {
                title: 'Q1 2022',
                items: [
                    {icon: 'RMcheckicon', name: 'Building Concep'},
                    {icon: 'RMcheckicon', name: 'Website & Token Launch'},
                    {icon: 'RMcheckicon', name: 'Build Community'},
                    {icon: 'RMcheckicon', name: 'Build Community'},
                ]
            },{
                title: 'Q2 2022',
                items: [
                    {icon: 'RMcheckicon', name: 'Airdrop Token $GNT'},
                    {icon: 'RMcheckicon', name: 'Airdrop NFTs for 1000 Wallet'},
                    {icon: 'RMcheckicon', name: 'IDO Token $GNT'},
                    {icon: 'RMcheckicon', name: 'Sale NFTs 4000 Edition OrbsGigant'},
                    {icon: 'none', name: 'Listing on PancakeSwap'},
                    {icon: 'none', name: 'Audit SmartContract'},
                    {icon: 'none', name: 'Gigant Ecosystem Building'},
                    {icon: 'none', name: 'NFT Marketplace v.0.1 Release'},
                    {icon: 'none', name: 'Gigant Game v.0.1 Release '},
                    {icon: 'none', name: 'Staking NFTs Launch'},
                    {icon: 'none', name: '$GNT CoinMarketcap & Coigecko Listing'}
                ]
            },{
                title: 'Q3 2022',
                items: [
                    {icon: 'RMcheckicon', name: 'Airdrop NFTs for 1000 Wallet'},
                    {icon: 'RMcheckicon', name: 'IDO Token $GNT'},
                    {icon: 'RMcheckicon', name: 'Sale NFTs 4000 Edition OrbsGigant'},
                    {icon: 'none', name: 'Listing on PancakeSwap'},
                    {icon: 'none', name: 'Audit SmartContract'},
                    {icon: 'none', name: 'Gigant Ecosystem Building'},
                    {icon: 'none', name: 'NFT Marketplace v.0.1 Release'},
                    {icon: 'none', name: 'Gigant Game v.0.1 Release '},
                    {icon: 'none', name: 'Staking NFTs Launch'}
                ]
            },{
                title: 'Q4',
                items: [
                    {icon: 'RMcheckicon', name: 'Airdrop NFTs for 1000 Wallet'},
                    {icon: 'RMcheckicon', name: 'IDO Token $GNT'},
                    {icon: 'RMcheckicon', name: 'Sale NFTs 4000 Edition OrbsGigant'},
                    {icon: 'none', name: 'Listing on PancakeSwap'},
                    {icon: 'none', name: 'Audit SmartContract'}
                ]
            },
        ]
    })
}
</script>