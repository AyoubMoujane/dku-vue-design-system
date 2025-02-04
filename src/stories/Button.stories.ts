import type { Meta, StoryObj } from '@storybook/vue3';
import { Button } from '../components/ui/button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Example/Button',
  component: Button,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    variant: { options: ['default','secondary', 'ghost', 'outline', 'link'] }
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    variant: "default",
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `<Button v-bind="args">Primary Button</Button>`,
  }),
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `<Button v-bind="args">Secondary Button</Button>`,
  }),
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `<Button v-bind="args">Ghost Button</Button>`,
  }),
};

export const Outline: Story = {
  args: {
    variant: "outline",
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `<Button v-bind="args">Outline Button</Button>`,
  }),
};

export const Link: Story = {
  args: {
    variant: "link",
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `<Button v-bind="args">Link Button</Button>`,
  }),
};