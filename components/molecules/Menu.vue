<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="menu">
    <nav class="flex gap-8">
      <ul
        class="nav md:flex md:flex-row sm:flex-col lg:gap-12 md:gap-x-8 sm:gap-x-0 sm:gap-y-8"
        :class="{ hidden: !menuAtivo }"
      >
        <li v-for="item in itens" :key="item.id">
          <!-- eslint-disable-next-line vue/attribute-hyphenation -->
          <ItemMenu :itemM="item.nome" :linkM="item.linkPagina" />
        </li>
      </ul>
      <span class="md:hidden sm:block cursor-pointer" @click="ativarMenu()">
        <img ref="icone" src="@/assets/images/hamburguer.svg" alt="Botão" />
      </span>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itens: [
        { id: 1, nome: "Home", linkPagina: "#header" },
        { id: 2, nome: "Sobre nós", linkPagina: "#sobre" },
        { id: 3, nome: "Serviços", linkPagina: "#servicos" },
        { id: 4, nome: "Contato", linkPagina: "#contato" },
      ],
      menuAtivo: false, // Inicialmente o menu está inativo
    };
  },

  methods: {
    ativarMenu() {
      this.menuAtivo = !this.menuAtivo; // Inverte o estado do menu
      const icon = this.$refs.icone;

      if (this.menuAtivo === true) {
        icon.src = require("@/assets/images/close.svg");
      } else {
        icon.src = require("@/assets/images/hamburguer.svg");
      }
    },
  },
};
</script>

<style scoped></style>
