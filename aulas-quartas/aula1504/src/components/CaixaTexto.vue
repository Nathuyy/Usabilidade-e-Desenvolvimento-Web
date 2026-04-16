<template>
  <div :class="'caixa ' + cor">{{ texto }}</div>
</template>
<script>
export default {
  name: 'CaixaTexto',
  props: {
    texto: {
      type: String,
      required: true,
    },
    cor: {
      type: String,
      default: 'red',
    },
  },
}
</script>
<style scoped>
.caixa {
  border: 1px solid black;
  padding: 10px;
  border-radius: 5px;
}
.red {
  background-color: red;
}

.blue {
  background-color: blue;
}

.yellow {
  background-color: yellow;
}
</style>
