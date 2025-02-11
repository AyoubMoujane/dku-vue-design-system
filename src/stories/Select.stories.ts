import type { Meta, StoryObj } from '@storybook/vue3'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from '../components/ui/select'

const meta = {
  title: 'Example/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => ({
    components: {
      Select,
      SelectTrigger,
      SelectValue,
      SelectContent,
      SelectItem,
    },
    setup() {
      const options = [
        { value: 'apple', label: 'Apple' },
        { value: 'banana', label: 'Banana' },
        { value: 'cherry', label: 'Cherry' },
      ]

      return { args, options }
    },
    template: `
      <Select v-bind="args">
        <SelectTrigger>
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem v-for="option in options" :key="option.value" :value="option.value">
            {{ option.label }}
          </SelectItem>
        </SelectContent>
      </Select>
    `,
  }),
}
