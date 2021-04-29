<template>
  <div class="positioner">
    <Header />
  </div>
</template>

<script>
  import Header from '@/components/header'
  export default {
    components: {
      Header
    }
  }
</script>

<style>
  * {
    padding: 0;
    margin: 0;
    font-family: Geometria, sans-serif;
  }
  .positioner {
    width: 1024px;
    margin: 0 auto;
  }
  body {
    background-color: #1c1a1a;
  }
</style>
