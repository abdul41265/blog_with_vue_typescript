<template>
  <div class="spin"></div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.spin {
  display: block;
  width: 40px;
  height: 40px;
  margin: 30px auto;
  border: 3px solid transparent;
  border-radius: 50%;
  border-top-color: #1b95e0;
  animation: spin 1s ease infinite;
}

@keyframes spin {
  to { -webkit-transform: rotateZ(360deg);  }
}
</style>
