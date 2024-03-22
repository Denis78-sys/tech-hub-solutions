<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="menu">
         <ul class="md:flex md:flex-row sm:flex-col md:gap-12 sm:gap-x-5">
            <li v-for="item in itens" :key="item.id">
               <!-- eslint-disable-next-line vue/attribute-hyphenation -->
                <ItemMenu :itemM="item.nome" :linkM="item.linkPagina"/>
            </li>
         </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            itens: [{ id: 1, nome: "Home", linkPagina: "" },
            { id: 2, nome: "Sobre nós", linkPagina: "" },
            { id: 3, nome: "Serviço", linkPagina: "" },
            { id: 4, nome: "Contato", linkPagina: "" }
        ]
        };
    }
}
</script>

<style lang="scss" scoped>

</style>