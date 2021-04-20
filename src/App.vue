<template>
  <div class="positioner">
    <header>
      <div class="menu-container">
        <nav>
          <li class=""><a href="" class="">Биография</a></li>
          <li class=""><a href="" class="">Достижения</a></li>
          <li class=""><a href="" class="">Викторина</a></li>
        </nav>
      </div>
    </header>
    <main>
      <div class="wrapper">
        <div><img src="photo1.jpg" width="20%" height="20%"></div>

        <div class="fio"></div>

        <div class="phone" hidden>
          89211834241
        </div>

        <button class="show-phone">
          Показать телефон
        </button>
      </div>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  * {
    padding: 0;
    margin: 0;
    font-family: Geometria, sans-serif;
  }
  /*@font-face {*/
  /*    font-family: "Geometria";*/
  /*    src: url("fonts/geometria.ttf") format("opentype");*/
  /*}*/
  .positioner {
    width: 1024px;
    margin: 0 auto;
  }
  body {
    background-color: #1c1a1a;
  }
  header {
    margin: 0;
    padding-top: 5px;
    padding-bottom: 5px;
    list-style: none;
    background-color: #ffeb8f;
    width: 100%;
    font-size: 20px;
    line-height: 1.4;
  }
  .menu-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
  .menu-container nav {
    padding-left: 10px;
  }

  .menu-container nav a {
    padding: 8px 10px;
  }

  .menu-container a {
    color: #130621;
    text-decoration: none;
  }

  .menu-container li {
    display: inline-block;
  }
</style>

