<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="rodape">
    <div class="bg-bg-footer1 flex justify-center lg:mt-48 md:mt-24 sm:mt-14 pb-8">
      <Container
        class="flex md:flex-row sm:flex-col content-center md:gap-32 sm:gap-4 mt-8"
      >
        <div class="md:mb-0 sm:mb-8">
          <a href="" class="lg:w-32 md:w-20 sm:w-16">
            <img :src="require('@/assets/images/LOGO2.svg')" alt="Logo2" />
          </a>
          <p class="text-fonte-footer text-sm mt-4">
            Construindo o futuro da tecnologia
          </p>
        </div>
        <div>
          <h3 class="font-bold text-cinza mb-2">Serviços</h3>
          <ul class="text-fonte-footer text-sm">
            <li class="mb-2"><a href="#servicos">Desenvolvimento</a></li>
            <li class="mb-2"><a href="#servicos">Desktop</a></li>
            <li class="mb-2"><a href="#servicos">Aplicativos</a></li>
          </ul>
        </div>
      </Container>
    </div>
    <div class="bg-bg-footer2 flex justify-center">
        <Container>
            <p class="text-fonte-footer text-sm pt-8 pb-8">&copy; 2024 Tech Hub Solutions. Todos os direitos reservados.</p>
            
        </Container>
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

<style scoped></style>
