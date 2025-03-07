<script lang="ts" setup>
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { ChevronLeft } from 'lucide-vue-next'
import { RangeCalendarPrev, type RangeCalendarPrevProps, useForwardProps } from 'reka-ui'
import { computed, type HTMLAttributes } from 'vue'
import type { DateValue } from '@internationalized/date'

const props = defineProps<RangeCalendarPrevProps & { class?: HTMLAttributes['class'], step: "year" | "month" }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)

forwardedProps.value.prevPage = (date: DateValue) => {
  if (props.step === 'year') {
    return date.subtract({ years: 1 })
  } else {
    return date.subtract({ months: 1 })
  }
}
</script>

<template>
  <RangeCalendarPrev
    :class="cn(
    buttonVariants({ variant: 'ghost' }),
    'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
    props.class,
    )"
    v-bind="forwardedProps"
  >
    <slot>
      <ChevronLeft class="h-4 w-4" />
    </slot>
  </RangeCalendarPrev>
</template>
