import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { Slider } from '@/components/ui/slider' 

const meta = {
  title: 'Example/Slider',
  component: Slider,
  tags: ['autodocs'],
  argTypes: {
    min: { control: 'number', description: 'Minimum value' },
    max: { control: 'number', description: 'Maximum value' },
    step: { control: 'number', description: 'Step value' },
    defaultValue: { description: 'Default slider value' },
  },
  args: {
    min: 0,
    max: 100,
    step: 1,
    defaultValue: [50],
  },
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: (args) => ({
    components: { Slider },
    setup() {
      const value = ref(args.defaultValue)

      return { args, value }
    },
    template: `
      <div class="p-4 w-[300px]">
        <Slider v-bind="args" v-model="value"/>
      </div>
    `,
  }),
}

export const WithIndicator: Story = {
  render: (args) => ({
    components: { Slider },
    setup() {
      const value = ref(args.defaultValue)

      return { args, value }
    },
    template: `
      <div class="p-4 w-[300px]">
        <p class="mb-2 text-sm text-muted-foreground">
          Selected Value: <strong>{{ value[0] }}</strong>
        </p>
        <Slider v-bind="args" v-model="value" />
      </div>
    `,
  }),
}
