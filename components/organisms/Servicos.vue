<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="servicos mt-28">
    <h1 class="text-titulo-principal text-center font-extrabold text-azul-500 lg:mb-10 md:mb-8 sm:mb-8">Serviços</h1>
    <div class="lg:flex lg:flex-row md:flex-col justify-between">
      <div v-for="itens in itensServicos" :key="itens.id">
        <Servico
          class="lg:w-servico-l-s md:w-servico-m sm:w-servico-l-s lg:mb-0 md:mb-8 sm:mb-8"
          :link-imagem="itens.imagem"
          :texto-serv="itens.texto"
          :titulo-serv="itens.titulo"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itensServicos: [
        {
          id: 1,
          imagem: "webservico.svg",
          titulo: "Web",
          texto:
            "Oferecemos serviços especializados de desenvolvimento de sites personalizados, adaptados às necessidades exclusivas de sua empresa. Maximize sua visibilidade na web e aprimore a experiência do usuário com um site profissionalmente desenvolvido pela TechHub Solutions.",
        },
        {
          id: 2,
          imagem: "desktopServico.svg",
          titulo: "Desktop",
          texto:
            "Desenvolvemos aplicativos desktop personalizados para otimizar os processos internos de sua empresa. Aumente a produtividade e simplifique suas operações com soluções eficientes e intuitivas, desenvolvidas por nossa equipe experiente de especialistas.",
        },
        {
          id: 3,
          imagem: "appServico.svg",
          titulo: "Apps",
          texto:
            "Criamos aplicativos móveis inovadores para impulsionar o engajamento do usuário e promover o crescimento de seu negócio. Ofereça experiências envolventes onde seus clientes estão, com soluções personalizadas e desenvolvidas por nossa equipe de profissionais especializada.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
