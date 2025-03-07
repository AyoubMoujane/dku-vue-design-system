<script setup lang="ts">
import type { SliderRootEmits, SliderRootProps } from 'reka-ui'
import { cn } from '@/lib/utils'
import { SliderRange, SliderRoot, SliderThumb, SliderTrack, useForwardPropsEmits } from 'reka-ui'
import { computed, type HTMLAttributes } from 'vue'
import { Input } from '../input'

const props = defineProps<SliderRootProps & { class?: HTMLAttributes['class'] }>()
const emits = defineEmits<SliderRootEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <div class="flex items-center w-full">
    <SliderRoot
      :class="cn(
        'relative flex w-full touch-none select-none items-center data-[orientation=vertical]:flex-col data-[orientation=vertical]:w-1.5 data-[orientation=vertical]:h-full',
        props.class,
      )"
      v-bind="forwarded"
    >
      <SliderTrack class="relative h-1.5 w-full data-[orientation=vertical]:w-1.5 grow overflow-hidden rounded-full bg-primary/20 data-[disabled]:bg-[hsl(0,0%,90%)]">
        <SliderRange class="absolute h-full data-[orientation=vertical]:w-full bg-primary data-[disabled]:bg-[hsl(0,0%,90%)]" />
      </SliderTrack>
      <SliderThumb
        v-for="(_, key) in modelValue"
        :key="key"
        class="block h-4 w-4 rounded-full bg-primary transition-colors active:ring-ring active:bg-ring hover:outline-none hover:ring-4 hover:bg-ring data-[disabled]:pointer-events-none data-[disabled]:bg-[hsl(0,0%,90%)]"
      />
    </SliderRoot>
    <Input :model-value="delegatedProps.modelValue[0]" class="ml-4 w-[50px] h-[20px]" />
  </div>
</template>
