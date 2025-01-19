<template>
  <div class="p-8">
    <h1 class="text-xl font-bold mb-4">Welcome to My App</h1>
    <Button @click="handleClick">Click Me</Button>
  </div>
</template>

<script setup>
import { Button } from '@/components/ui/button'

const handleClick = () => {
  console.log('Button clicked!')
}
</script>

<style scoped>
/* Optional: Add custom styles if needed */
</style>
