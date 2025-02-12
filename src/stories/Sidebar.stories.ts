import type { Meta, StoryObj } from '@storybook/vue3'
import Sidebar07 from '@/components/ui/sidebar/Sidebar-07.vue'

// 1) Define metadata
const meta = {
  title: 'Blocks/Sidebar07', // or "Example/Sidebar07"
  component: Sidebar07,
  tags: ['autodocs'],
} satisfies Meta<typeof Sidebar07>

export default meta
type Story = StoryObj<typeof meta>

// 2) Simple default story
export const Default: Story = {
  // Optionally define args if you exposed props in Sidebar07.vue
  // For now, no custom props => just render as is
  render: () => ({
    components: { Sidebar07 },
    template: `<Sidebar07 />`,
  }),
}
