<script lang="ts" setup>
const num = useState<number>("random", () => Math.random());
const refreshNum = () => {
  num.value = Math.random();
};
</script>

<template>
  <div>
    <p>
      Number: <span>{{ num }}</span>
    </p>
    <button @click="refreshNum">Refresh</button>
  </div>
</template>
