import type { Meta, StoryObj } from '@storybook/react'
import { Alert } from '@nivo/ui/alert'

const meta = {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    type: {
      control: {
        type: 'select',
      },
      options: ['warn', 'info', 'success', 'error'],
    },
  },
} satisfies Meta<typeof Alert>

export default meta

type Story = StoryObj<typeof meta>

export const SuccessType: Story = {
  args: {
    type: 'success',
    children: <p>Successfully created the new webhook!</p>,
  },
}

export const InfoType: Story = {
  args: {
    type: 'info',
    children: <p>Joseph Oliveira joined nivo.video organization!</p>,
  },
}

export const WarnType: Story = {
  args: {
    type: 'warn',
    children: <p>Limit of retries has been reached on 3 webhook events!</p>,
  },
}

export const ErrorType: Story = {
  args: {
    type: 'error',
    children: <p>E-mail already in use! Sign in instead?</p>,
  },
}
