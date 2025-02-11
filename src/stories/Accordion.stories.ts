import type { Meta, StoryObj } from '@storybook/vue3';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../components/ui/accordion';

const meta = {
  title: 'Example/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['single', 'multiple'],
      description: 'Determines single or multiple open items',
    },
    collapsible: {
      control: 'boolean',
      description: 'Whether the accordion can be collapsed to no active items',
    },
  },
  args: {
    type: 'single',
    collapsible: true,
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = {
  render: (args) => ({
    components: { Accordion, AccordionItem, AccordionTrigger, AccordionContent },
    setup() {
      const accordionItems = [
        {
          value: 'item-1',
          title: 'Is it accessible?',
          content: 'Yes. It adheres to the WAI-ARIA design pattern.',
        },
        {
          value: 'item-2',
          title: 'Is it unstyled?',
          content: "Yes, it's unstyled. You're free to style it how you like.",
        },
        {
          value: 'item-3',
          title: 'Can it be animated?',
          content: 'Yes! Use the "transition" prop or your own transitions.',
        },
      ];
      return { args, accordionItems };
    },
    template: `
      <Accordion v-bind="args" class="w-full">
        <AccordionItem
          v-for="item in accordionItems"
          :key="item.value"
          :value="item.value"
        >
          <AccordionTrigger>
            {{ item.title }}
          </AccordionTrigger>
          <AccordionContent>
            {{ item.content }}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    `,
  }),
};
