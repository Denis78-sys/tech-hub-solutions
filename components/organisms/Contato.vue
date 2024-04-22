<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="contato" class="contato lg:mt-48 md:mt-24 sm:mt-14">
    <h1 class="text-titulo-secao text-azul-600 font-bold text-center">
      Fale conosco
    </h1>
    <div class="max-w-md mx-auto mt-8">
      <form>
        <div>
          <label for="nome" class="block text-sm font-medium text-azul-600"
            >Seu Nome:</label
          >

          <input
            id="nome"
            type="text"
            required
            class="mt-1 p-2 block w-full border border-azul-600 rounded-md focus:outline-none focus:border-indigo-500"
          />
        </div>
        <div class="mt-4">
          <label for="email" class="block text-sm font-medium text-azul-600"
            >Seu Email:</label
          >

          <input
            id="email"
            type="email"
            required
            class="mt-1 p-2 block w-full border border-azul-600 rounded-md focus:outline-none focus:border-indigo-500"
          />
        </div>
        <div class="mt-4">
          <label for="mensagem" class="block text-sm font-medium text-azul-600"
            >Digite sua mensagem:</label
          >
          <textarea
            id="mensagem"
            required
            rows="4"
            class="mt-1 p-2 block w-full border border-azul-600 rounded-md focus:outline-none focus:border-indigo-500"
          ></textarea>
        </div>
        <div class="mt-4">
          <button
            type="submit"
            class="w-full py-2 px-4 bg-azul-600 rounded-md shadow-sm text-sm font-medium text-branco bg-indigo-600 transform transition-transform duration-300 hover:scale-105"
          >
            Enviar
          </button>
        </div>
      </form>
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
