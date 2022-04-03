<template>
    <div>
        <h1 class="stack parallax-layer svelte-1ykiyx9">
            <span class="svelte-1ykiyx9 text-center">OUR PARTNERS</span>
        </h1>
        <section id="partner">
            <div class="wrapper-partner">
                <div class="image-partner-size" v-for="(data, i) in partnerList" :key="i">
                    <img :src="require('Assets/images/'+data.icon)" />
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'Partner',
    data: () => ({
        partnerList: [
            {
                icon: 'partners-animoca.svg'
            },{
                icon: 'partners-animoca.svg'
            },{
                icon: 'partners-animoca.svg'
            },{
                icon: 'partners-animoca.svg'
            },{
                icon: 'partners-animoca.svg'
            },{
                icon: 'partners-animoca.svg'
            },{
                icon: 'partners-animoca.svg'
            },
        ]
    })
}
</script>