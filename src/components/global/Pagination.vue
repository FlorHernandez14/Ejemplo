<template>
  <ul class="flex m-9 justify-center">
    <li>
      <button
        @click="ChangePage(prev)"
        class="mx-1 bg-purple-500 cursor-pointer rounded-full p-2 w-12 h-12 text center text-lg text-white"
        :disabled="currentPage === 1"
      >
        <oh-vue-icon name="bi-arrow-left" scale="1.5" />
      </button>
    </li>
    <li
      class="mx-1 border font-semibold border-blue rounded-full p-2 w-12 h-12 text-center text-sm flex justify-center items-center cursor-pointer"
      v-for="page in pages"
      :class="
        page === currentPage ? 'bg-blue-950 text-white' : 'text-blue-950'
      "
      v-bind:key="page"
      @click="ChangePage(page)"
    >
    {{ page }}
  </li>
  <li>
    <button
      class="mx-1 bg-purple-500 rounded-full p-2 w-12 h-12 cursor-pointer text-center text-lg text-white"
      :disabled="currentPage === totalPag"
      @click="ChangePage(next)"
     >
        <oh-vue-icon name="bi-arrow-right" scale="1.5" />
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
   import  OhVueIcon from "../../plugins/oh-vue-icon";
const { pages, currentPage, totalPag, next, prev } = defineProps<Props>();

type Emits = {
  (event: "method", page: number | string): void;
};

const emits = defineEmits<Emits>();

const ChangePage = (page: number | string) =>{
  emits("method", page);
};

</script>

