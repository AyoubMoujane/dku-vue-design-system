<script lang="ts" setup>
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { ChevronRight } from 'lucide-vue-next'
import { RangeCalendarNext, type RangeCalendarNextProps, useForwardProps } from 'reka-ui'
import { computed, type HTMLAttributes } from 'vue'
import type { DateValue } from '@internationalized/date'

const props = defineProps<RangeCalendarNextProps & { class?: HTMLAttributes['class'], step: "year" | "month" }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)

forwardedProps.value.nextPage = (date: DateValue) => {
  if (props.step === 'year') {
    return date.add({ years: 1 })
  } else {
    return date.add({ months: 1 })
  }
}
</script>

<template>
  <RangeCalendarNext
    :class="cn(
      buttonVariants({ variant: 'ghost' }),
      'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
      props.class,
    )"
    v-bind="forwardedProps"
  >
    <slot>
      <ChevronRight class="h-4 w-4" />
    </slot>
  </RangeCalendarNext>
</template>
