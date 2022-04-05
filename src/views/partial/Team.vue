<template>
    <div>
        <h1 class="stack parallax-layer svelte-1ykiyx9">
            <span class="svelte-1ykiyx9 text-center text-36 font-bold">OUR TEAM</span>
        </h1>
        <section id="team" class="svelte-1ykiyx9">
            <div class="wrapper-team svelte-1ykiyx9">
                <div class="item-team" v-for="(item, index) in listTeam" :key="index">
                    <img :src="require('Assets/images/items/'+item.img)" />
                    <div class="name text-center">{{ item.name }}</div>
                    <div class="role text-center">{{ item.role }}</div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'Team',
    data: () => ({
        listTeam: [
            {
                img: '11.png',
                name: 'Lorem',
                role: 'lorem'
            },{
                img: '11.png',
                name: 'Lorem',
                role: 'lorem'
            },{
                img: '11.png',
                name: 'Lorem',
                role: 'lorem'
            },{
                img: '11.png',
                name: 'Lorem',
                role: 'lorem'
            },{
                img: '11.png',
                name: 'Lorem',
                role: 'lorem'
            },
        ]
    })
}
</script>