<template>
  <figure class="w-[400px] h-[240px] m-8" v-if="props.isLoading">
    <div
      placeholder-animation
      class="block h-[200px] bg-black-medium overflow-hidden relative rounded-md"
    ></div>
    <caption
      placeholder-animation
      :style="'width: ' + randomPlaceholderLength + 'px'"
      class="block h-[30px] overflow-hidden relative rounded-md bg-black-medium mt-2"
    ></caption>
  </figure>
  <figure class="w-[400px] m-8" v-else>
    <img
      :src="data?.url"
      :alt="data?.name"
      class="h-[200px] w-full rounded-md"
      :loading="key > 4 ? 'lazy' : ''"
    />
    <caption class="w-full mt-2 h-[30px]">
      {{
        data?.description
      }}
    </caption>
  </figure>
</template>

<script lang="ts" setup>
import { GalleryImage } from "@/composables/gallery";
import { defineProps, getCurrentInstance } from "vue";

interface Props {
  isLoading: boolean;
  data?: GalleryImage;
}

const key = getCurrentInstance()?.vnode.key as number;
const props = defineProps<Props>();
let randomPlaceholderLength = 200 + Math.floor(Math.random() * 200);
</script>
