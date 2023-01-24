import { Button } from '../src/Button'

export default {
    title: 'Button',
    component: Button
}

// Primary button
export const Primary = (): React.ReactElement => (
    <Button>Primary button</Button>
)

// Secondary button
export const Secondary = (): React.ReactElement => (
    <Button color={'secondary'}>
      Secondary button
    </Button>
)
