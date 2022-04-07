<template>
    <section id="roadmap" class="column">
        <div class="stack svelte-1ykiyx9 mb-10">
            <span class="svelte-1ykiyx9 text-center text-36 font-bold">ROADMAP</span>
        </div>
        <div class="flex lg:flex-col w-full gap-10 relative">
            <div class="grid grid-cols-1 lg:grid-cols-4 select-none container">
                <div class="h-[2px] w-full bg-brand-blue-300 absolute top-0 left-0 hidden lg:block"></div>
                <div class="relative" v-for="(item, i) in roadmapList" :key="i">
                    <div :class="`h-full w-[2px] absolute lg:h-[2px] lg:w-full lg:relative bg-brand-${item.bgcolor}`"></div>
                    <div :class="`bg-brand-${item.bgcolor} absolute rounded-full lg:left-auto h-4 w-4 mt-[5px] lg:-mt-2 -ml-[7px] lg:ml-0`"></div>
                    <p :class="`lg:my-3 ml-5 text-22 lg:ml-0 text-brand-${item.color} bg-gradient-to-b`">{{item.title}}</p>
                    <ul class="ml-5 lg:ml-0 mb-5 flex gap-2 flex-col">
                        <li class="list-disc list-inside px-3 text-primary font-normal" v-for="(itemChild, indexChild) in item.items" :key="indexChild">{{ itemChild.name }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Roadmap',
    data: () => ({
        roadmapList: [
            {
                title: 'Q1 2022',
                bgcolor: 'cyan-200',
                color: 'cyan-200',
                items: [
                    {icon: 'RMcheckicon', name: 'Building Concep'},
                    {icon: 'RMcheckicon', name: 'Website & Token Launch'},
                    {icon: 'RMcheckicon', name: 'Build Community'},
                    {icon: 'RMcheckicon', name: 'Build Community'},
                ]
            },{
                title: 'Q2 2022',
                bgcolor: 'blue-100',
                color: 'blue-100',
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
                bgcolor: 'blue-100',
                color: 'blue-100',
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
                bgcolor: 'blue-100',
                color: 'blue-100',
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