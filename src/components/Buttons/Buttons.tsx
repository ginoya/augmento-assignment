import React, { ReactNode } from 'react'
import './Button.css';

export type ButtonProps={
    variant:string,
    children:any,
}

function Buttons(props:ButtonProps) {
    const { variant = 'primary', children, ...rest } = props;
    return (
        <button className={`button ${variant}`} {...rest}>{children}</button>
    )
}
export default Buttons
