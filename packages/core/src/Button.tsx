import { ReactElement, ReactNode } from 'react'

interface Props {
    children: ReactNode
    color?: 'primary' | 'secondary' | 'info' | 'danger'
    variant?: 'solid' | 'outline' | 'link'
    size?: 'small' | 'medium' | 'large'
}

export const Button = ({
    color = 'primary',
    variant = 'solid',
    size = 'medium',
    children
}: Props): ReactElement => {
    return (
        <button>
            {children}
        </button>
    )
}
