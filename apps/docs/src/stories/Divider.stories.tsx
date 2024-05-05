import type { Meta, StoryObj } from '@storybook/react'
import { Divider } from '@nivo/ui/divider'

const meta = {
  title: 'Components/Divider',
  component: Divider,
  args: {
    decorative: true,
  },
  argTypes: {
    orientation: {
      control: {
        type: 'select',
      },
      options: ['horizontal', 'vertical'],
    },
    decorative: {
      control: {
        type: 'boolean',
      },
    },
  },
} satisfies Meta<typeof Divider>

export default meta

type Story = StoryObj<typeof meta>

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
  },
  decorators: [
    Story => (
      <div className="h-96">
        <Story />
      </div>
    ),
  ],
}

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
  },
}
