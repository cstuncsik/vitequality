<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button type="button" @click="counterStore.increment">count is {{ counterStore.count }}</button>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/store/counter'

const counterStore = useCounterStore()
</script>
