<template>
    <ul class="flex m-9 justify-center">
        <li>
            <button
            @click="changePage(prev)"
            class="mx-1 bg-blue-950 cursor-pointer rounded-full p-2 w-12 h-12 text-center text-lg text-white"
            :disabled="currentPage === 1"
            >

            </button>

        </li>
        <li
            class="mx-1 border font-semibold border-blue rounded-full p-2 w-12 h-12 text-center text-sm flex justify-center items-center cursor-pointer"
            v-for="page in pages"
            :class="
            page === currentPage ? 'bg-blue-950 text-white' : 'text-blue-950'
            "
            v-bind:key="page"
            @click="changePage(page)"
         >
            {{ page }}
       </li>
        <li>
            <button
            class="mx-1 bg-blue-950 rounded-full p-2 w-12 h-12 cursor-pointer text-center text-lg text-white"
            :disabled="currentPage === totalPag"
            @click="changePage(next)"
            >

        </button>

       </li>
     </ul>

        
   
</template>
<script lang="ts" setup>
    interface Props {
       pages: Array<number | string>;
        currentPage: number;
        totalPag: number;
        next: number;
        prev: number;
    }
    const { pages, currentPage, totalPag, next, prev } = defineProps<Props>();

    type Emits = {
        (event: "method", page: number | string): void;
    }

    const emits = defineEmits<Emits>();

    const changePage = (page: number | string) => {
        emits("method", page);
    };
</script>