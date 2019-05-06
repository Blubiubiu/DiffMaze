<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
body {
  overflow: hidden;
}
#app {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  min-width: 1200px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #000;
  color: #f9fffb;
  user-select: none;
  font-size: 60px;
  font-weight: 600;
}
#app .part-wrapper {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 30px;
    text-align: left;
}
#app .end-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
