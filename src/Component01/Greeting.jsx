import React from 'react'

export default function Greeting() {
    let curdate = new Date(2023, 3, 25, 14);
    curdate = curdate.getHours();
    let greeting = "";
    const cssStyle = {};

    if (curdate >= 1 && curdate < 12) {
        greeting = "Good Morning";
        cssStyle.color = "yellow";
    }
    else if (curdate > 12 && curdate < 15) {
        greeting = "Good Afternoon";
        cssStyle.color = "orange";
    }
    else if (curdate > 14 && curdate < 19) {
        greeting = "Good Evening";
        cssStyle.color = "lightblue";
    }
    else {
        greeting = "Good Night";
        cssStyle.color = "black";
    }

    return (
        <>
            <div className='card'>
                <h1>Hello Sir <span style={cssStyle}>{greeting}</span></h1>
            </div>
        </>
    )
}
