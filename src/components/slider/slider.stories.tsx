/*
export default {
  argTypes: {
    setVolume: { action: 'volumeChanged' },
    zoom: {
      control: { max: 2, min: 0.8, step: 0.1, type: 'range' },
    },
  },
  component: SliderComponent,
  tags: ['autodocs'],
  title: 'Components/SliderComponent',
} as Meta<typeof SliderComponent>
*/

import { Meta, StoryFn, StoryObj } from '@storybook/react'

import { PropsSlider, SliderComponent } from './slider'

const meta: Meta<PropsSlider> = {
  argTypes: {
    setVolume: { action: 'volumeChanged' },
    zoom: {
      control: { max: 2, min: 0.8, step: 0.1, type: 'range' },
    },
  },
  component: SliderComponent,
  tags: ['autodocs'],
  title: 'Components/SliderComponent',
}

export default meta

const Template: StoryFn<PropsSlider> = args => <SliderComponent {...args} />

export const Default: StoryObj<PropsSlider> = Template.bind({
  args: {
    zoom: 1,
  },
})
