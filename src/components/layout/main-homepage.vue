<template>
    <div id="svelte">
        <navigation-bar></navigation-bar>
        <router-view :key="$route.fullPath"></router-view>
    </div>
</template>

<script>
export default {
    name: 'MainHomepage',
    components: {
        'navigation-bar': () => import('Components/layout/Navigation.vue')
    }
}
</script>