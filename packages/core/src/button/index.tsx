import { ReactElement, ReactNode } from 'react'
import { AriaButtonProps } from 'react-aria'
import { BaseButton } from './base'

interface ButtonProps extends AriaButtonProps {
    children: ReactNode
    color?: 'primary' | 'secondary' | 'danger'
    variant?: 'solid' | 'outline' | 'light' | 'link'
    size?: 'small' | 'medium' | 'large'
}

export const Button = ({
    color = 'primary',
    variant = 'solid',
    size = 'medium',
    children
}: ButtonProps): ReactElement => {
    return <BaseButton>
        {children}
    </BaseButton>
}
