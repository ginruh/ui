import { Button } from '../src/Button'

export default {
    title: 'Button',
    component: Button
}

// Primary button
export const Primary = (): React.ReactElement => (
    <Button text="Primary button" primary />
)

// Secondary button
export const Secondary = (): React.ReactElement => (
    <Button text="Secondary button" primary={false} />
)
