<script setup lang="ts">
import { RadioGroup } from '@/components/ui/radio-group'
import RadioGroupItemWithText from './RadioGroupItemWithText.vue' // Adjust path as needed
</script>

<template>
  <RadioGroup default-value="option2">
    <RadioGroupItemWithText
      id="r1"
      value="option1"
      disabled
      label-text="Option 1"
      description="Description for option 1"
    />
    <RadioGroupItemWithText
      id="r2"
      value="option2"
      label-text="Option 2"
    />
    <RadioGroupItemWithText
      id="r3"
      value="option3"
      :is-in-error="true"
      label-text="Option 3"
      description="Description for option 3"
      error-message="Error message"
    />
    <RadioGroupItemWithText
      id="r4"
      value="option4"
      label-text="Option 4"
    />
  </RadioGroup>
</template>