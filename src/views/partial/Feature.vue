<template>
    <section class="column">
        <div class="stack svelte-1ykiyx9 mb-10">
            <span class="svelte-1ykiyx9 text-center text-36 font-bold">FEATURE</span>
        </div>
        <div class="flex lg:flex-col w-full gap-10 relative">
            <div class="grid grid-cols-1 gap-7 lg:grid-cols-3 select-none container">
                <div class="relative" v-for="(feature, i) in features" :key="i">
                    <div class="flex gap-7 justify-center">
                        <div class="lg:w-[60px] lg:h-[60px] w-[4rem] h-[4rem] text-25 rounded-full border-[3px] lg:p-[12px] p-4 shrink-0 flex items-center">
                            <em :class="feature.icon"></em>
                        </div>
                        <div class="flex flex-wrap">
                            <p class="text-24">{{feature.title}}</p>
                            <p class="text-17">{{feature.text}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Feature',
    data: () => ({
        features: [
            {
                icon: 'fas fa-gamepad',
                title: 'FPS / TPS',
                text: 'BornToDieGame can be played in both FPS (First Person Shooter) and TPS (Third Person Shooter) mode.'
            },
            {
                icon: 'fas fa-paper-plane',
                title: 'FPS / TPS',
                text: 'BornToDieGame can be played in both FPS (First Person Shooter) and TPS (Third Person Shooter) mode.'
            },
            {
                icon: 'fas fa-gamepad',
                title: 'FPS / TPS',
                text: 'BornToDieGame can be played in both FPS (First Person Shooter) and TPS (Third Person Shooter) mode.'
            },
            {
                icon: 'fas fa-robot',
                title: 'FPS / TPS',
                text: 'BornToDieGame can be played in both FPS (First Person Shooter) and TPS (Third Person Shooter) mode.'
            },
            {
                icon: 'fas fa-smile',
                title: 'FPS / TPS',
                text: 'BornToDieGame can be played in both FPS (First Person Shooter) and TPS (Third Person Shooter) mode.'
            },
            {
                icon: 'fas fa-layer-group',
                title: 'FPS / TPS',
                text: 'BornToDieGame can be played in both FPS (First Person Shooter) and TPS (Third Person Shooter) mode.'
            },
        ]
    })
}
</script>