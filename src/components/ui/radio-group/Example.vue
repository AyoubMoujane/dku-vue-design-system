<script setup lang="ts">
import { Label } from '@/components/ui/label'
import { RadioGroup } from '@/components/ui/radio-group'
import RadioGroupItemWithText from './RadioGroupItemWithText.vue' // Adjust path as needed
</script>

<template>
  <RadioGroup default-value="comfortable">
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
    <div class="flex flex-col">
      <Label for="r3" class="mb-1.5 text-[#CE1228]">
        Error message
      </Label>
      <RadioGroupItemWithText
        id="r3"
        value="option3"
        :is-in-error="true"
        label-text="Option 3"
        description="Description for option 3"
      />
    </div>
    <RadioGroupItemWithText
      id="r4"
      value="option4"
      label-text="Option 4"
    />
  </RadioGroup>
</template>