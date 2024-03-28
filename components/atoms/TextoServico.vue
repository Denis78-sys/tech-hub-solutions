<template>
    <div class="texto-servico">
       <p class="md:text-justify sm:text-center text-paragrafo">{{ texto }}</p>
    </div>
</template>

<script>
export default {
    props:{
        // eslint-disable-next-line vue/require-prop-types
        texto:{Type: String, required: true}
    }
}
</script>

<style scoped>

</style>