import React from "react";
import Button, { ButtonProps } from "./Buttons";
import { Story } from '@storybook/react';
import Center from "../Center/Center";

export default {
    title: 'Button',
    component: Button,
    decorators:[(story:any)=><Center>{story()}</Center>]
}

export const Primary = () => {
    return <Button variant='primary'>Primary</Button>
}
export const Secondary = () => {
    return <Button variant='secondary'>Secondary</Button>
}
export const Success = () => {
    return <Button variant='success'>Success</Button>
}
export const Danger = () => {
    return <Button variant='danger'>Danger</Button>
}

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const PrimaryA = Template.bind({});

PrimaryA.args = {
    variant: 'primary',
    children: 'Primary A'
}

