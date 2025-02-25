import type { Meta, StoryObj } from '@storybook/vue3';
import { RadioGroup, RadioGroupItem, ExampleRadio } from '../components/ui/radio-group';
import { Label } from '../components/ui/label';
import { ref } from 'vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Example/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'text',
      description: 'The currently selected value',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the radio group',
    },
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

/*
 *👇 Render functions are a framework-specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  args: {
    modelValue: 'option1',
    disabled: false,
  },
  render: (args) => ({
    components: { RadioGroup, RadioGroupItem, Label, ExampleRadio },
    setup() {
      const selectedValue = ref(args.modelValue);
      return { args, selectedValue };
    },
    template: `
        <ExampleRadio/>
    `,
  }),
};
