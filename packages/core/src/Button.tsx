import { cva } from 'class-variance-authority'
import { ReactElement, ReactNode } from 'react'

interface Props {
    children: ReactNode
    color?: 'primary' | 'secondary' | 'info' | 'danger'
    variant?: 'button' | 'link' | 'text'
    size?: 'small' | 'medium' | 'large'
}

const styles = cva(['rounded-md'], {
    variants: {
        color: {
            primary: 'bg-blue-500 hover:bg-blue-600 text-white shadow-md',
            secondary: 'bg-gray-100 hover:bg-gray-200 text-gray-800',
            info: [],
            danger: []
        },
        variant: {
            button: [],
            link: [],
            text: []
        },
        size: {
            small: ['px-2 py-1'],
            medium: ['px-3 py-2'],
            large: ['px-4 py-3']
        }
    }
})

export const Button = ({
    color = 'primary',
    variant = 'button',
    size = 'medium',
    children
}: Props): ReactElement => {
    return (
        <button className={styles({
            color,
            variant,
            size
        })}>
            {children}
        </button>
    )
}
