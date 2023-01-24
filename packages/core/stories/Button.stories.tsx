import { Button } from '../src/Button'
import { ReactElement } from 'react'

export default {
    title: 'Button',
    component: Button
}

// Primary button
export const Primary = (): ReactElement => <Button>Primary button</Button>

// Large button
export const PrimaryLarge = (): ReactElement => (
    <Button size={'large'}>Large Button</Button>
)

// primary outline button
export const PrimaryOutline = (): ReactElement => (
    <Button variant={'outline'}>Outline button</Button>
)

// Primary outline large button
export const PrimaryOutlineLarge = (): ReactElement => (
    <Button variant={'outline'} size={'large'}>Outline large Button</Button>
)

// Secondary button
export const Secondary = (): ReactElement => (
    <Button color={'secondary'}>Secondary button</Button>
)
