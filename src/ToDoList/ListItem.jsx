import React from 'react'

export default function ListItem(props) {
    return (
        <>
            <li>{props.element} <span title='Remove' onClick={() =>{
                props.removeele(props.index)
            }}>&#8213;</span></li>
        </>
    );
}
