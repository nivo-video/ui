import type { Meta, StoryObj } from '@storybook/react'
import { Label } from '@nivovideo/ui/label'

const meta = {
  title: 'Components/Label',
  component: Label,
  args: {
    children: 'This is a label',
    size: 'default',
    required: false,
  },
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
      options: ['small', 'default'],
    },
    required: {
      control: {
        type: 'boolean',
      },
    },
  },
} satisfies Meta<typeof Label>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Small: Story = {
  args: {
    size: 'small',
  },
}

export const Required: Story = {
  args: {
    required: true,
  },
}
