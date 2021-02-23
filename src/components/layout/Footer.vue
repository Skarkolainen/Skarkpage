<template>
  <v-footer class="secondary" fixed app>
    <v-col class="text-center primary--text" cols="12">
      {{ new Date().getFullYear() }} — <strong>Skarkpage</strong>
    </v-col>
  </v-footer>
</template>

<script>
export default {};
</script>

<style scoped>
.v-footer {
  z-index: 999999 !important;
}
</style>