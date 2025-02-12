import type { Meta, StoryObj } from '@storybook/vue3'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from '@/components/ui/card'

import { Button } from '@/components/ui/button'

const meta = {
  title: 'Example/Card',
  component: Card,
  tags: ['autodocs'],

  argTypes: {
  },
  args: {
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => ({
    components: { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Button },
    setup() {
      return { args }
    },
    template: `
      <!-- The "v-bind='args'" spreads any props you might define on Card -->
      <Card class="w-[300px]" v-bind="args">
        <CardHeader>
          <CardTitle>Profile</CardTitle>
          <CardDescription>Make changes to your account here.</CardDescription>
        </CardHeader>

        <CardContent>
          <p class="text-sm text-muted-foreground">
            This is a sample card content area for demonstration purposes.
          </p>
        </CardContent>

        <CardFooter>
          <Button variant="default">Save changes</Button>
        </CardFooter>
      </Card>
    `,
  }),
}
