<template>
    <header class="column row-tablet svelte-rbkwku">
        <nav class="column row-tablet svelte-rbkwku">
            <div class="header-left row svelte-rbkwku">
                <a class="logo row svelte-rbkwku active" href="/">
                    <img :src="require('Assets/images/items/headerv1.png')" alt="Hedgies" width="200" height="100">
                </a>
            </div>
            <div class="stack">
                <ul class="column row-tablet svelte-rbkwku" style="margin-left: 80px">
                    <li class="svelte-rbkwku">
                        <a href="#" class="row svelte-rbkwku">Home </a>
                    </li>
                    <li class="svelte-rbkwku">
                        <a href="#roadmap" class="row svelte-rbkwku">Roadmap<!-- <span class="tag svelte-rbkwku">Ended</span> -->
                        </a>
                    </li>
                    <li class="svelte-rbkwku">
                        <a href="#tokenomics" class="row svelte-rbkwku">Tokenomics
                        </a>
                    </li>
                    <li class="svelte-rbkwku">
                        <a href="#team" class="row svelte-rbkwku">Team
                        </a>
                    </li>
                    <li class="svelte-rbkwku">
                        <a href="#" class="row svelte-rbkwku" target="_blank">LitePaper
                        </a>
                    </li>
                    <li class="svelte-rbkwku">
                        <a href="#" class="row svelte-rbkwku" target="_blank">About
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="header-right row svelte-rbkwku">
            <div class="stack align-end">
                <button class="" style="">Open App 
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-rbkwku">
                        <path d="M5.077 4.5h-.692C3.62 4.5 3 5.12 3 5.885v6.23c0 .765.62 1.385 1.385 1.385h6.23c.765 0 1.385-.62 1.385-1.385V11" stroke="#6f6e84" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="m8 8.5 5-5m0 0H9m4 0v4" stroke="#6f6e84" stroke-width="1.25" stroke-linecap="round"></path>
                    </svg>
                </button>
            </div>
            <div class="burger svelte-rbkwku" role="button" tabindex="0">
                <span class="burger-icon svelte-rbkwku"></span>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Navigation'
}
</script>