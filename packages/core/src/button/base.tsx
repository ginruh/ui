import { ReactElement, useRef } from 'react'
import { AriaButtonProps, useButton } from 'react-aria'

export const BaseButton = (props: AriaButtonProps): ReactElement => {
    const ref = useRef<HTMLButtonElement>(null)
    const { buttonProps } = useButton(props, ref)
    return (
        <button {...buttonProps} ref={ref}>
            {props.children}
        </button>
    )
}
