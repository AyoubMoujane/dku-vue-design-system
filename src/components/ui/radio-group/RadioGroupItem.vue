<script setup lang="ts">
import type { RadioGroupItemProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { Circle } from 'lucide-vue-next'
import {
  RadioGroupIndicator,
  RadioGroupItem,
  useForwardProps,
} from 'radix-vue'
import { computed, ref } from 'vue'

// Define props with additional custom props if needed
const props = defineProps<
  RadioGroupItemProps & {
    class?: HTMLAttributes['class']
    isInError?: boolean // Custom prop for error state
  }
>()

// Reactive state tracking
const isPressed = ref(false) // Track pressed state (e.g., during click)

// Compute delegated props (excluding class)
const delegatedProps = computed(() => {
  const { class: _, isInError, ...delegated } = props
  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)

// Handle press state (mousedown/mouseup)
const onMouseDown = () => {
  if (!props.disabled) isPressed.value = true
}
const onMouseUp = () => {
  isPressed.value = false
}
</script>

<template>
  <RadioGroupItem v-bind="forwardedProps" :class="cn(
    'relative aspect-square h-4 w-4 rounded-full border ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 data-[state=unchecked]:hover:text-[#EEEEEE] data-[state=unchecked]:text-transparent',
    {
      // Unselected states
      'data-[state=unchecked]:border-[#5B5B5B]': !props.disabled && !props.isInError,
      'data-[state=unchecked]:hover:border-[#929292]': !props.disabled && !props.isInError,
      // Selected states
      'data-[state=checked]:border-[#2B66FF] data-[state=checked]:text-[#2B66FF]': !props.isInError,
      'data-[state=checked]:border-[#214AB5]': isPressed && !props.isInError,
      'data-[state=checked]:hover:border-[#143384] data-[state=checked]:hover:text-[#143384]': !isPressed && !props.isInError,
      // Error state
      'border-[#CE1228]': props.isInError && !props.disabled,
      'hover:border-[#9C0C1D]': props.isInError && !props.disabled,
      // Others
      'border-[#E5E5E5]': props.disabled,
    },
    props.class
  )" @mousedown="onMouseDown" @mouseup="onMouseUp" @mouseleave="onMouseUp">
    <!-- Indicator for checked state -->
    <RadioGroupIndicator :class="cn('flex items-center justify-center peer', {
      // Selected states
      'data-[state=checked]:text-[#214AB5]': isPressed && !props.isInError,
      // Error states
      'text-[#CE1228]': props.isInError && !props.disabled,
      'hover:text-[#9C0C1D]': props.isInError && !props.disabled,
      // Others
      'text-[#E5E5E5]': props.disabled,
    })">
      <Circle :class="cn('h-2.5 w-2.5 fill-current')" />
    </RadioGroupIndicator>

    <!-- Grey circle for hover on unselected state -->
    <div :class="cn(
      'absolute inset-0 flex items-center justify-center',
      'peer-data-[state=checked]:hidden',
    )">
      <Circle class="h-2.5 w-2.5 fill-current" />
    </div>
  </RadioGroupItem>
</template>