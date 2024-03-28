<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="sobre lg:mt-48 md:mt-24 sm:mt-14">
    <h1 class="text-titulo-secao text-azul-600 font-bold text-center">Sobre nós</h1>
    <div class="flex lg:flex-row md:flex-col-reverse sm:flex-col-reverse justify-between gap-8 mt-8 items-center">
      <div class="xl:w-full lg:w-full md:w-full sm:w-full">
        <h2 class="text-azul-600 font-bold text-subtitulo-secao mb-2 lg:text-left md:text-center sm:text-center">Construindo o Futuro da Tecnologia</h2>
        <p class="lg:text-justify text-paragrafo md:text-justify sm:text-center">
          Na TechHub Solutions, estamos comprometidos em oferecer soluções de
          tecnologia inovadoras e sob medida para impulsionar o sucesso de
          nossos clientes. Com uma equipe de especialistas apaixonados pela
          tecnologia e uma abordagem centrada no cliente, trabalhamos
          incansavelmente para superar as expectativas e fornecer resultados
          excepcionais em cada projeto. Desde nossa fundação, nos dedicamos a
          construir relacionamentos sólidos com nossos clientes, baseados na
          confiança, transparência e excelência técnica. Valorizamos a
          colaboração e a comunicação aberta, garantindo que cada cliente se
          sinta verdadeiramente parte do processo de desenvolvimento.
        </p>
      </div>
      <div class="lg:mb-0 md:mb-4 sm:mb-4">
        <img :src="require('@/assets/images/imagem-sobre.jpg')" alt="Foto sobre">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
