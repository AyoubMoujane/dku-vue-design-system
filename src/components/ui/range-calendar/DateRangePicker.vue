<template>
  <Popover>
    <PopoverTrigger as-child>
      <Button variant="outline" class="w-[280px] justify-start text-left font-normal">
        <span>{{ formattedRange }}</span>
        <CalendarIcon class="ml-auto h-4 w-4" />
      </Button>
    </PopoverTrigger>
    <PopoverContent class="w-auto p-0">
      <RangeCalendar v-model="internalValue" />
    </PopoverContent>
  </Popover>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { RangeCalendar } from '@/components/ui/range-calendar';
import { CalendarIcon } from 'lucide-vue-next';
import { CalendarDate } from '@internationalized/date';

// Define props for modelValue
interface Props {
  modelValue: { start: CalendarDate; end: CalendarDate } | null;
}

const props = defineProps<Props>();
const emit = defineEmits(['update:modelValue']);

// Two-way binding with computed property
const internalValue = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit('update:modelValue', value);
  },
});

// Function to format CalendarDate to string
const formatDate = (date: CalendarDate): string => {
  return `${date.year}-${String(date.month).padStart(2, '0')}-${String(date.day).padStart(2, '0')}`;
};

// Computed property for displaying the formatted range
const formattedRange = computed(() => {
  if (!props.modelValue || !props.modelValue.start || !props.modelValue.end) {
    return 'Select date range';
  }
  const start = formatDate(props.modelValue.start);
  const end = formatDate(props.modelValue.end);
  return `${start} - ${end}`;
});
</script>