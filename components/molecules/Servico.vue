<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable-next-line vue/multi-word-component-names -->
<template>
  <div class="servico flex flex-col justify-center items-center gap-4">
    <ImagemServico :imagem="linkImagem" />
    <TituloServico :titulo="tituloServ" />
    <TextoServico :texto="textoServ" />
    <BotaoServico />
  </div>
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-prop-types
    linkImagem: { Type: String, required: true },
    // eslint-disable-next-line vue/require-prop-types
    textoServ: { Type: String, required: true },
    // eslint-disable-next-line vue/require-prop-types
    tituloServ: { Type: String, required: true },
  },
};
</script>

<style scoped></style>
