<template>
    <section id="partner" class="svelte-1ykiyx9 column">
        <h1 class="title-info stack svelte-1ykiyx9">
            <span class="svelte-1ykiyx9 text-center text-36 font-bold">OUR PARTNERS</span>
        </h1>
        <div class="wrapper-partner">
            <div class="image-partner-size" v-for="(data, i) in partnerList" :key="i">
                <img :src="require('Assets/images/'+data.icon)" />
            </div>
        </div>
    </section>
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