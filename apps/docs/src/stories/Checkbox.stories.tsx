import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from '@nivo/ui/checkbox'
import { InputErrorMessage } from '@nivo/ui/input-error-message'
import { Label } from '@nivo/ui/label'
import { useState } from 'react'

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {
    hasError: false,
  },
  argTypes: {
    hasError: {
      control: {
        type: 'boolean',
      },
    },
  },
} satisfies Meta<typeof Checkbox>

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
      <div className="flex items-center gap-2">
        <Story />
        <Label htmlFor="name" required>
          Your name
        </Label>
      </div>
    ),
  ],
}

export const WithErrorMessage: Story = {
  args: {
    hasError: true,
    id: 'terms',
  },
  decorators: [
    Story => {
      const [hasError, setHasError] = useState(true)
      return (
        <div className="flex w-fit flex-col gap-1.5">
          <div className="flex items-center gap-2">
            <Story
              args={{
                id: 'terms',
                hasError,
                onCheckedChange: checked => {
                  setHasError(!checked)
                },
              }}
            />
            <Label htmlFor="terms" required>
              I agree with the terms of use
            </Label>
          </div>
          {hasError && (
            <InputErrorMessage>
              Please accept the terms of use
            </InputErrorMessage>
          )}
        </div>
      )
    },
  ],
}
