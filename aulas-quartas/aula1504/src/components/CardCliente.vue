|
<template>
  <CaixaTexto :texto="cliente.nome" />
  <CaixaTexto :texto="cliente.email" />
  <CaixaTexto :texto="cliente.idade" />
</template>
<script>
import CaixaTexto from './CaixaTexto.vue'

export default {
  name: 'CardCliente',
  props: {
    cliente: { type: Object, required: true },
  },
  components: { CaixaTexto },
}
</script>
<style scoped></style>
