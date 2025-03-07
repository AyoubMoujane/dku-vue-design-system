<script setup lang="ts">
import { Label } from '@/components/ui/label'
import { RadioGroupItem } from '@/components/ui/radio-group'
import { cn } from '@/lib/utils'

defineProps<{
  id: string
  value: string
  disabled?: boolean
  isInError?: boolean
  labelText: string
  description?: string
  errorMessage?: string
}>()
</script>

<template>
  <div class="flex flex-col">
    <!-- Error message (if provided) -->
    <Label v-if="errorMessage" :for="id" class="mb-1.5 text-[#CE1228]">
      {{ errorMessage }}
    </Label>
    <!-- Radio item and labels -->
    <div class="flex items-center space-x-2">
      <RadioGroupItem :id="id" :value="value" :disabled="disabled" :is-in-error="isInError" class="peer" />
      <div class="flex flex-col" :class="{
        'text-[#E5E5E5]': disabled,
        'hover:text-[#143384]': !disabled
      }">
        <Label :class="{ 'cursor-pointer': !disabled }" :for="id">
          {{ labelText }}
        </Label>
        <Label v-if="description" :for="id" :class="cn(
          'text-xs',
          {
            'text-[#666666]': !disabled,
            'cursor-pointer': !disabled,
          }
        )">
          {{ description }}
        </Label>
      </div>
    </div>
  </div>
</template>