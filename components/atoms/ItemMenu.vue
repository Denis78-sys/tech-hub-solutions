<!-- eslint-disable vue/require-prop-types -->
<template>
  <div class="item-menu transform transition-transform duration-300 hover:scale-105 hover:bg-azul-500 hover:text-branco rounded">
    <a class="text-base" :href="linkM">{{ itemM }}</a>
  </div>
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-prop-types
    itemM: { Type: String, required: true },
    // eslint-disable-next-line vue/require-prop-types
    linkM: { Type: String, required: true },
  },
};
</script>

<style scoped></style>
