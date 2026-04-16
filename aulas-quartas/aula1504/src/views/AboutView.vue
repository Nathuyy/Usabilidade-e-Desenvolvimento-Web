<template>
  <div class="about">
    <h1>Agora sim eu programei</h1>
    <div v-for="cliente in clientes" v-bind:key="cliente.nome">
      <CardCliente v-if="cliente.idade >= 18" :cliente="cliente" />
    </div>
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
        { nome: 'nathy', email: 'nathy@gmail.com', idade: 18 },
        { nome: 'nathy1', email: 'nathy@gmail.com', idade: 15 },
        { nome: 'nathy2', email: 'nathy@gmail.com', idade: 30 },
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
