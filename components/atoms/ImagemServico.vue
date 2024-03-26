<!-- eslint-disable vue/require-default-prop -->
<template>
  <div class="imagem-servico">
    <img :src="require(`@/assets/images/servicos/${imagem}`)" alt="Foto" />
  </div>
</template>

<script>
export default {
  props:{
    // eslint-disable-next-line vue/require-prop-types
    imagem:{Type: String, required: true}
  }
};
</script>

<style scoped></style>
