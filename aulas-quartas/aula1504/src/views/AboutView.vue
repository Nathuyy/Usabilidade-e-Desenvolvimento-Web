<template>
  <div class="about">
    <h1>Agora sim eu programei</h1>
    <CardCliente :cliente="clientes[0]" />
    <CaixaTexto texto="olha o texto ai" />
  </div>
</template>
<script>
import CaixaTexto from '@/components/CaixaTexto.vue'
import CardCliente from '@/components/CardCliente.vue'
export default {
  name: 'AboutView',
  components: {
    CaixaTexto,
    CardCliente,
  },
  data() {
    return {
      clientes: [
        { nome: 'nathy', email: 'nathy@gmail.com', idade: 20 },
        { nome: 'nathy1', email: 'nathy@gmail.com', idade: 20 },
        { nome: 'nathy2', email: 'nathy@gmail.com', idade: 20 },
      ],
    }
  },
}
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
