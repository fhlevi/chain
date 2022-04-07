<template>
    <section id="team" class="svelte-1ykiyx9 column">
        <h1 class="mb-10 stack svelte-1ykiyx9">
            <span class="svelte-1ykiyx9 text-center text-36 font-bold">OUR TEAM</span>
        </h1>
        <div class="wrapper-team svelte-1ykiyx9">
            <div class="item-team" v-for="(item, index) in listTeam" :key="index">
                <img :src="require('Assets/images/items/'+item.img)" />
                <div class="name text-center">{{ item.name }}</div>
                <div class="role text-center">{{ item.role }}</div>
            </div>
        </div>
    </section>
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