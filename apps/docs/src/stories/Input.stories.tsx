import type { Meta, StoryObj } from '@storybook/react'
import { Input } from '@nivo/ui/input'

const meta = {
  title: 'Components/Input',
  component: Input,
  args: {
    placeholder: 'Type your text',
  },
  argTypes: {
    size: {
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
