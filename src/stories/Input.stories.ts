import { Input } from '@/components/ui/input'
import type { Meta, StoryObj } from '@storybook/vue3'

const meta = {
  title: 'Example/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    defaultValue: {
      control: 'text',
      description: 'Initial value if modelValue is not set',

    },
    modelValue: {
      control: 'text',
      description: 'Controlled value for the input (v-model)',

    },
    class: {
      control: 'text',
      description: 'Optional custom classes',
    },
  },
  args: {
    defaultValue: 'Hello shadcn-vue',
    placeholder: "Enter something..."
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => ({
    components: { Input },
    setup() {
      return { args }
    },
    template: `<Input v-bind="args" />`,
  }),
}
