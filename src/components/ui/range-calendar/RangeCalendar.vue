<script lang="ts" setup>
import { cn } from '@/lib/utils'
import { RangeCalendarRoot, type RangeCalendarRootEmits, type RangeCalendarRootProps, useForwardPropsEmits } from 'reka-ui'
import { computed, type HTMLAttributes } from 'vue'
import { RangeCalendarCell, RangeCalendarCellTrigger, RangeCalendarGrid, RangeCalendarGridBody, RangeCalendarGridHead, RangeCalendarGridRow, RangeCalendarHeadCell, RangeCalendarHeader, RangeCalendarHeading, RangeCalendarNextButton, RangeCalendarPrevButton } from '.'

const props = defineProps<RangeCalendarRootProps & { class?: HTMLAttributes['class'] }>()

const emits = defineEmits<RangeCalendarRootEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)

const selectedRangeDaysDuration = computed(() => {
  if (props.modelValue?.start && props.modelValue?.end) {
    const endDate = props.modelValue.end.toDate("UTC");
    const startDate = props.modelValue.start.toDate("UTC");
    const diffTime = endDate.getTime() - startDate.getTime(); // Explicitly get milliseconds
    const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  } else {
    return 0;
  }
});

const formattedSelectedRange = computed(() => {
  if (!props.modelValue) return 'No range selected'
  const start = props.modelValue.start?.toDate("UTC")
  const end = props.modelValue.end?.toDate("UTC")
  if (start && end) {
    const startMonth = start.toLocaleString('default', { month: 'long' })
    const endMonth = end.toLocaleString('default', { month: 'long' })
    const startDay = start.getDate()
    const endDay = end.getDate()
    const year = start.getFullYear()

    if (startMonth === endMonth) {
      return `${startMonth} ${startDay} - ${endDay}, ${year}`
    } else {
      return `${startMonth} - ${endMonth}, ${year}`
    }
  }

})

</script>

<template>
  <RangeCalendarRoot
    v-slot="{ grid, weekDays }"
    :class="cn(props.class)"
    v-bind="forwarded"
    weekdayFormat="short"
  >
    <RangeCalendarHeader>
      <div class="flex flex-col w-full">
        <div class="bg-[#214AB5] text-white rounded-t-md p-3 text-[12px] font-normal leading-[20px]">
          <div>
            {{ formattedSelectedRange }}
          </div>
          <div class="text-[20px] font-semibold leading-[32px]">
            {{ selectedRangeDaysDuration }} days
          </div>
        </div>
        <div class="flex w-full justify-center pt-3">
          <div class="flex items-center">
            <RangeCalendarPrevButton step="month"/>
            <RangeCalendarHeading>
              <template #default="{ headingValue }">
                {{ headingValue.split(' ')[0] }}
              </template>
            </RangeCalendarHeading>
            <RangeCalendarNextButton step="month" />
          </div>
          <div class="flex items-center">
            <RangeCalendarPrevButton step="year"/>
            <RangeCalendarHeading>
              <template #default="{ headingValue }">
                {{ headingValue.split(' ')[1] }}
              </template>
            </RangeCalendarHeading>
            <RangeCalendarNextButton step="year"/>
          </div>
        </div>
      </div>
    </RangeCalendarHeader>

    <div class="flex flex-col gap-y-4 mt-4 sm:flex-row sm:gap-x-4 sm:gap-y-0 p-3">
      <RangeCalendarGrid v-for="month in grid" :key="month.value.toString()">
        <RangeCalendarGridHead>
          <RangeCalendarGridRow>
            <RangeCalendarHeadCell
              v-for="day in weekDays" :key="day"
            >
              {{ day }}
            </RangeCalendarHeadCell>
          </RangeCalendarGridRow>
        </RangeCalendarGridHead>
        <RangeCalendarGridBody>
          <RangeCalendarGridRow v-for="(weekDates, index) in month.rows" :key="`weekDate-${index}`" class="mt-2 w-full">
            <RangeCalendarCell
              v-for="weekDate in weekDates"
              :key="weekDate.toString()"
              :date="weekDate"
            >
              <RangeCalendarCellTrigger
                :day="weekDate"
                :month="month.value"
              />
            </RangeCalendarCell>
          </RangeCalendarGridRow>
        </RangeCalendarGridBody>
      </RangeCalendarGrid>
    </div>
  </RangeCalendarRoot>
</template>
