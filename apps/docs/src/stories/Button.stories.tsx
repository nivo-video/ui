import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@nivo/ui/button'

const meta = {
  title: 'Components/Button',
  component: Button,
  args: {
    asChild: false,
    children: 'Hello Button',
    disabled: false,
  },
  argTypes: {
    variant: {
      options: ['default', 'primary', 'secondary', 'danger', 'ghost'],
      control: {
        type: 'select',
      },
    },
    size: {
      options: ['default', 'small', 'medium'],
      control: {
        type: 'inline-radio',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    asChild: {
      control: {
        type: 'boolean',
      },
    },
    onClick: {
      action: 'click',
    },
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'default',
    onClick: () => alert('clicked'),
  },
}

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'default',
    onClick: () => alert('clicked'),
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'default',
    onClick: () => alert('clicked'),
  },
}

export const Danger: Story = {
  args: {
    variant: 'danger',
    size: 'default',
    onClick: () => alert('clicked'),
  },
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    size: 'default',
    onClick: () => alert('clicked'),
  },
}

export const Disabled: Story = {
  args: {
    variant: 'primary',
    size: 'default',
    disabled: true,
    onClick: () => alert('clicked'),
  },
}

export const AsChild: Story = {
  args: {
    variant: 'primary',
    size: 'default',
    asChild: true,
    children: (
      <a href="http://nivo.video" target="_blank" rel="noopener noreferrer">
        Go to page
      </a>
    ),
  },
}

export const Small: Story = {
  args: {
    variant: 'primary',
    size: 'small',
    onClick: () => alert('clicked'),
  },
}

export const Medium: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    onClick: () => alert('clicked'),
  },
}

export const DefaultSize: Story = {
  args: {
    variant: 'primary',
    size: 'default',
    onClick: () => alert('clicked'),
  },
}
