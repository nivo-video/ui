import type { Meta, StoryObj } from '@storybook/react'
import { Input } from '@nivovideo/ui/input'
import { InputErrorMessage } from '@nivovideo/ui/input-error-message'
import { Label } from '@nivovideo/ui/label'

const meta = {
  title: 'Components/Input',
  component: Input,
  args: {
    placeholder: 'Type your text',
    hasError: false,
  },
  argTypes: {
    size: {
      control: {
        type: 'text',
      },
    },
    hasError: {
      control: {
        type: 'boolean',
      },
    },
  },
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Errored: Story = {
  args: {
    hasError: true,
  },
}

export const WithLabel: Story = {
  args: {
    id: 'name',
  },
  decorators: [
    Story => (
      <div className="flex w-fit flex-col gap-1.5">
        <Label htmlFor="name" required>
          Your name
        </Label>
        <Story />
      </div>
    ),
  ],
}

export const WithErrorMessage: Story = {
  args: {
    hasError: true,
  },
  decorators: [
    Story => (
      <div className="flex w-fit flex-col gap-1.5">
        <Story />
        <InputErrorMessage>This is an error message</InputErrorMessage>
      </div>
    ),
  ],
}
