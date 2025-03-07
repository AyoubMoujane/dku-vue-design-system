import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { CalendarDate } from '@internationalized/date';
import { DateRangePicker } from '@/components/ui/range-calendar'

// Meta configuration
const meta = {
    title: 'Example/DateRangePicker',
    component: DateRangePicker,
    tags: ['autodocs'],
    argTypes: {
        modelValue: {
            control: 'object',
            description: 'The selected date range',
        },
    },
} satisfies Meta<typeof DateRangePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
    render: (args) => ({
        components: { DateRangePicker },
        setup() {
            const selectedRange = ref({
                start: new CalendarDate(2023, 1, 1),
                end: new CalendarDate(2023, 1, 7),
            });
            return { args, selectedRange };
        },
        template: `
      <div>
        <DateRangePicker v-model="selectedRange" />
        <div class="mt-4">
          Selected Range: {{ selectedRange ? \`\${selectedRange.start.toString()} - \${selectedRange.end.toString()}\` : 'null' }}
        </div>
      </div>
    `,
    }),
};