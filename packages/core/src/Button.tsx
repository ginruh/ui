import { cva } from 'class-variance-authority'
import { ReactElement } from 'react'

interface ButtonProps {
    text: string
    primary?: boolean
}

const styles = cva([], {
    variants: {
        color: {}
    }
})

export const Button = ({ primary = true, text }: ButtonProps): ReactElement => {
    return (
        <button
            className={`${
                primary
                    ? 'bg-blue-500 hover:bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            } rounded-md px-4 py-2`}
        >
            {text}
        </button>
    )
}
