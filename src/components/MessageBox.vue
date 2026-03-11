<template>
  <div>
    <p>{{ message }}</p>
    <button @click="thankyouMessage">ありがとうを送る</button>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const message = ref('こんにちは')

    const thankyouMessage = () => {
      message.value = 'どうも'
    }
    return {
      message,
      thankyouMessage,
    }
  },
}
</script>
<style>
.box {
  border: 1px solid #333;
  padding: 20px;
  width: 200px;
}
</style>
