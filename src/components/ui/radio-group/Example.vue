<script setup lang="ts">
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
</script>

<template>
  <RadioGroup default-value="comfortable">
    <div class="flex items-center space-x-2">
      <RadioGroupItem class="peer" id="r1" value="default" disabled />
      <div class="flex flex-col peer-data-[disabled]:text-[#E5E5E5] peer-not-data-[disabled]:hover:text-[#143384]">
        <Label for="r1">Default</Label>
      </div>
    </div>
    <div class="flex items-center space-x-2">
      <RadioGroupItem id="r2" value="comfortable" />
      <Label for="r2" class="hover:text-[#143384]">Comfortable</Label>
    </div>
    <div class="flex flex-col">
      <Label for="r3" class="mb-1.5 text-[#CE1228]">
        Error message
      </Label>
      <div class="flex items-center space-x-2">
        <RadioGroupItem class="peer" id="r3" value="compact" :is-in-error="true" />
        <div class="flex flex-col">
          <Label for="r3" class="hover:text-[#143384]">Compact</Label>
          <Label for="r3" class="text-xs text-[#666666]">Text description for the label</Label>
        </div>
      </div>
    </div>
    <div class="flex items-center space-x-2">
      <RadioGroupItem id="r4" value="other" />
      <Label for="r4" class="hover:text-[#143384]">Other</Label>
    </div>
  </RadioGroup>
</template>