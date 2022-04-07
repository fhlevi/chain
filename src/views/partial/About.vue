<template>
    <section id="about" class="svelte-1ykiyx9 column">  
        <div class="mb-10 stack svelte-1ykiyx9">
            <span class="svelte-1ykiyx9 text-center text-36 font-bold">ABOUT US</span>
        </div>
        <div class="wrapper-about svelte-1ykiyx9">
            <div class="text-18">
                <div class="mb-3">WHAT IS BSCPAD?</div>
                <div class="mb-3 font-semibold">The BSC Launch Pad is the first decentralized IDO platform for the Binance Smart Chain Network.</div>
                <div>
                    BSCPad will empower crypto currency projects with the ability to distribute tokens and raise liquidity.
                </div>
            </div>
            <figure class="img-about svelte-1ykiyx9">
                <img :src="require('Assets/images/items/99.png')" alt="" class="svelte-1ykiyx9" />
            </figure>
        </div>
    </section>
</template>

<script>
export default {
    name: 'About'
}
</script>