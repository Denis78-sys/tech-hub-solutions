<template>
    <div class="titulo-servico">
       <h1 class="text-titulo-secao text-azul-500 font-bold">{{ titulo }}</h1>
    </div>
</template>

<script>
export default {
    props:{
        // eslint-disable-next-line vue/require-prop-types
        titulo:{Type: String, required: true}
    }
}
</script>

<style scoped>

</style>