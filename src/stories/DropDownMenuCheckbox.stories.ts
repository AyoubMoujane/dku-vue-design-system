import type { Meta, StoryObj } from '@storybook/vue3'
import DropdownMenuCheckboxExample from '@/components/ui/dropdown-menu/DropdownMenuCheckboxExample.vue'

const meta: Meta<typeof DropdownMenuCheckboxExample> = {
  title: 'Components/DropdownMenuCheckbox',
  component: DropdownMenuCheckboxExample,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof DropdownMenuCheckboxExample>

export const Default: Story = {
  render: () => ({
    components: { DropdownMenuCheckboxExample },
    template: '<DropdownMenuCheckboxExample />',
  }),
}