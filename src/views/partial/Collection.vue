<template>
    <section id="collection" class="column svelte-1ykiyx9">
        <h1 class="title-info stack parallax-layer svelte-1ykiyx9">
            <span class="svelte-1ykiyx9 text-center">Gigant Collection</span>
        </h1>
        <div class="wrapper-collection svelte-1ykiyx9">
            <div class="image-review svelte-1ykiyx9 text-center" id="image-selected">
                <img :src="require('Assets/images/items/'+itemSelected.images)" class="svelte-1ykiyx9" />
                <div class="name-item">{{ itemSelected.title }}</div>
                <p class="descript-item">{{ itemSelected.description }}</p>
            </div>
            <div class="image-review-list">
                <div class="image-review-item svelte-1ykiyx9" v-for="(item, index) in items" :key="index" @click="handleSelectedData(item)">
                    <div class="bg-black svelte-rbkwku">
                        <img :src="require('Assets/images/items/'+item.images)" />
                    </div>
                    <p class="text-center">{{ item.title }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Collection',
    data: () => ({
        items: [
            {
                images: 'item-10.png',
                title: 'Lorem 1',
                description: 'Ini lorem 1'
            },{
                images: 'item-08.png',
                title: 'Lorem 2',
                description: 'ini lorem 2'
            },{
                images: 'item-09.png',
                title: 'Lorem 3',
                description: 'ini lorem 3'
            },{
                images: 'item-10.png',
                title: 'Lorem 4',
                description: 'ini lorem 4'
            },{
                images: 'item-08.png',
                title: 'Lorem 5',
                description: 'ini lorem 5'
            },{
                images: 'item-09.png',
                title: 'Lorem 6',
                description: 'ini lorem 6'
            },{
                images: 'item-10.png',
                title: 'Lorem 7',
                description: 'ini lorem 7'
            },{
                images: 'item-08.png',
                title: 'Lorem 8',
                description: 'ini lorem 8'
            },{
                images: 'item-09.png',
                title: 'Lorem 9',
                description: 'ini lorem 9'
            },
        ],
        itemSelected: {
            images: 'item-10.png',
            title: 'INI TEST 1',
            description: 'NAMA NYA TEST 1 selected'
        }
    }),
    methods: {
        handleSelectedData(data) {
            this.itemSelected = data
        }
    }
}
</script>