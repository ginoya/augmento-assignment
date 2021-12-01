import React from 'react';
import './center.css';

type CenterProps={
    children:React.ReactNode
}

export default function Center(props:CenterProps) {
    return (
        <div className='center'>
            {props.children}
        </div>
    )
}
